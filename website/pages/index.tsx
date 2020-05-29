import { Box, Image, Stack } from '@chakra-ui/core'
import { Faded } from 'baby-i-am-faded'
// @jsx jsx
import { jsx, css } from '@emotion/core'
import {
    Banner,
    Button,
    CodeSnippet,
    Divider,
    Feature,
    Footer,
    Heading,
    Hero,
    LandingProvider,
    NavBar,
    PageContainer,
    PatternBackground,
    Section,
    SectionTitle,
    TestimonialsLogos,
} from 'landing-blocks'
import React, { Fragment } from 'react'
import {
    FaAngular as AngularIcon,
    FaArrowRight as ArrowRight,
    FaNode as NodeIcon,
    FaReact as ReactIcon,
} from 'react-icons/fa'
import { Frame, Keyframes } from 'react-keyframes'
import { MainForm } from '../components/MainForm'
import { BG } from './_app'

const jsQueryCode = `
import { createClient, everything } from '@genql/my-lib'

await createClient().query({
    User: {
        name: true,
        surname: true,
        address: {
            ...everything,
        }
    }
})`

const gqlQueryCode = `
query {
    User {
        name
        surname
        address {
            city
            state
        }
    }
}`

const Page = () => (
    <Stack spacing='40px'>
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
                <Box fontSize={['sm', null, 'md']} m='10px'>
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
                                        w='auto'
                                        overflow='hidden'
                                        minWidth='200px'
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
                                        overflow='hidden'
                                        w='auto'
                                        minWidth='300px'
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
                <Box size='80px' as={ReactIcon} />,
                <Box size='90px' as={AngularIcon} />,
                <Box size='90px' as={NodeIcon} />,
                // <Box size='90px' as={OtherIcon} />,
                <Image size='80px' src='/apollo-logo.svg' />,
                <Image size='90px' src='/nextjs-logo.svg' />,
                <Image size='90px' src='/hasura-logo.svg' />,
            ]}
        />

        {/* cta form  */}

        <Box>
            <Stack spacing='40px' mb='-100px'>
                <SectionTitle
                    // opacity={0.8}
                    dark
                    subheading={
                        <>
                            Generate a typed graphql client for your graphql
                            api.
                        </>
                    }
                />
                <MainForm alignSelf='center' />
            </Stack>
        </Box>

        {/* code snippets */}
        <Stack spacing='40px' py='120px' bg='white'>
            <SectionTitle
                mt='40px'
                heading='Get autocompletion and validation for your graphql queries'
                subheading='From js to graphql'
            />
            <PageContainer>
                <Stack
                    as={Faded}
                    // @ts-ignore
                    cascade
                    fontSize={['sm', null, 'md']}
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
                        // w='500px'
                        w='auto'
                        minWidth='300px'
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
                        w='auto'
                        minWidth='300px'
                        code={gqlQueryCode}
                        language='graphql'
                    />
                </Stack>
            </PageContainer>
        </Stack>

        <Feature
            dark
            flip
            heading='Auto completion for your queries'
            subheading='Genql generates a typescript client modeled on your graphql schema, this means that it supports autocompletion.'
            image={
                <Box bg={BG}>
                    <Image
                        css={css`
                            mix-blend-mode: lighten;
                        `}
                        h='400px'
                        // borderRadius='10px'
                        src='/completion.png'
                    />
                </Box>
            }
        />
        <Feature
            dark
            heading='Queries validated by typescript'
            subheading='Genql is the perfect companion for building web APIs. It saves repetitive CRUD boilerplate and provides a flexible API for common use cases such as pagination and filtering.'
            image={
                <Box bg={BG}>
                    <Image
                        css={css`
                            mix-blend-mode: lighten;
                        `}
                        h='400px'
                        // borderRadius='10px'
                        // shadow='lg'
                        src='/completion.png'
                    />
                </Box>
            }
        />

        <Section bg='white'>
            <Banner
                // dark
                heading='Add Genql to Your App or Start From Scratch'
                bullet='READY TO TRY?'
                bg='transparent'
                image={
                    <Image ml='-60px' width='200px' src='/bannerImage.svg' />
                }
                cta={<Button>Generate your graphql api sdk</Button>}
            />
        </Section>
    </Stack>
)

export default Page
