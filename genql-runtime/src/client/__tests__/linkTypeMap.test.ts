import { linkTypeMap } from '../linkTypeMap'
import { replaceTypeNamesWithIndexes } from 'genql-cli/dist/render/typeMap/renderTypeMap'

test('linkTypeMap', () => {
    const typeMap = <any>linkTypeMap(
        replaceTypeNamesWithIndexes({
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
                                some: ['String', 'String!'],
                                other: ['Some', 'Some!'],
                                singleVal: ['Some'],
                            },
                        },
                    },
                },
                Scalar: {},
            },
        }),
    )

    console.log(typeMap)

    expect(typeMap.Some.fields.other.type).toBe(typeMap.Other)
    expect(typeMap.Other.fields.some.type).toBe(typeMap.Some)
    expect(typeMap.Other.fields.scalar.type).toBe(typeMap.Scalar)
    expect(typeMap.Some.fields.unknown.type).toBe(
        typeMap.Other.fields.unknown.type,
    )
    expect(typeMap.Other.fields.withArgs.args.some[0]).toBe(typeMap.String)
    expect(typeMap.Other.fields.withArgs.args.other[0]).toBe(typeMap.Some)
    expect(typeMap.Other.fields.withArgs.args.singleVal[0]).toBe(typeMap.Some)
})

//         types: {
//             Some: {
//                 fields: {
//                     other: ['Other'],
//                     unknown: ['Unknown'],
//                 },
//             },
//             Other: {
//                 fields: {
//                     some: ['Some'],
//                     scalar: ['Scalar'],
//                     unknown: ['Unknown'],
//                     withArgs: [
//                         'String',
//                         {
//                             some: ['String', 'String!'],
//                             other: ['Some', 'Some!'],
//                             singleVal: ['Some'],
//                         },
//                     ],
//                 },
//             },
//             Scalar: {},
//         },
