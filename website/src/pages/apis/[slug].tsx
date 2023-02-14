import classNames from 'classnames'
import dedent from 'dedent'
import yaml from 'yaml'
import fs from 'fs'

import { Faded } from 'baby-i-am-faded'

import {
    Hero,
    InlineCode as InlineCode_,
    Link,
    PageContainer,
} from 'beskar/landing'
import { gray } from 'beskar/colors'
import { Code } from '@app/components/Code'
import NextLink from 'next/link'
import { Fragment } from 'react'
import { FaThumbsDown } from 'react-icons/fa'
import { FiArchive } from 'react-icons/fi'

import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism-twilight.css'

import { BG, websiteUrl } from '@app/constants'
import Head from 'next/head'
import {
    GetStaticPathsContext,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next'
import path from 'path'
import { getClientsData } from '@app/support/utils'
import { NextSeo } from 'next-seo'

function InlineCode({ children }: { children: string }) {
    return <InlineCode_ style={{ background: '#333' }}>{children}</InlineCode_>
}
function H2({ children }: { children: string }) {
    return (
        <h2 className='text-3xl font-semibold text-white leading-tight'>
            {children}
        </h2>
    )
}

const Page = ({
    slug,
    description,
    website,
    favicon,
    queriesCode,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const host = new URL(website).host
    return (
        <main
            style={{ background: BG }}
            className='dark py-14 w-full items-stretch space-y-[40px]'
        >
            <NextSeo
                {...{
                    title: `TypeScript SDK for ${host} API - Powered by Genql`,
                    description: `API client for the ${host} GraphQL API. Full typescript support, works on browser and server.`,
                }}
            />
            <Hero
                bullet={
                    <div className='flex items-center gap-2 -mx-1'>
                        {/* {favicon && (
                            <img
                                className='rounded h-[17px]'
                                alt='icon'
                                src={favicon}
                            />
                        )} */}
                        <div>Powered by Genql</div>
                    </div>
                }
                heading={
                    <div className='tracking-wide leading-tight'>
                        GraphQL client for the <br />
                        <span className='font-bold'>{host}</span> API
                    </div>
                }
                // subheading={
                //     <Fragment>
                //         Full typescript support, works on browser and server
                //     </Fragment>
                // }
            />

            <div className='pt-8'></div>
            <PageContainer
                className='space-y-8 [--page-max-width:800px] text-gray-300 text-lg'
                dontContain
            >
                <div className='space-y-4'>
                    <p className='whitespace-pre-wrap'>{description}</p>
                    <p className=''>
                        This SDK was created from the {host} GraphQL API with{' '}
                        <Link underline href={websiteUrl}>
                            Genql
                        </Link>
                        .
                    </p>
                    <p className=''>
                        This library is fully type safe and thanks to TypeScript
                        auto completion you can discover fields and methods very
                        easily.
                    </p>
                </div>
                <div className='space-y-4'>
                    <H2>How to install</H2>
                    <div className=''>
                        Use a package manager to install the API client
                    </div>
                    <div className=''>
                        <Code
                            language='bash'
                            code={`npm install @genql/${slug}`}
                        />
                    </div>
                </div>
                <div className='space-y-4'>
                    <H2>Using the client</H2>
                    <div className=''>
                        Use a package manager to install the API client
                    </div>
                    <div className=''>
                        <Code
                            language='typescript'
                            code={dedent`
                        import { createClient } from '@genql/${slug}'
                        const client = createClient()

                        `}
                        />
                    </div>
                </div>
                <div className='space-y-4'>
                    <H2>Passing headers</H2>
                    <div className=''>
                        You can use the headers options to pass credentials or
                        other headers
                    </div>
                    <div className=''>
                        <Code
                            language='typescript'
                            code={dedent`
                        import { createClient } from '@genql/${slug}'
                        const client = createClient({
                            headers: {
                                Authorization: \`Bearer ${'$'}{Token}\`
                            }
                        })
                        `}
                        />
                    </div>
                </div>
                {queriesCode && (
                    <div className='space-y-4'>
                        <H2>Example queries</H2>

                        <p>
                            This SDK is generated from the{' '}
                            <InlineCode>{host}</InlineCode> GraphQL API so the
                            client has a structure similar to the one used by
                            GraphQL queries.
                        </p>
                        <p>
                            To fetch fields you need to explicitly pass{' '}
                            <InlineCode>field: true</InlineCode>, you can also
                            pass <InlineCode>__args</InlineCode> to fetch all
                            scalar fields on a type.
                        </p>
                        <p>
                            Notice that to pass arguments you can use{' '}
                            <InlineCode>__args</InlineCode>
                        </p>

                        <div className=''>
                            <Code
                                language='typescript'
                                code={queriesCode || ''}
                            />
                        </div>
                    </div>
                )}
                <div className='space-y-4'>
                    <H2>More usage examples</H2>
                    <div className=''>
                        This SDK was created using{' '}
                        <Link underline href={websiteUrl}>
                            Genql
                        </Link>{' '}
                        so you can find more usage examples in{' '}
                        <Link underline href={websiteUrl}>
                            the main Genql website and docs
                        </Link>
                    </div>
                </div>
            </PageContainer>
        </main>
    )
}

export default Page

export async function getStaticPaths() {
    let items = await getClientsData()

    return {
        paths: items
            .map((x) => {
                return x.slug ? `/apis/${x.slug}` : null
            })
            .filter(Boolean) as string[],
        fallback: false,
        // fallback: 'blocking',
    }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    let items = await getClientsData()
    let slug = ctx.params?.slug as string
    console.log({ slug })
    let data = items.find((x) => x.slug === slug)
    return {
        props: {
            ...data,
            slug,
        },
    }
}
