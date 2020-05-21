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
} from '@chakra-ui/core'
import { Faded } from 'baby-i-am-faded'
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
} from 'landing-blocks'
import React, { Fragment } from 'react'

const jsQueryCode = `
// Creating a new record
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

const MainForm = ({ ...rest }) => {
    return (
        <Stack
            spacing='40px'
            // justify='center'
            p='60px'
            borderRadius='10px'
            shadow='xl'
            bg='white'
            minH='100px'
            minW='400px'
            {...rest}
        >
            <Box
                // color='primary'
                fontWeight='medium'
                fontSize='text'
                opacity={0.6}
                textAlign='center'
            >
                <Box>
                    Generate a typed graphql client from your graphql api.
                </Box>
                {/* <Code>npm install @genql/package-name</Code> */}
            </Box>
            <Stack direction='row' align='flex-end'>
                <Stack spacing='10px'>
                    <Label>Npm package name</Label>
                    <InputGroup shadow='md'>
                        <InputLeftAddon>
                            <Box opacity={0.6}>@genql/</Box>
                        </InputLeftAddon>
                        <Input
                            roundedLeft='0'
                            type='text'
                            placeholder='Package Name'
                        />
                    </InputGroup>
                </Stack>
                <Stack spacing='10px'>
                    <Label>Your Graphql api endpoint</Label>
                    <Input
                        shadow='md'
                        minW='300px'
                        type='url'
                        placeholder='https://your-graphql-api'
                    />
                </Stack>
                <Button shadow='md'>Generate Sdk Package</Button>
            </Stack>
        </Stack>
    )
}

const Label = (props) => {
    return <Box opacity={0.5} {...props} />
}

const Page = () => (
    <Fragment>
        <LandingProvider primary='#D566C5'>
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
                            Graphql queries as code
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
                            <Keyframes>
                                <Frame duration={3000}>
                                    <CodeSnippet
                                        dark
                                        bg='gray.700'
                                        language='bash'
                                        isTyping
                                        code='npm i @genql/my-package'
                                    />
                                </Frame>
                                <Frame duration={500}>
                                    <Faded>
                                        <CodeSnippet
                                            language='javascript'
                                            isTyping
                                            code={jsQueryCode}
                                        />
                                    </Faded>
                                </Frame>
                            </Keyframes>
                        </Box>
                    }
                    // cta={<Button>Try Genql in 5 minutes</Button>}
                    // fingerprint='Already using Genql? Sign in'
                />
                <Divider dark heading='works everywhere' />
                <TestimonialsLogos
                    dark
                    // heading='Works everywhere'
                    // subheading='browser and node environments'
                    testimonials={[
                        <Box size='90px' as={ReactIcon} />,
                        <Box size='90px' as={AngularIcon} />,
                        <Box size='90px' as={NodeIcon} />,
                        <Box size='90px' as={OtherIcon} />,
                        <Box size='90px' as={NodeIcon2} />,
                    ]}
                />

                {/* cta form  */}
                <Flex justify='center'>
                    <MainForm alignSelf='center' mb='-60px' />
                </Flex>
            </Stack>

            {/* code snippets */}
            <Box mt='60px' />
            <SectionTitle
                heading='No more brittle graphql queries string'
                subheading='From js to graphql'
            />
            <PageContainer>
                <Stack
                    spacing='40px'
                    justify='center'
                    flexDir={['column', null, 'row']}
                    direction='row'
                    align='center'
                >
                    <CodeSnippet
                        shadow='lg'
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
                        <Image
                            h='300px'
                            borderRadius='10px'
                            shadow='lg'
                            src='/auto-completions.png'
                        />
                    }
                />
                <Feature
                    dark
                    heading='Queries validated by typescript'
                    subheading='Genql is the perfect companion for building web APIs. It saves repetitive CRUD boilerplate and provides a flexible API for common use cases such as pagination and filtering.'
                    image={
                        <Image
                            h='300px'
                            borderRadius='10px'
                            shadow='lg'
                            src='/auto-completions.png'
                        />
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
                cta={<Button>Try Genql in 5 minutes</Button>}
            />
            <Footer
                businessName='Prismic'
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
