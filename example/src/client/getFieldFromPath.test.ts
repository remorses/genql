import { getFieldFromPath } from './getFieldFromPath'
import { linkTypeMap } from './linkTypeMap'

describe('getFieldFromPath', () => {
  test('gets nested field definition', () => {
    const typeMap = <any>linkTypeMap({
      Some: {
        name: 'Some',
        fields: {
          other: { type: 'Other' },
          unknown: { type: 'Unknown' },
        },
      },
      Other: {
        name: 'Other',
        fields: {
          some: { type: 'Some' },
          scalar: { type: 'Scalar' },
          unknown: { type: 'Unknown' },
          union: { type: 'Union' },
        },
      },
      Union: {
        name: 'Union',
        fields: {
          on_Some: { type: 'Some' },
        },
      },
      Scalar: {
        name: 'Scalar',
      },
    })

    expect(getFieldFromPath(typeMap['Some'], ['other', 'some', 'other', 'scalar'])).toBe(typeMap.Other.fields.scalar)
    expect(getFieldFromPath(typeMap['Other'], ['union', 'other'])).toBe(typeMap.Some.fields.other)
  })

  describe('throws an error', () => {
    test('when root is not provided', () =>
      expect(() => getFieldFromPath(undefined, ['some'])).toThrow('root type is not provided'))

    test('when the path is empty', () => expect(() => getFieldFromPath({ name: 'Root' }, [])).toThrow('path is empty'))

    test('when requesting a field on a type without fields', () =>
      expect(() => getFieldFromPath({ name: 'Root' }, ['field'])).toThrow('type `Root` does not have fields'))

    test("when requesting a field on a type that doesn't have it", () =>
      expect(() => {
        const typeMap = <any>linkTypeMap({
          Root: {
            name: 'Root',
            fields: {
              some: { type: 'Some' },
            },
          },
        })
        getFieldFromPath(typeMap.Root, ['other'])
      }).toThrow('type `Root` does not have a field `other`'))
  })
})
