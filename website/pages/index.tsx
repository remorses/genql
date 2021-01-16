/** @jsx jsx */
import { Box, Image } from '@chakra-ui/core'
import { css, jsx } from '@emotion/core'
import { Faded } from 'baby-i-am-faded'

import {
    Banner,
    Button,
    CodeSnippet,
    Divider,
    Feature,
    Heading,
    Hero,
    PageContainer,
    PatternBackground,
    Section,
    SectionTitle,
    TestimonialsLogos,
    Stack,
} from 'landing-blocks'
import NextLink from 'next/link'
import React, { Fragment } from 'react'
import {
    FaAngular as AngularIcon,
    FaArrowRight as ArrowRight,
    FaNode as NodeIcon,
    FaReact as ReactIcon,
} from 'react-icons/fa'
import { MainForm } from '../components/MainForm'
import { BG } from '../constants'
jsx

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
    <Stack w='100%' align='stretch' spacing='40px'>
        <Hero
            bullet='Introducing Genql 1.0'
            dark
            cta={
                <NextLink href='/docs'>
                    <Button>Read the docs</Button>
                </NextLink>
            }
            heading={
                <Heading maxW='600px' fontSize='50px'>
                    Type safe Graphql <br />
                    query builder
                </Heading>
            }
            subheading={
                <Fragment>
                    Genql generates a typed graphql client
                    <br /> for your graphql api to use in browser or node.
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
                        <Faded>
                            <CodeSnippet
                                key='2'
                                overflow='hidden'
                                // w='auto'
                                // w='300px'
                                language='javascript'
                                // isTyping
                                code={jsQueryCode}
                            />
                        </Faded>
                    </PatternBackground>
                </Box>
            }
            // cta={<Button>Try Genql in 5 minutes</Button>}
            // fingerprint='Already using Genql? Sign in'
        />
        <Divider dark heading='works in browser and node' />
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

        {/* <Box>
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
        </Box> */}

        {/* code snippets */}
        <Stack spacing='40px' py='120px' bg='white'>
            <SectionTitle
                mt='40px'
                heading='Graphql queries written in code'
                subheading='Genql generates a graphql client with typescript types, giving you type safety and auto completion'
            />
            <PageContainer>
                <Stack
                    as={Faded}
                    // @ts-ignore
                    cascade
                    fontSize={['sm', null, 'md']}
                    spacing='40px'
                    justify='center'
                    direction={['column', null, 'row']}
                    align='center'
                >
                    <CodeSnippet
                        // bg='gray.200'
                        shadow='xl'
                        lineNumbers
                        // w='500px'
                        w='auto'
                        // minWidth='300px'
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
                        // minWidth='300px'
                        code={gqlQueryCode}
                        language='graphql'
                    />
                </Stack>
            </PageContainer>
        </Stack>

        <Feature
            dark
            flip
            heading='Auto completion'
            subheading='Queries written with a genql client support auto completion thanks to typescript typings'
            image={
                <Box overflow='hidden' mr='-50%' mb='-50%' zIndex={-1} bg={BG}>
                    <video
                        loop
                        autoPlay
                        muted
                        // @ts-ignore
                        css={css`
                            min-width: 800px;
                            mix-blend-mode: lighten;
                        `}
                        // borderRadius='10px'
                        src='/completion.mp4'
                    />
                </Box>
            }
        />
        <Feature
            dark
            heading='Type Validation'
            subheading={`Every query written with genql is validated against its schema, you can't write invalid queries anymore`}
            image={
                <Box overflow='hidden' mr='-60%' mb='-50%' zIndex={-2} bg={BG}>
                    <video
                        loop
                        autoPlay
                        muted
                        // @ts-ignore
                        css={css`
                            min-width: 800px;
                            mix-blend-mode: lighten;
                        `}
                        // borderRadius='10px'
                        src='/validation.mp4'
                    />
                </Box>
            }
        />

        <Section degree={0} zIndex={1} bg='white'>
            <Banner
                // dark
                heading='Want to use the cli instead?'
                bullet='cli is cool too'
                subheading='You can generate the client locally based on an endpoint or a local graphql schema.'
                bg='transparent'
                image={
                    <Image
                        ml='-60px'
                        minW='300px'
                        width='500px'
                        src='/banner.jpg'
                    />
                }
                cta={
                    <a href='/docs'>
                        <Button>Read the Docs</Button>
                    </a>
                }
            />
        </Section>
    </Stack>
)

export default Page
