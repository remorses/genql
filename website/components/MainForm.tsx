import {
    Box,
    Input,
    InputGroup,
    InputLeftAddon,
    Spinner,
} from '@chakra-ui/core'
import { useStorageState } from 'react-storage-hooks'
import debounce from 'p-debounce'
import { Stack, StackProps } from 'layout-kit-react'
import {
    AuthProvider,
    GoogleButton,
    GithubButton,
    useAuthData,
} from 'firebase-react-components'
import { Button, PageContainer } from 'landing-blocks'
import Router from 'next/router'
import React, { useState } from 'react'
import { Field, Form, useField, useForm, useFormState } from 'react-final-form'
import {
    NPM_SCOPE,
    firebaseConfig,
    SESSION_STORAGE_CONFIG_KEY,
    FIREBASE_ID_TOKEN_COOKIE,
} from '../constants'
import fetch from 'isomorphic-unfetch'
import firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'

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
        return errors
    }
    if (!data.endpoint) {
        errors.endpoint = 'url required'
        return errors
    }
    if (
        !data?.endpoint?.startsWith('http://') &&
        !data?.endpoint?.startsWith('https://')
    ) {
        errors.endpoint = 'graphql endpoint should be an url'
    }
    const nameOk = await npmNameAvailable(data.name)
    if (!nameOk) {
        errors.name = 'npm name already taken'
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
    const [shouldLogin, setShouldLogin] = useState(false)
    const { user, loading } = useAuthData()
    const [initialValues, setInitialValues] = useInitialValues()
    async function onSubmit(values: MainFormData) {
        console.log('onSubmit')
        setInitialValues(values)
        if (!user) {
            console.log('shouldLogin')
            setShouldLogin(true)
            return
        }

        console.log('sending ' + JSON.stringify(values, null, 4))
        const res = await fetch('/api/publish', {
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
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => {
                return (
                    <PageContainer spacing='0px'>
                        <Stack
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
                                onSubmit={handleSubmit}
                                align='center'
                                w='100%'
                                as='form'
                            >
                                <AuthProvider
                                    onError={console.error}
                                    onLogin={async (user) => {
                                        setShouldLogin(false)
                                        console.log(
                                            'called on login, redirecting',
                                        )
                                        // const uid = await user.getIdToken()
                                        // Cookies.set(
                                        //     FIREBASE_ID_TOKEN_COOKIE,
                                        //     uid,
                                        //     {
                                        //         path: '/',
                                        //     },
                                        // )
                                        await Router.push('/me')
                                    }}
                                >
                                    <MainFormContent
                                    w='100%'
                                        shouldLogin={shouldLogin}
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

const MainFormContent = ({ submitting, shouldLogin, resetError, error, ...rest }) => {
    const { loading, user } = useAuthData()
    const { valid } = useFormState()
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
                {...rest}
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
                    onClick={(e) => {
                        e.preventDefault()
                        resetError()
                    }}
                >
                    Retry
                </Button>
                {/* <Code>npm install @genql/package-name</Code> */}
            </Stack>
        )
    }
    if (!submitting) {
        return (
            <Stack
                // flexDir={['column', null, null, 'row']}
                spacing={['50px', null, '30px']}
                direction={['column', null, 'row']}
                // shouldWrapChildren
                justify={['space-between', null, 'center']}
                align={['center', null, 'flex-end']}
            >
                <Stack flex='1'  position='relative' spacing='10px'>
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
                                    minW='160px'
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
                <Stack
                    w={['100%', null, null, 'auto']}
                    position='relative'
                    spacing='10px'
                >
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
                    type='submit'
                    // onClick={() => setShouldLogin(true)}
                    animate
                    w={['100%', null, null, 'auto']}
                    shadow='md'
                >
                    Generate Sdk Package
                </Button>
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

export const npmNameAvailable = debounce(async (name) => {
    if (typeof name !== 'string') {
        return Promise.reject(new Error('Name must be a string'))
    }

    const url = `https://unpkg.com/${name.toLowerCase()}`
    const res = await fetch(url).catch((e) => {
        console.log('catched fetch err')
    })
    return res && res.status === 404
}, 400)
