import { ExecutionResult } from 'graphql'
import { getFieldFromPath } from './getFieldFromPath'
import { LinkedType } from './linkTypeMap'

export interface TypeMapper {
  [type: string]:
    | {
        serialize: (input: any) => any
        deserialize: (output: any) => any
      }
    | undefined
}

const applyRecursively = (root: LinkedType, data: any, typeMapper: TypeMapper, path: string[]): any => {
  if (data === null || data === undefined) return data
  else if (Array.isArray(data)) return data.map(i => applyRecursively(root, i, typeMapper, path))
  else if (typeof data === 'object')
    return Object.keys(data).reduce<any>((r, k) => {
      r[k] = applyRecursively(root, data[k], typeMapper, [...path, k])
      return r
    }, {})
  else {
    const field = getFieldFromPath(root, path)
    const specificMapper = typeMapper[field.type.name]
    if (specificMapper !== undefined) return specificMapper.deserialize(data)
    else return data
  }
}

export const applyTypeMapperToResponse = <T>(
  root: LinkedType,
  result: ExecutionResult<T>,
  mapper: TypeMapper,
): ExecutionResult<T> => ({
  data: applyRecursively(root, result.data, mapper, []),
  errors: result.errors,
})
