import { renderTypeMap } from '../render/typeMap/renderTypeMap'
import { schemaRenderTest } from '../testHelpers/render'
import { applyTypeMapperToResponse } from './applyTypeMapperToResponse'
import { linkTypeMap } from './linkTypeMap'

const getRoot = async () => {
  const result = await schemaRenderTest(
    /* GraphQL */ `
      scalar Date

      type Object {
        other: Int!
        another: String!
        field: Date
        fieldRequired: Date!
        fieldArray: [Date]
        fieldArrayRequired: [Date!]!
        related: [Object!]!
      }

      type Query {
        object: Object
      }
    `,
    renderTypeMap,
  )

  const typeMap = linkTypeMap(JSON.parse(result))

  if (!typeMap.Query) throw new Error('query type is missing')

  return typeMap.Query
}

describe('applyTypeMapperToResponse', () => {
  test('successfully maps scalar types in response', async () => {
    const root = await getRoot()

    const result = applyTypeMapperToResponse<any>(
      root,
      {
        data: {
          object: {
            other: 3,
            another: null,
            field: new Date().toISOString(),
            fieldRequired: new Date().toISOString(),
            fieldArrayRequired: [new Date().toISOString(), new Date().toISOString()],
            related: [
              {
                field: new Date().toISOString(),
                fieldRequired: new Date().toISOString(),
                fieldArrayRequired: [new Date().toISOString(), new Date().toISOString()],
              },
              {
                field: new Date().toISOString(),
                fieldRequired: new Date().toISOString(),
                fieldArrayRequired: [new Date().toISOString(), new Date().toISOString()],
              },
            ],
          },
        },
      },
      {
        Date: {
          serialize: (d: Date) => d.toISOString(),
          deserialize: (d: string) => new Date(d),
        },
      },
    )

    expect(typeof result.data.object.other).toBe('number')
    expect(result.data.object.another).toBeNull()
    expect(result.data.object.field).toBeInstanceOf(Date)
    expect(result.data.object.fieldRequired).toBeInstanceOf(Date)
    expect(result.data.object.fieldArrayRequired[0]).toBeInstanceOf(Date)
    expect(result.data.object.fieldArrayRequired[1]).toBeInstanceOf(Date)
    expect(result.data.object.related[0].field).toBeInstanceOf(Date)
    expect(result.data.object.related[0].fieldRequired).toBeInstanceOf(Date)
    expect(result.data.object.related[0].fieldArrayRequired[0]).toBeInstanceOf(Date)
    expect(result.data.object.related[0].fieldArrayRequired[1]).toBeInstanceOf(Date)
    expect(result.data.object.related[1].field).toBeInstanceOf(Date)
    expect(result.data.object.related[1].fieldRequired).toBeInstanceOf(Date)
    expect(result.data.object.related[1].fieldArrayRequired[0]).toBeInstanceOf(Date)
    expect(result.data.object.related[1].fieldArrayRequired[1]).toBeInstanceOf(Date)
  })
})
