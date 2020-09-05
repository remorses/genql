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
    const str = visit(ast, { leave: printDocASTReducer(options) })
    return str
}

const printDocASTReducer = ({
    clientVarName = 'client',
    transformVariableName = (x) => x,
    thenCode,
}: PrintOptions): any => ({
    Name: (node) => node.value,
    Variable: (node) => transformVariableName(node.name),

    // Document

    Document: (node) => join(node.definitions, '\n\n') + '\n',

    OperationDefinition(node) {
        const selectionSet = node.selectionSet
        // Anonymous queries with no directives or variable definitions can use
        // the query short form.
        let code = join(node.variableDefinitions, '\n')
        if (node.variableDefinitions.length) {
            code = '// variables\n' + code
            code += '\n\n'
        }
        code += `${clientVarName}.${node.operation}(` + selectionSet + ')'
        if (thenCode) {
            code += `.then(${thenCode})`
        }
        return prettify(code, 'typescript')
    },

    VariableDefinition: ({ variable, type, defaultValue, directives }) => {
        return 'var ' + variable.replace('$', '')
    },
    SelectionSet: ({ selections }) => block(selections),

    Field: ({ alias, name, arguments: args, directives, selectionSet }) => {
        if (args.length == 0 && !join([selectionSet])) {
            return name + ': true'
        }
        if (args.length == 0) {
            return name + ': ' + join([selectionSet])
        }
        const argsAndFields = join([block(args), ',', selectionSet])
        return name + ': ' + wrap('[', argsAndFields, ']')
    },
    // join(directives, ' '),

    Argument: ({ name, value = '' }) => {
        return name + ': ' + printArgument(value)
    },
    // Fragments

    // Directive
})

function printArgument(value, transformVariableName = (x) => x) {
    if (typeof value === 'string') {
        return transformVariableName(value.replace('$', ''))
    }
    const kind = value?.kind
    if (kind === 'ObjectValue') {
        return `{ ${value.fields.map((x) => printArgument(x)).join('\n')} }`
    }
    if (kind === 'ObjectField') {
        return `${value.name}: ${printArgument(value.value)},`
    }
    if (kind == 'StringValue' || kind == 'EnumValue') {
        return `"${value.value}"`
    }
    if (kind == 'IntValue') {
        return `${value.value}`
    }
    if (kind == 'NullValue') {
        return `null`
    }
    if (kind == 'BooleanValue') {
        return `${value.value ? 'true' : 'false'}`
    }
    if (kind == 'ListValue') {
        return `[${value.values.map(printArgument).join(', ')}]`
    }
    console.error(`unhandled type ${kind}`)
    console.log(JSON.stringify(value, null, 4))
}

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray: Array<string>, separator = '') {
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
