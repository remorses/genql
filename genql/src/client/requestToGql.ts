import { OperationTypeNode } from 'graphql'
import { getFieldFromPath } from './getFieldFromPath'
import { LinkedType } from './linkTypeMap'
import { applyTypeMapperToVariable } from './applyTypeMapperToVariable'
import { TypeMapper } from './applyTypeMapperToResponse'

export interface Args {
  [arg: string]: any | undefined
}

export interface Fields {
  [field: string]: Request
}

export type Request = boolean | number | Fields | [Args, Fields?]

export interface Variables {
  [name: string]: {
    value: any
    typing: [string, LinkedType]
  }
}

export interface Context {
  root: LinkedType
  varCounter: number
  variables: Variables
  fragmentCounter: number
  fragments: string[]
}

export interface Gql {
  query: string
  variables: { [name: string]: any }
}

const parseRequest = (request: Request | undefined, ctx: Context, path: string[]): string => {
  if (Array.isArray(request)) {
    const [args, fields] = request
    const argNames = Object.keys(args)

    if (argNames.length === 0) {
      return parseRequest(fields, ctx, path)
    }

    const field = getFieldFromPath(ctx.root, path)

    return `(${argNames.map(argName => {
      ctx.varCounter++
      const varName = `v${ctx.varCounter}`

      const typing = field.args && field.args[argName]

      if (!typing) {
        throw new Error(`no typing defined for argument \`${argName}\` in path \`${path.join('.')}\``)
      }

      ctx.variables[varName] = {
        value: args[argName],
        typing,
      }

      return `${argName}:$${varName}`
    })})${parseRequest(fields, ctx, path)}`
  } else if (typeof request === 'object') {
    const fields = request
    const fieldNames = Object.keys(fields)

    if (fieldNames.length === 0) {
      throw new Error('field selection should not be empty')
    }

    const type = path.length > 0 ? getFieldFromPath(ctx.root, path).type : ctx.root
    const scalarFields = type.scalar

    let scalarFieldsFragment: string | undefined

    if (~fieldNames.indexOf('__scalar')) {
      if (!scalarFields) {
        throw new Error(`type ${type.name} has no scalar fields`)
      }

      ctx.fragmentCounter++
      scalarFieldsFragment = `f${ctx.fragmentCounter}`

      ctx.fragments.push(`fragment ${scalarFieldsFragment} on ${type.name}{${scalarFields.join(',')}}`)
    }

    return `{${fieldNames
      .filter(f => f !== '__scalar')
      .map(f => {
        const parsed = parseRequest(fields[f], ctx, [...path, f])

        if (f.startsWith('on_')) {
          ctx.fragmentCounter++
          const implementationFragment = `f${ctx.fragmentCounter}`

          const typeMatch = f.match(/^on_(.+)/)

          if (!typeMatch || !typeMatch[1]) throw new Error('match failed')

          ctx.fragments.push(`fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`)

          return `...${implementationFragment}`
        } else {
          return `${f}${parsed}`
        }
      })
      .concat(scalarFieldsFragment ? [`...${scalarFieldsFragment}`] : [])
      .join(',')}}`
  } else {
    return ''
  }
}

export const requestToGql = (
  operation: OperationTypeNode,
  root: LinkedType,
  fields: Fields,
  typeMapper?: TypeMapper,
): Gql => {
  const ctx: Context = { root, varCounter: 0, variables: {}, fragmentCounter: 0, fragments: [] }
  const result = parseRequest(fields, ctx, [])

  const varNames = Object.keys(ctx.variables)

  const varsString = varNames.length > 0 ? `(${varNames.map(v => `$${v}:${ctx.variables[v].typing[0]}`)})` : ''

  return {
    query: [`${operation}${varsString}${result}`, ...ctx.fragments].join(','),
    variables: Object.keys(ctx.variables).reduce<{ [name: string]: any }>((r, v) => {
      r[v] = applyTypeMapperToVariable(ctx.variables[v].value, ctx.variables[v].typing[1], typeMapper)
      return r
    }, {}),
  }
}
