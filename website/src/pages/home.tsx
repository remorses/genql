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
import { Bg } from '@app/components/bg'

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
    <div style={{ background: BG }} className='dark py-14 space-y-[40px]'>
        <Head>
            <title>Genql - SDK client for any GraphQL API</title>
        </Head>

        {/* <Bg /> */}
        <Hero
            className='text-white'
            bullet='Introducing Genql 3.0'
            cta={
                <div className='flex flex-col md:flex-row items-center gap-4'>
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
                    Genql generates a TypeScript SDK
                    <br /> for your GraphQL API
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
            subheading={
                <div>
                    Genql generates a TypeScript sdk for your GraphQL API.
                    <br />
                    <br />
                    You get IDE auto completion for your API and writing queries
                    becomes a breeze.
                </div>
            }
            image={
                <Box overflow='hidden' className='relative' mr='-50%' mb='-50%'>
                    <video
                        loop
                        autoPlay
                        playsInline
                        muted
                        style={{
                            mixBlendMode: 'lighten',
                        }}
                        className='md:max-w-[800px] max-w-full'
                        // borderRadius='10px'
                        src='/completion.mp4'
                    />
                </Box>
            }
        />

        <div className='!pt-32'>
            <Feature
                heading='Type Validation'
                subheading={
                    <div>
                        {`Every query written with genql is validated against its schema, you can't write invalid queries anymore`}
                        <br />
                        <br />
                        Fixing your queries after a schema change becomes very
                        easy
                    </div>
                }
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
                            playsInline
                            muted
                            className='md:max-w-[800px] max-w-full'
                            style={{
                                mixBlendMode: 'lighten',

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
    </div>
)

export default Page

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
