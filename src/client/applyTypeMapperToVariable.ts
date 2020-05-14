import { LinkedType } from './linkTypeMap'
import { TypeMapper } from './applyTypeMapperToResponse'
import { getFieldFromPath } from './getFieldFromPath'

const applyRecursively = (root: LinkedType, data: any, typeMapper: TypeMapper, path: string[]): any => {
  if (data === null || data === undefined) return data
  else {
    const field = path.length > 0 ? getFieldFromPath(root, path) : undefined
    const specificMapper = field ? typeMapper[field.type.name] : undefined
    if (specificMapper !== undefined) return specificMapper.serialize(data)
    else if (Array.isArray(data)) return data.map(i => applyRecursively(root, i, typeMapper, path))
    else if (typeof data === 'object')
      return Object.keys(data).reduce<any>((r, k) => {
        r[k] = applyRecursively(root, data[k], typeMapper, [...path, k])
        return r
      }, {})
    else return data
  }
}

export const applyTypeMapperToVariable = (value: any, root: LinkedType, typeMapper?: TypeMapper) => {
  if (!typeMapper) return value
  const specificMapper = typeMapper[root.name]
  if (specificMapper !== undefined) return specificMapper.serialize(value)
  return applyRecursively(root, value, typeMapper, [])
}
