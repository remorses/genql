import { linkTypeMap } from '../linkTypeMap'

test('linkTypeMap', () => {
    const typeMap = <any>linkTypeMap({
        scalars: ['Scalar'],
        types: {
            Some: {
                fields: {
                    other: { type: 'Other' },
                    unknown: { type: 'Unknown' },
                },
            },
            Other: {
                fields: {
                    some: { type: 'Some' },
                    scalar: { type: 'Scalar' },
                    unknown: { type: 'Unknown' },
                    withArgs: {
                        type: 'String',
                        args: {
                            some: ['String!', 'String'],
                            other: ['Some!', 'Some'],
                        },
                    },
                },
            },
            Scalar: {},
        },
    })

    console.log(typeMap)

    expect(typeMap.Some.fields.other.type).toBe(typeMap.Other)
    expect(typeMap.Other.fields.some.type).toBe(typeMap.Some)
    expect(typeMap.Other.fields.scalar.type).toBe(typeMap.Scalar)
    expect(typeMap.Some.fields.unknown.type).toBe(
        typeMap.Other.fields.unknown.type,
    )
    expect(typeMap.Other.fields.withArgs.args.some[1]).toBe(typeMap.String)
    expect(typeMap.Other.fields.withArgs.args.other[1]).toBe(typeMap.Some)
})
