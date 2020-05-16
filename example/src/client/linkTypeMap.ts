import { TypeMap } from '../render/typeMap/renderTypeMap'

export interface LinkedArgMap {
  [arg: string]: [string, LinkedType] | undefined
}
export interface LinkedField {
  type: LinkedType
  args?: LinkedArgMap
}

export interface LinkedFieldMap {
  [field: string]: LinkedField | undefined
}

export interface LinkedType {
  name: string
  fields?: LinkedFieldMap
  scalar?: string[]
}

export interface LinkedTypeMap {
  [type: string]: LinkedType | undefined
}

export const linkTypeMap = (typeMap: TypeMap) => {
  const linkedTypeMap = <LinkedTypeMap>JSON.parse(JSON.stringify(typeMap))

  Object.keys(linkedTypeMap).forEach(t => {
    const type = <LinkedType>linkedTypeMap[t]

    if (type.fields) {
      const fields = type.fields

      Object.keys(fields).forEach(f => {
        const field = <LinkedField>fields[f]

        if (field.args) {
          const args = field.args
          Object.keys(args).forEach(key => {
            const arg = args[key]

            if (arg) {
              const [, typeName] = arg

              if (typeof typeName === 'string') {
                if (!linkedTypeMap[typeName]) {
                  linkedTypeMap[typeName] = { name: typeName }
                }

                arg[1] = <LinkedType>linkedTypeMap[typeName]
              }
            }
          })
        }

        const typeName = <LinkedType | string>field.type

        if (typeof typeName === 'string') {
          if (!linkedTypeMap[typeName]) {
            linkedTypeMap[typeName] = { name: typeName }
          }

          field.type = <LinkedType>linkedTypeMap[typeName]
        }
      })
    }
  })

  return linkedTypeMap
}
