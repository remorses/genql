import classNames from 'classnames'
import yaml from 'yaml'
import fs from 'fs'

import { Faded } from 'baby-i-am-faded'

import { Hero, PageContainer } from 'beskar/landing'
import NextLink from 'next/link'
import { Fragment } from 'react'
import { FaThumbsDown } from 'react-icons/fa'
import { FiArchive } from 'react-icons/fi'

import { BG } from '@app/constants'
import Head from 'next/head'
import path from 'path'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getClientsData } from '@app/support/utils'
import type { CsvDataType, GeneratedEntry } from 'scraper/src/utils/utils'

const Page = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <main
        style={{ background: BG }}
        className='dark py-14 w-full items-stretch space-y-[40px]'
    >
        <Head>
            <title>Genql - SDK clients for any GraphQL API</title>
        </Head>

        <Hero
            bullet='Genql'
            heading={<div className=''>A client for every GraphQL API</div>}
            subheading={
                <Fragment>
                    Genql generates a typescript sdk
                    <br /> for any GraphQL api
                </Fragment>
            }
        />

        <PageContainer className='pt-12' dontContain>
            {/* // TODO add search for clients? */}
            {/* TODO add clients pagination */}

            <ExploreClients items={items} />
        </PageContainer>
    </main>
)

export default Page

export function ExploreClients({
    items,
    loadMoreHref = '',
}: {
    items: (CsvDataType & GeneratedEntry)[]
    loadMoreHref?: string
}) {
    let cols = 1
    return (
        <div className='flex flex-col items-center gap-8 w-full'>
            <Faded
                animationName='fadeCardsScale'
                cascade
                duration={300}
                // cascadeIncrement={20}
                waitMount
                // timingFunction='ease-in'
                className='grid grid-cols-1 md:grid-cols-3 gap-4 '
            >
                {items
                    ?.map((x) => {
                        const host = new URL(x.website).host
                        return {
                            heading: `${host}`,
                            href: `/clients/${x.slug}`,
                            icon: x.favicon && (
                                <img
                                    className='rounded h-[18px]'
                                    alt='icon'
                                    src={x.favicon}
                                />
                            ),
                            description:
                                truncate(x.description) ||
                                `GraphQL client for ${host}`,
                        }
                    })
                    ?.map((x) => {
                        return (
                            <NextLink
                                href={x.href || '/'}
                                passHref
                                legacyBehavior
                            >
                                <a
                                    style={
                                        {
                                            // gridColumn: cols
                                            //     ? `span ${cols} / span ${cols}`
                                            //     : undefined,
                                        }
                                    }
                                    className={classNames(
                                        'dark:bg-gray-800/60 dark:border-gray-600 border-gray-400 hover:scale-[97%] transition-transform shadow backdrop-blur-lg flex flex-col p-6 min-h-[140px] rounded-md',
                                        'border-2 origin-center',
                                    )}
                                >
                                    {/* <div className='font-bold flex flex-col items-center w-full grow [&_img]:max-h-[200px] max-h-[200px]'>
                            {x.image}
                        </div> */}

                                    <div className='flex gap-3'>
                                        <div className='w-[24px] shrink-0 mt-1'>
                                            {x.icon || (
                                                <FiArchive className='' />
                                            )}
                                        </div>
                                        <div className='space-y-2'>
                                            {x.heading && (
                                                <div className='font-bold'>
                                                    {x.heading}
                                                </div>
                                            )}
                                            <div className='text-sm min-h-[2.2em] opacity-70'>
                                                {x.description}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </NextLink>
                        )
                    })}
            </Faded>
            {!!items?.length && loadMoreHref && (
                <NextLink legacyBehavior href={loadMoreHref}>
                    <a className='flex py-1 px-3 font-bold transition-colors rounded bg-gray-500/10 hover:bg-gray-100/10 appearance-none'>
                        Show More
                    </a>
                </NextLink>
            )}
        </div>
    )
}

export async function getStaticProps() {
    const items = await getClientsData()
    return {
        props: {
            items,
        },
    }
}

function truncate(str: string, max = 90) {
    if (str.length <= max) return str
    return str.slice(0, max) + '...'
}
