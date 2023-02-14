import { visit } from 'graphql/language/visitor'
import { ASTNode } from 'graphql/language/ast'
import { printBlockString } from 'graphql/language/blockString'
import { prettify } from './helpers/prettify'
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

export type PrintOptions = {
    clientVarName?: string
    transformVariableName?: (x: string) => string
    thenCode?: string
}
export function print(ast: ASTNode, options: PrintOptions = {}): string {
    const visitor = Object.fromEntries(
        Object.entries(printDocASTReducer(options)).map(([k, v]) => [
            k,
            { leave: v },
        ]),
    )
    const str = visit(ast, visitor) as any as string // graphql people don't know how to type
    // console.log(str)
    return str
}

const printDocASTReducer = ({
    clientVarName = 'client',
    transformVariableName = (x) => x,
    thenCode,
}: PrintOptions): any => ({
    Name: (node) => node.value,
    Variable: (node) => transformVariableName(node.name),
    NamedType: ({ name }) => name,
    ListType: ({ type }) => '[' + type + ']',
    NonNullType: ({ type }) => type,
    Directive: ({ name, arguments: args }) => '',

    IntValue: ({ value }) => value,
    FloatValue: ({ value }) => value,
    StringValue: ({ value, block: isBlockString }, key) =>
        JSON.stringify(value),
    BooleanValue: ({ value }) => (value ? 'true' : 'false'),
    NullValue: () => 'null',
    EnumValue: ({ value }) => `'${value}'`,
    ListValue: ({ values }) => '[' + join(values, ', ') + ']',
    ObjectValue: ({ fields }) => '{' + join(fields, ', ') + '}',
    ObjectField: ({ name, value }) => name + ': ' + value,

    // Document

    Document: (node) => join(node.definitions, '\n\n') + '\n',

    OperationDefinition(node) {
        const selectionSet = node.selectionSet
        // Anonymous queries with no directives or variable definitions can use
        // the query short form.
        let code = join(node.variableDefinitions, '\n')
        if (node.variableDefinitions.length) {
            code = '// query variables\n' + code
            code += '\n\n'
        }
        code += `${clientVarName}.${node.operation}({` + selectionSet + '})'
        if (thenCode) {
            code += `.then(${thenCode})`
        }
        return prettify(code, 'typescript')
    },

    VariableDefinition: ({ variable, type, defaultValue, directives }) => {
        if (!defaultValue) {
            if (type === 'String') {
                defaultValue = '""'
            } else if (type === 'Int') {
                defaultValue = '3'
            } else if (type === 'Float') {
                defaultValue = '3.0'
            } else if (type === 'Boolean') {
                defaultValue = 'false'
            } else if (type === 'ID') {
                defaultValue = '""'
            } else if (type === 'Date') {
                defaultValue = `new Date().toISOString() // ${type}`
            } else if (type === 'DateTime') {
                defaultValue = `new Date().toISOString() // ${type}`
            } else if (type === 'Time') {
                defaultValue = `new Date().toISOString() // ${type}`
            } else {
                defaultValue = `null // ${type}`
            }
        }
        return 'let ' + variable.replace('$', '') + ' = ' + defaultValue
    },
    SelectionSet: ({ selections }) => selections,

    Field: ({ alias, name, arguments: args, directives, selectionSet }) => {
        if (args.length == 0 && !join([selectionSet])) {
            return name + ': true'
        }
        if (args.length == 0) {
            return name + ': ' + block(selectionSet)
        }

        return (
            name +
            ': ' +
            block(['__args: ' + block(args), ...(selectionSet || [])])
        )
    },
    // join(directives, ' '),

    Argument: ({ name, value = '' }) => {
        if (typeof value === 'string') {
            return name + ': ' + transformVariableName(value.replace('$', ''))
        }
        console.error(
            `unhandled type, received ${JSON.stringify(value)} as Argument`,
        )
        return ''
    },
    // Fragments

    FragmentSpread: ({ name, directives }) => {
        // TODO FragmentSpread
        return '...' + name
    },

    InlineFragment: ({ typeCondition, directives, selectionSet }) => {
        // console.log({ selectionSet, directives, typeCondition })
        return join(
            ['', wrap('on_', typeCondition), ':', block(selectionSet)],
            ' ',
        )
    },

    FragmentDefinition: ({
        name,
        typeCondition,
        variableDefinitions,
        directives,
        selectionSet,
    }) => {
        // TODO FragmentDefinition
        // Note: fragment variable definitions are experimental and may be changed
        // or removed in the future.
        return `var ${name} = ` + block(selectionSet) + ''
    },
    // Directive
})

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray: Array<string>, separator = '') {
    // console.log({ maybeArray })
    if (!maybeArray) return ''
    return maybeArray?.filter((x) => x).join(separator) ?? ''
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
    return array && array.length !== 0
        ? '{\n' + indent(join(array, ',\n')) + '\n}'
        : ''
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end = '') {
    return maybeString ? start + maybeString + end : ''
}

function indent(maybeString) {
    return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ')
}

function isMultiline(string) {
    return string.indexOf('\n') !== -1
}

function hasMultilineItems(maybeArray) {
    return maybeArray && maybeArray.some(isMultiline)
}
