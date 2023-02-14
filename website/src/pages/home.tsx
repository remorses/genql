import NextImage from 'next/image'
import {
    ChartSquareBarIcon,
    CubeIcon,
    GlobeIcon,
    InboxInIcon,
    LightningBoltIcon,
    LinkIcon,
    SearchCircleIcon,
    UserAddIcon,
} from '@heroicons/react/outline'

import classNames from 'classnames'
import { Box, Stack } from 'layout-kit-react'

import { Faded } from 'baby-i-am-faded'

import {
    BrowserWindow,
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
import { ExploreClients } from './clients'
import { InferGetStaticPropsType } from 'next/types'
import { getClientsData } from '@app/support/utils'
import { NextSeo } from 'next-seo'

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

const Page = ({ clients }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <div style={{ background: BG }} className=' py-14 space-y-[40px]'>
        <NextSeo
            {...{
                title: 'Genql - SDK client for any GraphQL API',
                description:
                    'Type safe GraphQL query builder for TypeScript. Create an SDK for any GraphQL API',
            }}
        />

        {/* <Bg /> */}
        <Hero
            className='text-white dark'
            bullet={
                <a
                    className='appearance-none'
                    href='https://changelog.genql.dev'
                >
                    Introducing Genql 3.0
                </a>
            }
            cta={
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Button href='/docs'>Quick Start</Button>
                    <Button ghost href='/clients'>
                        Explore GraphQL Clients
                    </Button>
                </div>
            }
            heading={<div className=''>Type safe GraphQL query builder</div>}
            subheading={
                <Fragment>
                    Genql generates a TypeScript SDK
                    <br className='max-md:hidden' /> for your GraphQL API
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
        {/* <PageContainer className='text-gray-700'>
            <Features />
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
        <PageContainer className='dark pt-24 space-y-12 ' dontContain>
            <div className='text-center space-y-6 max-w-2xl self-center'>
                <h2 className='text-5xl font-semibold leading-tight'>
                    An SDK for every GraphQL API
                </h2>
                <div className='text-xl opacity-70'>
                    GenQL has a big catalog of already generated SDKs for all
                    public GraphQL APIs you can find
                </div>
            </div>
            <ExploreClients items={clients} loadMoreHref='/clients' />
        </PageContainer>

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

export async function getStaticProps() {
    const clients = (await getClientsData()).slice(0, 6)
    return {
        props: {
            clients,
        },
    }
}

export function FeaturesAppleBlocks({ items }) {
    return (
        <Faded
            animationName='fadeCardsScale'
            cascade
            duration={300}
            // cascadeIncrement={20}
            waitMount
            // timingFunction='ease-in'
            className='grid grid-cols-1 md:grid-cols-3 gap-8 '
        >
            {items.map((x, i) => {
                return (
                    <div
                        key={x.title + i}
                        style={{
                            gridColumn: x.cols
                                ? `span ${x.cols} / span ${x.cols}`
                                : undefined,
                        }}
                        className={classNames(
                            'transition-transform max-md:!col-span-1 rounded-xl p-6 origin-center',
                            'flex-col flex justify-between border-gray-400 backdrop-blur-lg',
                            'dark:border-gray-600 overflow-hidden bg-white shadow-2xl dark:bg-gray-700/40 min-h-[400px] gap-4',
                            x.className,
                        )}
                    >
                        <div className='flex gap-3'>
                            <div className='shrink-0 opacity-70 mt-1 text-4xl'>
                                {x.icon}
                            </div>
                            <div className='space-y-2'>
                                {x.heading && (
                                    <div className='font-semibold text-3xl'>
                                        {x.heading}
                                    </div>
                                )}
                                <div className='whitespace-pre-wrap min-h-[2.2em] opacity-70'>
                                    {x.description}
                                </div>
                            </div>
                        </div>
                        <div className='grow'></div>
                        <div
                            className={classNames(
                                'w-full grow flex-col flex',
                                '',
                            )}
                        >
                            {x.image}
                        </div>
                    </div>
                )
            })}
        </Faded>
    )
}

export function Features() {
    return (
        <FeaturesAppleBlocks
            items={[
                {
                    heading: 'Auto complete',
                    icon: <SearchCircleIcon className='w-[1em]' />,
                    cols: 2,
                    description:
                        'Notaku websites have very fast search built in.\nYour users will be able to find what they are looking for in seconds.',
                    image: (
                        <div className='relative flex -mx-[200px] -mb-20 flex-col'>
                            <div className=' self-center '>
                                <video
                                    loop
                                    autoPlay
                                    playsInline
                                    muted
                                    style={
                                        {
                                            // mixBlendMode: 'lighten',
                                        }
                                    }
                                    className='md:max-w-[600px] '
                                    // borderRadius='10px'
                                    src='/completion.mp4'
                                />
                                {/* <NextImage
                                    src={require('@app/../public/landing-page/search_light.png')}
                                    alt=''
                                /> */}
                            </div>
                            {/* <div className='bg-gray-100 w-full h-[140px] absolute bottom-0'></div> */}
                        </div>
                    ),
                },
                {
                    heading: 'Type safety',
                    icon: <LightningBoltIcon className='w-[1em]' />,
                    description:
                        'Notaku websites are built with speed in mind. We host your websites in a CDN, fast and reliable.',
                    image: (
                        <div className='rounded-lg overflow-hidden self-center'>
                            {/* <NextImage
                                src={require('@app/../public/landing-page/web_vitals.png')}
                                alt=''
                            /> */}
                        </div>
                    ),
                },
            ]}
        />
    )
}
