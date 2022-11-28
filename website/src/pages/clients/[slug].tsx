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

const Page = ({
    slug,
    name,
    content,
    website,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
    <main
        style={{ background: BG }}
        className='dark py-14 w-full items-stretch space-y-[40px]'
    >
        <Head>
            <title>TypeScript SDK client for {name} API</title>
        </Head>

        <Hero
            bullet='Powered by Genql'
            heading={
                <div className='tracking-wide'>
                    GraphQL client for the <br />
                    <span className='font-bold'>{name}</span> API
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
                <h2 className='text-3xl font-bold '>Authorization</h2>
                <div className=''>
                    You can pass your credentials to the client using an header
                </div>
                <div className=''>
                    <Code
                        language='typescript'
                        code={dedent`
                        import { createClient } from '@genql/${slug}'
                        const client = createClient({
                            headers: {
                            }
                        })
                        `}
                    />
                </div>
            </div>
            <div className='space-y-4'>
                <h2 className='text-3xl font-bold '>Example queries</h2>
                <div className=''>
                    Use a package manager to install the API client
                </div>
                <div className=''>
                    <Code
                        language='typescript'
                        code={dedent`
                        import { createClient } from '@genql/${slug}'

                        `}
                    />
                </div>
            </div>
        </PageContainer>
    </main>
)

export default Page

export function getStaticPaths() {
    const clientsFolder = path.resolve(process.cwd(), 'clients')
    const allFiles = fs.readdirSync(clientsFolder)
    const paths = allFiles.map((x) => {
        return `/clients/${x.replace('.yml', '')}`
    })
    return {
        paths,
        fallback: false,
        // fallback: 'blocking',
    }
}

export type YamlFileData = {
    name: string
    content: string
    website: string
    // tags: string[]
}

export function getStaticProps(ctx: GetStaticPropsContext) {
    const slug = ctx.params.slug
    const dataFile = fs.readFileSync(
        path.resolve(process.cwd(), 'clients', `${slug}.yml`),
        'utf8',
    )
    const data: YamlFileData = yaml.parse(dataFile)

    return {
        props: {
            ...data,
            slug,
        },
    }
}
