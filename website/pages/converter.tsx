import { Stack } from 'layout-kit-react'
import React, { useEffect, useState } from 'react'
import { Code } from '../components/Code'
import gql from 'graphql-tag'
import { print } from 'genql-cli/dist/printer'
import { SectionTitle } from 'landing-blocks/src'

function Page({}) {
    const [code, setCode] = useState(DEFAULT_QUERY)
    const [genqlTranslation, setGenqlTranslation] = useState('')
    const [invalid, setInvalid] = useState('')
    useEffect(() => {
        setInvalid('')
        try {
            const query = gql(code)
            setGenqlTranslation('\n' + print(query, {}))
        } catch (e) {
            setInvalid(e.message)
        }
    }, [code])
    return (
        <Stack align='stretch'>
            <SectionTitle dark heading='Convert graphql to genql' />
            <Stack p='10' align='stretch'>
                <Stack
                    spacing='20'
                    justify='stretch'
                    width='100%'
                    direction='row'
                >
                    <Stack align='stretch' flex='1'>
                        {invalid && (
                            <Stack px='20px' zIndex={1000} mb='-40px' color='red.500'>
                                {invalid}
                            </Stack>
                        )}
                        <Code value={code} onChange={setCode} />
                    </Stack>
                    <Code
                        minHeight='100%'
                        flex='1'
                        readOnly
                        value={genqlTranslation}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Page

const DEFAULT_QUERY = `
query {
    getUser(where: { name: { eq: "John" }}) {
        name
        id
        address {
            city
            code
            state
        }
    }
}
`
