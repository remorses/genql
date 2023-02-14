import classNames from 'classnames'
import dedent from 'dedent'
import yaml from 'yaml'
import fs from 'fs'

import { Faded } from 'baby-i-am-faded'

import { Hero, PageContainer } from 'beskar/landing'
import { Code } from '@app/components/Code'
import NextLink from 'next/link'
import { Fragment } from 'react'
import { FaThumbsDown } from 'react-icons/fa'
import { FiArchive } from 'react-icons/fi'

import 'prismjs/components/prism-typescript'

import 'prismjs/themes/prism-coy.css'

import { BG } from '@app/constants'
import Head from 'next/head'
import {
    GetStaticPathsContext,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next'
import path from 'path'
import { getClientsData } from '@app/support/utils'

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
            <Head>
                <title>
                    TypeScript SDK client for {host} API - Powered by Genql
                </title>
            </Head>

            <Hero
                bullet={
                    <div className='flex items-center gap-2 -mx-1'>
                        {favicon && (
                            <img
                                className='rounded h-[17px]'
                                alt='icon'
                                src={favicon}
                            />
                        )}
                        <div>Powered by Genql</div>
                    </div>
                }
                heading={
                    <div className='tracking-wide'>
                        GraphQL client for the <br />
                        <span className='font-bold'>{host}</span> API
                    </div>
                }
                subheading={
                    <Fragment>
                        Full typescript support, works on browser and server
                    </Fragment>
                }
            />

            <div className='pt-12'></div>
            <PageContainer
                className='space-y-16 [--page-max-width:800px]'
                dontContain
            >
                <div className='space-y-4'>
                    <div className='whitespace-pre-wrap'>{description}</div>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold '>How to install</h2>
                    <div className=''>
                        Use a package manager to install the API client
                    </div>
                    <div className=''>
                        <Code
                            language='bash'
                            code={`npm install graphql @genql/${slug}`}
                        />
                    </div>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold '>Using the client</h2>
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
                    <h2 className='text-3xl font-bold '>Passing headers</h2>
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
                        <h2 className='text-3xl font-bold '>Example queries</h2>
                        <div className=''>
                            Use a package manager to install the API client
                        </div>
                        <div className=''>
                            <Code
                                language='typescript'
                                code={queriesCode || ''}
                            />
                        </div>
                    </div>
                )}
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
                return x.slug ? `/clients/${x.slug}` : null
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
