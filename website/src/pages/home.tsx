import Image from 'next/image'
import classNames from 'classnames'
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
    FaThumbsDown,
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
        className='dark  py-14'
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
                <div className='flex items-center gap-4'>
                    <Button href='/docs'>Quick Start</Button>
                    <Button ghost href='/clients'>
                        Explore GraphQL Clients
                    </Button>
                </div>
            }
            heading={
                <div className=''>
                    Type safe GraphQL <br />
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

        {/* <PageContainer dontContain>
            <FeaturesBlocks
                items={[
                    {
                        heading: 'Auto completion',
                        icon: <FaThumbsDown className='w-[16px]' />,
                        description:
                            'Queries written with a genql client support auto completion thanks to typescript typings',
                        image: (
                            <img
                                src={
                                    'https://cdn.sanity.io/images/ornj730p/production/21866580a95028a6ce19619fd5be74ddb88bed6f-1288x624.png?w=600&q=95&auto=format&dpr=2'
                                }
                            />
                        ),
                    },
                    {
                        heading: 'Auto completion',
                        icon: <FaThumbsDown className='w-[16px]' />,
                        description:
                            'Queries written with a genql client support auto completion thanks to typescript typings',
                        image: (
                            <img
                                src={
                                    'https://cdn.sanity.io/images/ornj730p/production/21866580a95028a6ce19619fd5be74ddb88bed6f-1288x624.png?w=600&q=95&auto=format&dpr=2'
                                }
                            />
                        ),
                    },
                    {
                        heading: 'Auto completion',
                        icon: <FaThumbsDown className='w-[16px]' />,
                        description:
                            'Queries written with a genql client support auto completion thanks to typescript typings',
                        image: (
                            <img
                                src={
                                    'https://cdn.sanity.io/images/ornj730p/production/21866580a95028a6ce19619fd5be74ddb88bed6f-1288x624.png?w=600&q=95&auto=format&dpr=2'
                                }
                            />
                        ),
                    },
                    {
                        heading: 'Auto completion',
                        icon: <FaThumbsDown className='w-[16px]' />,
                        cols: 2,
                        description:
                            'Queries written with a genql client support auto completion thanks to typescript typings',
                        image: (
                            <img
                                className=''
                                src={
                                    'https://cdn.sanity.io/images/ornj730p/production/21866580a95028a6ce19619fd5be74ddb88bed6f-1288x624.png?w=600&q=95&auto=format&dpr=2'
                                }
                            />
                        ),
                    },
                    {
                        heading: 'Auto completion',
                        icon: <FaThumbsDown className='w-[16px]' />,
                        description:
                            'Queries written with a genql client support auto completion thanks to typescript typings',
                        image: (
                            <img
                                src={
                                    'https://cdn.sanity.io/images/ornj730p/production/21866580a95028a6ce19619fd5be74ddb88bed6f-1288x624.png?w=600&q=95&auto=format&dpr=2'
                                }
                            />
                        ),
                    },
                ]}
            />
        </PageContainer> */}
        <Feature
            flip
            heading='Auto completion'
            className='md:!pt-24'
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
                        at 40% 10%,
                        #4bfefe 0,
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

function FeaturesBlocks({ items }) {
    return (
        <Faded
            animationName='fadeCardsScale'
            cascade
            duration={300}
            // cascadeIncrement={20}
            waitMount
            // timingFunction='ease-in'
            className='grid grid-cols-3 gap-4 '
        >
            {items.map((x) => {
                return (
                    <div
                        style={{
                            gridColumn: x.cols
                                ? `span ${x.cols} / span ${x.cols}`
                                : undefined,
                        }}
                        className={classNames(
                            'dark:bg-gray-700/40 dark:border-gray-600 border-gray-400 hover:scale-95 transition-transform shadow backdrop-blur-lg flex flex-col p-6 h-[300px] rounded-md',
                            'border-2 origin-center',
                        )}
                    >
                        <div className='font-bold flex flex-col items-center w-full grow [&_img]:max-h-[200px] max-h-[200px]'>
                            {x.image}
                        </div>

                        <div className='flex gap-3'>
                            <div className='w-[24px] shrink-0 mt-1'>
                                {x.icon}
                            </div>
                            <div className='space-y-2'>
                                {x.heading && (
                                    <div className='font-bold'>{x.heading}</div>
                                )}
                                <div className='text-sm min-h-[2.2em] opacity-70'>
                                    {x.description}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Faded>
    )
}
