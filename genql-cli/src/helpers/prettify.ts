import prettier, { BuiltInParserName } from 'prettier'

export const prettify = (code: string, parser?: BuiltInParserName): string => {
    // return code
    return prettier.format(code, {
        parser,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 125,
    })
}
