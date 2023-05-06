import lodashCamelCase from 'lodash/camelCase'

export function camelCase(str: string) {
    if (!str) return str
    // keep leading _
    if (str.startsWith('_')) {
        const leadingChars = str.match(/^_+/)
        return (
            leadingChars![0] +
            lodashCamelCase(str.slice(leadingChars![0].length))
        )
    }
    if (str.endsWith('_')) {
        const leadingChars = str.match(/_+$/)
        return (
            lodashCamelCase(
                str.slice(0, str.length - leadingChars![0].length),
            ) + leadingChars![0]
        )
    }
    return lodashCamelCase(str)
}

export function capitalize(str: string) {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}
