import Image from 'next/image'
import { Box, Stack } from 'layout-kit-react'

import { Faded } from 'baby-i-am-faded'

import {
    // Banner,
    Button,
    // CodeSnippet,
    Divider,
    Feature,
    Hero,
    PageContainer,
    Section,
    // SectionTitle,
    TestimonialLogos,
} from 'beskar/landing'
import NextLink from 'next/link'
import React, { Fragment } from 'react'
import {
    FaAngular as AngularIcon,
    FaArrowRight as ArrowRight,
    FaNode as NodeIcon,
    FaReact as ReactIcon,
} from 'react-icons/fa'

import { BG } from '../constants'
import { MyFooter, MyNavbar } from './_app'
import Head from 'next/head'

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
    <Stack
        as={'main'}
        style={{ background: BG }}
        className='dark py-14'
        w='100%'
        align='stretch'
        spacing='40px'
    >
        <Head>
            <title>Genql - SDK client for any GraphQL API</title>
        </Head>

        {/* <MyNavbar /> */}
        <Bg />
        <Hero
            bullet='Introducing Genql 3.0'
            cta={
                <NextLink href='/docs'>
                    <Button>Read the docs</Button>
                </NextLink>
            }
            heading={
                <div className=''>
                    Type safe Graphql <br />
                    query builder
                </div>
            }
            subheading={
                <Fragment>
                    Genql generates a typed graphql client
                    <br /> for your graphql api.
                </Fragment>
            }
            // image={<Image h='200px' w='300px' src='/robot.svg' />}
            // image={
            //     <Box fontSize={['sm', null, 'md']} m='10px'>
            //         <PatternBackground
            //             pattern='diagonalLinesSm'
            //             color='gray.200'
            //             scatter={20}
            //         >
            //             <Faded>
            //                 <CodeSnippet
            //                     key='2'
            //                     overflow='hidden'
            //                     // w='auto'
            //                     // w='300px'
            //                     language='javascript'
            //                     // isTyping
            //                     code={jsQueryCode}
            //                 />
            //             </Faded>
            //         </PatternBackground>
            //     </Box>
            // }
            // cta={<Button>Try Genql in 5 minutes</Button>}
            // fingerprint='Already using Genql? Sign in'
        />
        {/* <Divider heading='works in browser and node' /> */}
        {/* <TestimonialLogos
            // heading='Works everywhere'
            // subheading='browser and node environments'
            items={[
                // <Box size='80px' as={ReactIcon} />,
                // <Box size='90px' as={AngularIcon} />,
                // <Box size='90px' as={NodeIcon} />,
                // // <Box size='90px' as={OtherIcon} />,
                // <Image src={require('@app/../public/apollo-logo.svg')} />,
                // <Image src={require('@app/../public/nextjs-logo.svg')} />,
                // <Image src={require('@app/../public/hasura-logo.svg')} />,
                {
                    src: '/nodejs.svg',

                }
            ]}
        /> */}

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
        <Stack spacing='40px'>
            {/* <SectionTitle
                mt='40px'
                heading='Graphql queries written in code'
                subheading='Genql generates a graphql client with typescript types, giving you type safety and auto completion'
            /> */}
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
                    {/* <CodeSnippet
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
                    /> */}
                </Stack>
            </PageContainer>
        </Stack>

        <Feature
            flip
            heading='Auto completion'
            subheading='Queries written with a genql client support auto completion thanks to typescript typings'
            image={
                <Box overflow='hidden' className='relative' mr='-50%' mb='-50%'>
                    <video
                        loop
                        autoPlay
                        muted
                        style={{
                            mixBlendMode: 'lighten',
                            minWidth: '800px',
                        }}
                        // borderRadius='10px'
                        src='/completion.mp4'
                    />
                </Box>
            }
        />
        <div className='!pt-32'>
            <Feature
                heading='Type Validation'
                subheading={`Every query written with genql is validated against its schema, you can't write invalid queries anymore`}
                image={
                    <Box
                        overflow='hidden'
                        className='relative'
                        mr='-60%'
                        mb='-50%'
                        bg={BG}
                    >
                        <video
                            loop
                            autoPlay
                            muted
                            style={{
                                mixBlendMode: 'lighten',
                                minWidth: '800px',
                                // zIndex: 1000,
                            }}
                            // borderRadius='10px'
                            src='/validation.mp4'
                        />
                    </Box>
                }
            />
        </div>

        {/* <Section degree={0} zIndex={1} bg='white'>
            <Banner
                // dark
                heading='Generate your own graphql SDK in seconds'
                bullet='@genql/cli'
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
        </Section> */}
        {/* <MyFooter /> */}
    </Stack>
)

export default Page

function Bg() {
    return (
        <>
            <style jsx global>{`
                .background_main__HFlNS {
                    width: 100vw;
                    min-height: 100vh;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    padding: 120px 24px 160px;
                    pointer-events: none;
                }

                .background_content__pv7b5 {
                    transform: translateX(0px) translateY(0px) translateZ(0px);
                    max-width: 1800px;
                    background-image: radial-gradient(
                        at 30% 10%,
                        #27cdff 0,
                        transparent 100%
                    );
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 400px;
                    filter: blur(100px) saturate(150%);
                    top: 10px;
                    opacity: 0.13;
                }
            `}</style>
            <div className='background_main__HFlNS'>
                <div className='background_content__pv7b5' />
            </div>
        </>
    )
}
