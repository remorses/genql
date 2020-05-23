import {
    AspectRatioBox,
    Box,
    Image,
    Stack,
    Flex,
    InputGroup,
    InputLeftAddon,
    Input,
    Code,
    StackProps,
    Spinner,
} from '@chakra-ui/core'
require('isomorphic-fetch')

import Router from 'next/router'
import { Faded } from 'baby-i-am-faded'
import { Field, Form, FormProps, useField } from 'react-final-form'
import { Keyframes, Frame } from 'react-keyframes'

import {
    FaArrowRight as ArrowRight,
    FaReact as ReactIcon,
    FaAngular as AngularIcon,
    FaNode as NodeIcon,
    FaNodeJs as NodeIcon2,
    FaServer as OtherIcon,
} from 'react-icons/fa'
import {
    Banner,
    Button,
    CodeSnippet,
    Feature,
    Footer,
    Heading,
    Hero,
    LandingProvider,
    NavBar,
    SectionTitle,
    PageContainer,
    Section,
    TestimonialsLogos,
    Divider,
    PatternBackground,
    Link,
} from 'landing-blocks'
import React, { Fragment, useState } from 'react'

const jsQueryCode = `
import { genql } from '@genql/my-lib'
await Genql.users.create({
  data: {
    firstName: "Alice",
    email: "alice@Genql.io",
    active: true,
  }
})`

const gqlQueryCode = `
query {
    User {
        ciao
    }
}`

const BG =
    'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

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

export type MainFormData = {
    name: string
    endpoint: string
}

async function validate(data: Partial<MainFormData>) {
    const errors: Partial<MainFormData> = {}
    if (!data.name) {
        errors.name = 'name required'
    }
    if (!data.endpoint) {
        errors.endpoint = 'url required'
    }
    if (
        !data.endpoint.startsWith('http://') ||
        !data.endpoint.startsWith('https://')
    ) {
        errors.endpoint = 'graphql endpoint should be an url'
    }
    return errors
}

const MainForm = ({ ...rest }: StackProps) => {
    const [error, setError] = useState('')
    async function publishPackage(values: MainFormData) {
        // TODO user should first login
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
                            {submitting && !error && (
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
                                    <Box>Generating the sdk package</Box>
                                    <Spinner />
                                    {/* <Code>npm install @genql/package-name</Code> */}
                                </Stack>
                            )}
                            {error && (
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
                                        onClick={() => setError('')}
                                    >
                                        Retry
                                    </Button>
                                    {/* <Code>npm install @genql/package-name</Code> */}
                                </Stack>
                            )}
                            {!submitting && !error && (
                                <Stack spacing='40px'>
                                    <Stack
                                        direction='row'
                                        justify='space-between'
                                        align='flex-end'
                                    >
                                        <Stack
                                            position='relative'
                                            spacing='10px'
                                        >
                                            <Label>Npm package name</Label>
                                            <Field
                                                name='name'
                                                render={({ input, meta }) => (
                                                    <InputGroup shadow='md'>
                                                        <InputLeftAddon>
                                                            <Box opacity={0.6}>
                                                                @genql/
                                                            </Box>
                                                        </InputLeftAddon>

                                                        <Input
                                                            {...input}
                                                            isInvalid={
                                                                meta.touched &&
                                                                meta.invalid
                                                            }
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
                                            position='relative'
                                            spacing='10px'
                                        >
                                            <Label>
                                                Your Graphql api endpoint
                                            </Label>
                                            <Field
                                                name='endpoint'
                                                render={({ input, meta }) => (
                                                    <Input
                                                        {...input}
                                                        isInvalid={
                                                            meta.touched &&
                                                            meta.invalid
                                                        }
                                                        shadow='md'
                                                        minW='300px'
                                                        type='url'
                                                        placeholder='https://your-graphql-api'
                                                    />
                                                )}
                                            />
                                            <ValidationError name='endpoint' />
                                        </Stack>
                                        <Button
                                            onClick={() => {
                                                console.log('click')
                                                handleSubmit()
                                            }}
                                            animate
                                            shadow='md'
                                        >
                                            Generate Sdk Package
                                        </Button>
                                    </Stack>
                                </Stack>
                            )}
                        </Stack>
                    </PageContainer>
                )
            }}
        />
    )
}

const Label = (props) => {
    return <Box opacity={0.5} {...props} />
}

const Page = () => (
    <Fragment>
        <LandingProvider black='#333' primary='#D566C5'>
            <Stack
                spacing='60px'
                position='relative'
                background={BG}
                backgroundSize='cover'
            >
                <NavBar
                    dark
                    logo={
                        <Box fontWeight='medium' fontSize='24px'>
                            Genql
                        </Box>
                        // <Image
                        //     width='120px'
                        //     stroke='#000'
                        //     src='/logo_on_black.svg'
                        // />
                    }
                    navs={[
                        <a>Features</a>,
                        <a>Use Cases</a>,
                        <a>Pricing</a>,
                        <a>About Us</a>,
                        <a>Login</a>,
                    ]}
                />
                <Hero
                    bullet='Introducing Genql 1.0'
                    dark
                    heading={
                        <Heading maxW='600px' fontSize='50px'>
                            Graphql queries <br /> as code
                        </Heading>
                    }
                    subheading={
                        <Fragment>
                            Generate a typed graphql client
                            <br /> from your graphql api.
                        </Fragment>
                    }
                    // image={<Image h='200px' w='300px' src='/robot.svg' />}
                    image={
                        <Box>
                            <PatternBackground
                                pattern='diagonalLinesSm'
                                color='gray.200'
                                scatter={20}
                            >
                                <Keyframes>
                                    <Frame duration={2000}>
                                        <Faded>
                                            <CodeSnippet
                                                key='1'
                                                dark
                                                bg='gray.700'
                                                shadow='xl'
                                                language='bash'
                                                isTyping
                                                code='npm i @genql/my-package'
                                            />
                                        </Faded>
                                    </Frame>
                                    <Frame duration={500}>
                                        <Faded>
                                            <CodeSnippet
                                                key='2'
                                                language='javascript'
                                                isTyping
                                                code={jsQueryCode}
                                            />
                                        </Faded>
                                    </Frame>
                                </Keyframes>
                            </PatternBackground>
                        </Box>
                    }
                    // cta={<Button>Try Genql in 5 minutes</Button>}
                    // fingerprint='Already using Genql? Sign in'
                />
                <Divider dark heading='works everywhere' />
                <TestimonialsLogos
                    dark
                    animate
                    // heading='Works everywhere'
                    // subheading='browser and node environments'
                    testimonials={[
                        <Box size='90px' as={ReactIcon} />,
                        <Box size='90px' as={AngularIcon} />,
                        <Box size='90px' as={NodeIcon} />,
                        <Box size='90px' as={OtherIcon} />,
                        <Box size='90px' as={NodeIcon2} />, // TODO Nextjs icon
                        <Box size='90px' as={NodeIcon2} />, // TODO Hasura icon
                    ]}
                />

                {/* cta form  */}

                <Box>
                    <Stack spacing='40px' mb='-60px'>
                        <SectionTitle
                            // opacity={0.8}
                            dark
                            subheading={
                                <>
                                    Generate a typed graphql client for your
                                    graphql api.
                                </>
                            }
                        />
                        <MainForm alignSelf='center' />
                    </Stack>
                </Box>
            </Stack>

            {/* code snippets */}
            <Box mt='60px' />
            <SectionTitle
                heading='Get autocompletion and validation for your graphql queries'
                subheading='From js to graphql'
            />
            <PageContainer>
                <Stack
                    as={Faded}
                    // @ts-ignore
                    cascade
                    // @ts-ignore
                    spacing='40px'
                    justify='center'
                    flexDir={['column', null, 'row']}
                    direction='row'
                    align='center'
                >
                    <CodeSnippet
                        // bg='gray.200'
                        shadow='xl'
                        lineNumbers
                        w='500px'
                        h='300px'
                        code={jsQueryCode}
                        language='javascript'
                    />
                    <Box
                        opacity={0.6}
                        size='30px'
                        color='primary'
                        as={ArrowRight}
                    />
                    <CodeSnippet
                        dark
                        shadow='xl'
                        lineNumbers
                        w='500px'
                        h='300px'
                        code={gqlQueryCode}
                        language='graphql'
                    />
                </Stack>
            </PageContainer>

            <Box mt='60px' />
            <Section degree={1} background='#0d0f14'>
                <Feature
                    dark
                    flip
                    heading='Auto completion for your queries'
                    subheading='Genql generates a typescript client modeled on your graphql schema, this means that it supports autocompletion.'
                    image={
                        <PatternBackground
                            color='gray.200'
                            pattern='diagonalLinesSm'
                            scatter={20}
                        >
                            <Image
                                h='300px'
                                // borderRadius='10px'
                                shadow='lg'
                                src='/auto-completions.png'
                            />
                        </PatternBackground>
                    }
                />
                <Feature
                    dark
                    heading='Queries validated by typescript'
                    subheading='Genql is the perfect companion for building web APIs. It saves repetitive CRUD boilerplate and provides a flexible API for common use cases such as pagination and filtering.'
                    image={
                        <PatternBackground
                            pattern='diagonalLinesSm'
                            scatter={20}
                            color='gray.200'
                        >
                            <Image
                                h='300px'
                                // borderRadius='10px'
                                shadow='lg'
                                src='/auto-completions.png'
                            />
                        </PatternBackground>
                    }
                />
            </Section>
            <Banner
                heading='Add Genql to Your App or Start From Scratch'
                bullet='READY TO TRY?'
                bg='transparent'
                image={
                    <Image ml='-60px' width='200px' src='/bannerImage.svg' />
                }
                cta={<Button>Generate your graphql api sdk</Button>}
            />
            <Footer
                businessName='Prismic' // TODO make footer links
                columns={{
                    Developers: [
                        <a>Quickstart</a>,
                        <a>Documentation</a>,
                        <a>Samples</a>,
                    ],
                    Company: [
                        <a>Quickstart</a>,
                        <a>Documentation</a>,
                        <a>Samples</a>,
                    ],
                    Product: [
                        <a>Quickstart</a>,
                        <a>Documentation</a>,
                        <a>Samples</a>,
                    ],
                }}
            />
        </LandingProvider>
    </Fragment>
)

export default Page
