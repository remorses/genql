import { Stack } from 'layout-kit-react'
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'
import { Code } from '@app/components/CodeEditor'
import { parse } from 'graphql'
import { print } from '@genql/cli/src/printer'
import { useDebouncedCallback } from 'use-debounce'
import { BG } from '../constants'

function Page({}) {
    const [code, setCode] = useState(DEFAULT_QUERY)
    const onCodeChange = useDebouncedCallback(() => {
        setInvalid('')
        try {
            const query = parse(code)
            console.log('parsed')
            setGenqlTranslation('\n' + print(query, {}))
        } catch (e) {
            console.error(e)
            setInvalid('Line ' + e.locations?.[0]?.line + ': ' + e.message)
        }
    }, 400)
    useEffect(() => {
        onCodeChange()
        return
    }, [code])
    const [genqlTranslation, setGenqlTranslation] = useState('')
    const [invalid, setInvalid] = useState('')
    return (
        <div className='space-y-12'>
            <NextSeo
                {...{
                    title: 'GraphQL to Genql TypeScript code converter',
                    description: 'Quickly migrate your queries to be type safe',
                }}
            />
            <div className='text-center space-y-6'>
                <h1 className='text-5xl font-semibold '>
                    Convert GraphQL to Genql code
                </h1>
                <h2 className='text-xl opacity-80'>
                    Quickly migrate your queries to be type safe
                </h2>
            </div>

            <Stack
                spacing='40px'
                justify='stretch'
                width='100%'
                align={['center', null, null, 'flex-start']}
                direction={['column', null, null, 'row']}
            >
                <div className='flex flex-col gap-4 grow'>
                    <Code value={code} onChange={setCode} />
                    {invalid && (
                        <pre className='text-red-300 text-sm'>{invalid}</pre>
                    )}
                </div>
                <div className='grow'>
                    <Code
                        hideLinesNumbers
                        flex='1'
                        readOnly
                        value={genqlTranslation}
                    />
                </div>
            </Stack>
        </div>
    )
}

export default Page

const DEFAULT_QUERY = `
query {
    getUser(where: { name: { eq: "Tommy" }}) {
        name
        id
        address {
            ...addressFragment
        }
    }
}

fragment addressFragment on Character {
    city
    code
    state
}
`
