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
import { YamlFileData } from './[slug]'

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
            <FeaturesBlocks
                items={items.map((x) => {
                    return {
                        heading: `${x.name}`,
                        href: `/clients/${x.slug}`,
                        icon: x.favicon && (
                            <img
                                className='rounded h-[18px]'
                                alt='icon'
                                src={x.favicon}
                            />
                        ),
                        description: `GraphQL client for ${x.website} API`,
                    }
                })}
            />
        </PageContainer>
    </main>
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
                    <NextLink href={x.href || '/'} passHref legacyBehavior>
                        <a
                            style={{
                                gridColumn: x.cols
                                    ? `span ${x.cols} / span ${x.cols}`
                                    : undefined,
                            }}
                            className={classNames(
                                'dark:bg-gray-900/60 dark:border-gray-600 border-gray-400 hover:scale-95 transition-transform shadow backdrop-blur-lg flex flex-col p-6 min-h-[140px] rounded-md',
                                'border-2 origin-center',
                            )}
                        >
                            {/* <div className='font-bold flex flex-col items-center w-full grow [&_img]:max-h-[200px] max-h-[200px]'>
                            {x.image}
                        </div> */}

                            <div className='flex gap-3'>
                                <div className='w-[24px] shrink-0 mt-1'>
                                    {x.icon || <FiArchive className='' />}
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
    )
}

export function getStaticProps() {
    const clientsFolder = path.resolve(process.cwd(), 'clients')
    const allFiles = fs.readdirSync(clientsFolder)

    const items = allFiles.map((fileName) => {
        const slug = fileName.replace('.yml', '')
        const abs = path.resolve(clientsFolder, fileName)
        const str = fs.readFileSync(abs, 'utf8')
        const data: YamlFileData = yaml.parse(str)
        return {
            ...data,
            slug,
        }
    })
    return {
        props: {
            items,
        },
    }
}
