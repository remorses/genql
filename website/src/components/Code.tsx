import React, { useMemo } from 'react'
import { highlight, languages } from 'prismjs'
// import 'prismjs/components/prism-jsx'
import { default as classNames } from 'classnames'
import { useCopyToClipboard } from 'beskar/src/dashboard/CopyButton'

export const Code: React.FC<{ code: string; language: string }> = ({
    code,
    language = 'javascript',
}) => {
    const languageL = language.toLowerCase()
    const prismLanguage = languages[languageL] || languages.javascript

    const html = useMemo(() => {
        const html = highlight(code, prismLanguage, language)
        // console.log(html)
        return html
    }, [code, language])

    return (
        <pre
            style={{ fontSize: '14px' }}
            className={classNames(
                'relative text-gray-800 shrink-0 !bg-gray-200 !border-transparent',
                'rounded-md focus:outline-none',
            )}
        >
            <div className='overflow-x-auto px-8 py-8'>
                <div
                    className={classNames(
                        'absolute flex items-center space-x-2 font-mono text-xs  top-2',
                        'right-4 opacity-60',
                    )}
                >
                    <span className=''>{languageL}</span>
                    <CopyButton className='fill-current' text={code} />
                </div>
                <code
                    style={{ textShadow: 'none !important' }}
                    className='font-medium max-w-screen-2xl'
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                />
            </div>
        </pre>
    )
}

function CopyIcon({ ...rest }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            {...rest}
        >
            <path d='M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z' />
            <path d='M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z' />
        </svg>
    )
}

function CheckIcon({ ...rest }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            {...rest}
        >
            <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
            />
        </svg>
    )
}

export const CopyButton = ({ text, className, ...props }) => {
    const { hasCopied, copy } = useCopyToClipboard(text)
    const As = hasCopied ? CheckIcon : CopyIcon
    return (
        <As
            className={classNames('w-4 h-4 cursor-pointer', className)}
            onClick={copy}
            {...props}
        />
    )
}
