import { Box, Stack, Flex } from 'layout-kit-react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import prismTheme from 'prism-react-renderer/themes/duotoneLight'
import React, { useCallback } from 'react'
import Editor from 'react-simple-code-editor'

const CODE_FONT = `'Fira code','Fira Mono',monospace`

export const Code = ({
    value = '',
    hideLinesNumbers = false,
    onChange = (x) => x,
    style = {},
    readOnly = false,
    language = 'graphql' as const,
    ...rest
}) => {
    // console.log({rest, live})

    const highlightCode = useCallback(
        (code) => {
            return (
                <Highlight
                    {...defaultProps}
                    theme={prismTheme}
                    code={code}
                    language={language}
                >
                    {({
                        className,
                        // style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                    }) => (
                        <Box
                            flexShrink={0}
                            overflow='visible'
                            // direction='column'
                            // spacing='0'
                            // p='20px'
                            // pt='30px'
                            // borderRadius='8px'
                            as='pre'
                            fontFamily={CODE_FONT}
                            // fontSize='0.9em'
                            // style={{ ...style }}
                            // overflowX='auto'
                            fontWeight='500'
                            className={className}
                            style={style}
                            // {...rest}
                        >
                            {tokens.map((line, i) => (
                                <div
                                    key={i}
                                    {...getLineProps({ line, key: i })}
                                >
                                    {!hideLinesNumbers && (
                                        <Box
                                            d='inline-block'
                                            position='absolute'
                                            left='0px'
                                            textAlign='right'
                                            minW='40px'
                                            opacity={0.4}
                                            pr='40px'
                                            pl='20px'
                                        >
                                            {i + 1}
                                        </Box>
                                    )}
                                    {line.map((token, key) => (
                                        <span
                                            key={key}
                                            {...getTokenProps({ token, key })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </Box>
                    )}
                </Highlight>
            )
        },
        [value, onChange],
    )

    return (
        <>
            <style jsx>{`
                textarea {
                    border: none;
                    overflow: auto;
                    outline: none;

                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                }
            `}</style>
            <Editor
                value={value}
                padding={60}
                highlight={highlightCode}
                onValueChange={onChange}
                readOnly={readOnly}
                minLength={20}
                className='bg-gray-100 text-gray-800 rounded shadow shrink-0'
                style={{
                    whiteSpace: 'pre',
                    overflow: 'visible',
                    // width: '100%',
                    // overflowX: 'auto',
                    // margin: '-40px 0',
                    fontFamily: CODE_FONT,
                    ...style,
                }}
            />
        </>
    )
}
