import { Box, Image, Stack } from '@chakra-ui/core'
import { Faded } from 'baby-i-am-faded'
import { Banner, Button, CodeSnippet, Divider, Feature, Footer, Heading, Hero, LandingProvider, NavBar, PageContainer, PatternBackground, Section, SectionTitle, TestimonialsLogos } from 'landing-blocks'
import React, { Fragment } from 'react'
import { FaAngular as AngularIcon, FaArrowRight as ArrowRight, FaNode as NodeIcon, FaReact as ReactIcon } from 'react-icons/fa'
import { Frame, Keyframes } from 'react-keyframes'
import { MainForm } from '../components/MainForm'



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
