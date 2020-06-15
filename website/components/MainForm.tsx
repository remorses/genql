import {
    Box,
    Input,
    InputGroup,
    InputLeftAddon,
    Spinner,
    useColorMode,
} from '@chakra-ui/core'
import {
    AuthProvider,
    GithubButton,
    useAuthData,
} from 'firebase-react-components'
import 'firebase/auth'
import fetch from 'isomorphic-unfetch'
import { Button, PageContainer } from 'landing-blocks'
import { Stack, StackProps } from 'layout-kit-react'
import Router from 'next/router'
import debounce from 'p-debounce'
import React, { useState } from 'react'
import {
    Field,
    Form,
    useField,
    useFormState,
    FormRenderProps,
} from 'react-final-form'
import { useStorageState } from 'react-storage-hooks'
import { NPM_SCOPE, SESSION_STORAGE_CONFIG_KEY } from '../constants'
import { FormApi } from 'final-form'

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
    // const nameOk = await npmNameAvailable(data.name)
    // if (!nameOk) {
    //     errors.name = 'npm name already taken'
    // }
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
            render={(formProps) => {
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
                                onSubmit={formProps.handleSubmit}
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
                                        {...formProps}
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

const MainFormContent = ({
    submitting,
    shouldLogin,
    resetError,
    error,
    handleSubmit,
    ...rest
}: FormRenderProps & { shouldLogin; resetError }) => {
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
                <Stack flex='1' position='relative' spacing='10px'>
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
                    <Label>
                        Your Graphql api endpoint, for example{' '}
                        <Box as='pre' fontSize='0.8em'>
                            https://countries.trevorblades.com
                        </Box>
                    </Label>
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
                    onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
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
    const { colorMode } = useColorMode()
    return (
        <Box
            color={{ light: 'gray.500', dark: 'gray.200' }[colorMode]}
            {...props}
        />
    )
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
