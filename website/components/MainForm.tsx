import {
    Box,
    Input,
    InputGroup,
    InputLeftAddon,
    Spinner,
    Stack,
    StackProps,
} from '@chakra-ui/core'
import { useStorageState } from 'react-storage-hooks'

import {
    AuthProvider,
    GoogleButton,
    GithubButton,
    useAuthData,
} from 'firebase-react-components'
import { Button, PageContainer } from 'landing-blocks'
import Router from 'next/router'
import React, { useState } from 'react'
import { Field, Form, useField } from 'react-final-form'
import {
    NPM_SCOPE,
    firebaseConfig,
    SESSION_STORAGE_CONFIG_KEY,
} from '../constants'
require('isomorphic-fetch')
import firebase from 'firebase/app'
import 'firebase/auth'


export type MainFormData = {
    name: string
    endpoint: string
}

async function validate(
    data: Partial<MainFormData>,
): Promise<Partial<MainFormData>> {
    const errors: Partial<MainFormData> = {}
    if (!data.name) {
        errors.name = 'name required'
    }
    if (!data.endpoint) {
        errors.endpoint = 'url required'
        return errors
    }
    console.log(data.endpoint)
    if (
        !data?.endpoint?.startsWith('http://') &&
        !data?.endpoint?.startsWith('https://')
    ) {
        errors.endpoint = 'graphql endpoint should be an url'
    }
    return errors
}

function useInitialValues(): [MainFormData, Function] {
    const [initialValues, setInitialValues] = useStorageState(
        typeof window === 'undefined' ? null : localStorage,
        SESSION_STORAGE_CONFIG_KEY,
        '{}',
    )
    let data: any
    try {
        data = JSON.parse(initialValues)
    } catch {
        data = {}
    }
    return [data, (x) => setInitialValues(JSON.stringify(x))]
}

export const MainForm = ({ ...rest }: StackProps) => {
    const [error, setError] = useState('')

    const [initialValues, setInitialValues] = useInitialValues()
    async function publishPackage(values: MainFormData) {
        // TODO user should first login
        setInitialValues(values)
        console.log('sending ' + JSON.stringify(values, null, 4))
        const res = await fetch('/api/generate', {
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        const json = await res.json()
        if (!json.ok) {
            setError(json.error)
            return
        }
        console.log('received ' + JSON.stringify(json, null, 4))
        await Router.push({ query: { name: json.name }, pathname: '/ok' })
    }
    return (
        <Form
            initialValues={initialValues}
            validate={validate}
            onSubmit={publishPackage}
            render={({ handleSubmit, submitting }) => {
                return (
                    <PageContainer>
                        <Stack
                            spacing='40px'
                            // justify='center'
                            // align='space-between'
                            minW='100%'
                            p='60px'
                            borderRadius='10px'
                            shadow='xl'
                            bg='white'
                            minH='100px'
                            // minW='400px'
                            {...rest}
                        >
                            <Stack
                                align='center'
                                as='form'
                                onSubmit={handleSubmit}
                            >
                                <AuthProvider
                                    onLogin={async () => {
                                        console.log(
                                            'called on login, redirecting',
                                        )
                                        await Router.push('/me')
                                    }}
                                >
                                    <MainFormContent
                                        error={error}
                                        resetError={() => setError('')}
                                        submitting={submitting}
                                    />
                                </AuthProvider>
                            </Stack>
                        </Stack>
                    </PageContainer>
                )
            }}
        />
    )
}

const MainFormContent = ({ submitting, resetError, error }) => {
    const [shouldLogin, setShouldLogin] = useState(false)
    const { user, loading } = useAuthData()
    if (submitting || loading) {
        return (
            <Stack
                // color='primary'
                align='center'
                justify='center'
                fontWeight='medium'
                fontSize='text'
                spacing='40px'
                opacity={0.6}
                textAlign='center'
            >
                <Box>
                    {loading ? 'logging in' : 'Generating the sdk package'}
                </Box>
                <Spinner />
                {/* <Code>npm install @genql/package-name</Code> */}
            </Stack>
        )
    }
    if (shouldLogin && !user) {
        return (
            <Stack
                maxW='400px'
                // color='primary'
                align='center'
                justify='center'
                fontWeight='medium'
                fontSize='text'
                spacing='40px'
                textAlign='center'
            >
                <Box>Login first to create the client</Box>
                <GithubButton text='Login With Github' />

                {/* <DisplayUser /> */}
            </Stack>
        )
    }
    if (error) {
        return (
            <Stack
                // color='primary'
                align='center'
                justify='center'
                fontWeight='medium'
                fontSize='text'
                spacing='40px'
                opacity={0.6}
                textAlign='center'
            >
                <Box>Got an error 😢</Box>
                <Box color='red.500'>{error}</Box>
                <Button
                    // color='black'
                    onClick={resetError}
                >
                    Retry
                </Button>
                {/* <Code>npm install @genql/package-name</Code> */}
            </Stack>
        )
    }
    if (!submitting) {
        return (
            <Stack spacing='40px'>
                <Stack direction='row' justify='space-between' align='flex-end'>
                    <Stack position='relative' spacing='10px'>
                        <Label>Npm package name</Label>
                        <Field
                            name='name'
                            render={({ input, meta }) => (
                                <InputGroup shadow='sm'>
                                    <InputLeftAddon>
                                        <Box opacity={0.6}>{NPM_SCOPE}/</Box>
                                    </InputLeftAddon>

                                    <Input
                                        {...input}
                                        isInvalid={meta.touched && meta.invalid}
                                        roundedLeft='0'
                                        type='text'
                                        placeholder='Package Name'
                                    />
                                </InputGroup>
                            )}
                        />
                        <ValidationError name='name' />
                    </Stack>
                    <Stack position='relative' spacing='10px'>
                        <Label>Your Graphql api endpoint</Label>
                        <Field
                            name='endpoint'
                            render={({ input, meta }) => (
                                <Input
                                    {...input}
                                    isInvalid={meta.touched && meta.invalid}
                                    shadow='sm'
                                    minW='300px'
                                    type='url'
                                    placeholder='https://your-graphql-api'
                                />
                            )}
                        />
                        <ValidationError name='endpoint' />
                    </Stack>
                    <Button
                        onClick={() => setShouldLogin(true)}
                        type='submit'
                        animate
                        shadow='md'
                    >
                        Generate Sdk Package
                    </Button>
                </Stack>
            </Stack>
        )
    }
}

const Label = (props) => {
    return <Box opacity={0.5} {...props} />
}

export const ValidationError = ({ name, ...rest }) => {
    const {
        meta: { error, touched },
    } = useField(name, { subscription: { error: true, touched: true } })
    if (touched && error) {
        return (
            <Box
                bottom='-50px'
                position='absolute'
                minH='40px'
                color='red.500'
                {...rest}
            >
                {error}
            </Box>
        )
    }
    return null
}
