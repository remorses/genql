import { print } from '@genql/cli/src/printer'
import { GraphQLField, GraphQLNonNull, GraphQLSchema, parse } from 'graphql'
// import { generateRandomQuery } from 'ibm-graphql-query-generator'

export function generateQueries(p: {
    packageName: string
    number?: number
    schema: GraphQLSchema
}) {
    p.number = p.number || 1
    let code = `import { createClient } from '${p.packageName}'\n`
    code += `const client = createClient()\n`
    let mutationIndex = 3
    const queries = generateRandomQueries({
        // seed: 2,
        gqlSchema: p.schema,
        depthLimit: 2,
        type: 'query',
    }).slice(0, mutationIndex)
    const mutations = generateRandomQueries({
        // seed: 2,
        gqlSchema: p.schema,
        depthLimit: 3,
        type: 'mutation',
    }).slice(0, 2)
    const compiled = [...queries, ...mutations]
        .map((x) => {
            try {
                return parse(x)
            } catch (e) {
                console.log('Failed graphql parsing', x, e)
                return
            }
        })
        .filter(Boolean)
    for (let i = 0; i <= p.number; i++) {
        code += '\n\n'
        const q = compiled[i]
        if (!q) {
            break
        }
        if (i === mutationIndex) {
            code += '// Mutations\n'
        }

        code += print(q, {
            clientVarName: 'client',
            transformVariableName,
            thenCode,
        })
    }
    return code
}

const thenCode = 'x => console.log(JSON.stringify(x, null, 4))'

const transformVariableName = (x) => {
    return x
        .replace('Query__', '')
        .replace('Mutation__', '')
        .replace('Subscription__', '')
}

function generateRandomQueries({
    gqlSchema,
    depthLimit = 3,
    includeDeprecatedFields = false,
    type,
}) {
    if (!gqlSchema) {
        throw new Error('gqlSchema is required')
    }
    let includeCrossReferences = false

    /**
     * Compile arguments dictionary for a field
     * @param field current field object
     * @param duplicateArgCounts map for deduping argument name collisions
     * @param allArgsDict dictionary of all arguments
     */
    const getFieldArgsDict = (
        field: GraphQLField<any, any>,
        duplicateArgCounts,
        allArgsDict = {},
    ) =>
        field.args
            .filter((x, i) => {
                // console.log('required', x)
                const required = x.type instanceof GraphQLNonNull
                return required || i < 2
            })
            .reduce((o, arg) => {
                if (arg.name in duplicateArgCounts) {
                    const index = duplicateArgCounts[arg.name] + 1
                    duplicateArgCounts[arg.name] = index
                    o[`${arg.name}${index}`] = arg
                } else if (allArgsDict[arg.name]) {
                    duplicateArgCounts[arg.name] = 1
                    o[`${arg.name}1`] = arg
                } else {
                    o[arg.name] = arg
                }
                return o
            }, {})

    /**
     * Generate variables string
     * @param dict dictionary of arguments
     */
    const getArgsToVarsStr = (dict) =>
        Object.entries(dict)
            .map(([varName, arg]: any) => `${arg.name}: $${varName}`)
            .join(', ')

    /**
     * Generate types string
     * @param dict dictionary of arguments
     */
    const getVarsToTypesStr = (dict) =>
        Object.entries(dict)
            .map(([varName, arg]: any) => `$${varName}: ${arg.type}`)
            .join(', ')

    /**
     * Generate the query for the specified field
     * @param curName name of the current field
     * @param curParentType parent type of the current field
     * @param curParentName parent name of the current field
     * @param argumentsDict dictionary of arguments from all fields
     * @param duplicateArgCounts map for deduping argument name collisions
     * @param crossReferenceKeyList list of the cross reference
     * @param curDepth current depth of field
     * @param fromUnion adds additional depth for unions to avoid empty child
     */
    const generateQuery = (
        curName,
        curParentType,
        curParentName = '',
        argumentsDict = {},
        duplicateArgCounts = {},
        crossReferenceKeyList = [], // [`${curParentName}To${curName}Key`]
        curDepth = 1,
        fromUnion = false,
    ) => {
        const field = gqlSchema.getType(curParentType).getFields()[curName]
        const curTypeName = field.type.toJSON().replace(/[[\]!]/g, '')
        const curType = gqlSchema.getType(curTypeName)
        let queryStr = ''
        let childQuery = ''

        if (curType.getFields) {
            const crossReferenceKey = `${curParentName}To${curName}Key`
            if (
                (!includeCrossReferences &&
                    crossReferenceKeyList.indexOf(crossReferenceKey) !== -1) ||
                (fromUnion ? curDepth - 2 : curDepth) > depthLimit
            ) {
                return { queryStr: '' }
            }
            if (!fromUnion) {
                crossReferenceKeyList.push(crossReferenceKey)
            }
            const childKeys = Object.keys(curType.getFields())
            childQuery = childKeys
                .filter((fieldName, i) => {
                    if (i >= 3) {
                        return false
                    }
                    /* Exclude deprecated fields */
                    const fieldSchema = gqlSchema.getType(curType).getFields()[
                        fieldName
                    ]

                    return (
                        includeDeprecatedFields ||
                        !fieldSchema.deprecationReason
                    )
                })
                .map(
                    (cur) =>
                        generateQuery(
                            cur,
                            curType,
                            curName,
                            argumentsDict,
                            duplicateArgCounts,
                            crossReferenceKeyList,
                            curDepth + 1,
                            fromUnion,
                        ).queryStr,
                )
                .filter((cur) => Boolean(cur))
                .join('\n')
        }

        if (!(curType.getFields && !childQuery)) {
            queryStr = `${'    '.repeat(curDepth)}${field.name}`
            if (field.args.length > 0) {
                const dict = getFieldArgsDict(
                    field,
                    duplicateArgCounts,
                    argumentsDict,
                )
                const len = Object.keys(dict).length
                Object.assign(argumentsDict, dict)
                if (len > 0) {
                    queryStr += `(${getArgsToVarsStr(dict)})`
                }
            }
            if (childQuery) {
                queryStr += `{\n${childQuery}\n${'    '.repeat(curDepth)}}`
            }
        }

        /* Union types */
        if (curType.astNode && curType.astNode.kind === 'UnionTypeDefinition') {
            const types = curType.getTypes()
            if (types && types.length) {
                const indent = `${'    '.repeat(curDepth)}`
                const fragIndent = `${'    '.repeat(curDepth + 1)}`
                queryStr += '{\n'
                queryStr += `${fragIndent}__typename\n`

                for (let i = 0, len = types.length; i < len; i++) {
                    const valueTypeName = types[i]
                    const valueType = gqlSchema.getType(valueTypeName)
                    const unionChildQuery = Object.keys(valueType.getFields())
                        .map(
                            (cur) =>
                                generateQuery(
                                    cur,
                                    valueType,
                                    curName,
                                    argumentsDict,
                                    duplicateArgCounts,
                                    crossReferenceKeyList,
                                    curDepth + 2,
                                    true,
                                ).queryStr,
                        )
                        .filter((cur) => Boolean(cur))
                        .join('\n')

                    /* Exclude empty unions */
                    if (unionChildQuery) {
                        queryStr += `${fragIndent}... on ${valueTypeName} {\n${unionChildQuery}\n${fragIndent}}\n`
                    }
                }
                queryStr += `${indent}}`
            }
        }
        return { queryStr, argumentsDict }
    }

    /**
     * Generate the query for the specified field
     * @param obj one of the root objects(Query, Mutation, Subscription)
     * @param name description of the current object
     */
    const generateQueries = (obj, name, queryName) => {
        return Object.keys(obj).map((type) => {
            const field = gqlSchema.getType(name).getFields()[type]
            /* Only process non-deprecated queries/mutations: */
            if (includeDeprecatedFields || !field.deprecationReason) {
                const queryResult = generateQuery(type, name)
                const varsToTypesStr = getVarsToTypesStr(
                    queryResult.argumentsDict,
                )
                let query = queryResult.queryStr

                query = `${queryName || name.toLowerCase()} ${type}${
                    varsToTypesStr ? `(${varsToTypesStr})` : ''
                }{\n${query}\n}`
                return query
            }
            return ''
        })
    }

    let res = []
    if (type === 'mutation' && gqlSchema.getMutationType()) {
        res.push(
            ...generateQueries(
                gqlSchema.getMutationType().getFields(),
                gqlSchema.getMutationType().name,
                'mutation', // ,
            ),
        )
    }

    if (type === 'query' && gqlSchema.getQueryType()) {
        res.push(
            ...generateQueries(
                gqlSchema.getQueryType().getFields(),
                gqlSchema.getQueryType().name,
                'query', // gqlSchema.getQueryType().name,
            ),
        )
    }

    if (type === 'subscription' && gqlSchema.getSubscriptionType()) {
        res.push(
            ...generateQueries(
                gqlSchema.getSubscriptionType().getFields(),
                gqlSchema.getSubscriptionType().name,
                'subscription', //gqlSchema.getSubscriptionType().name,
            ),
        )
    }
    return res
}
