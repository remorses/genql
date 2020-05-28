import { Box, Image, Stack } from '@chakra-ui/core'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import admin from 'firebase-admin'
import {
    Banner,
    Button,
    Link,
    PageContainer,
    SectionTitle,
} from 'landing-blocks'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { MainForm } from '../components/MainForm'
import { getFirebaseDecodedToken } from '../support/server'
import { Package } from './api/generate'
dayjs.extend(relativeTime)

type Props = {
    packages: ({
        url?: string
        createdAt?: number
    } & Package)[]
}

export async function getServerSideProps(
    ctx: GetServerSidePropsContext,
): Promise<{ props: Props }> {
    const { uid } = await getFirebaseDecodedToken(ctx.req)
    console.log('uid', uid)
    if (!uid) {
        console.log('redirecting to /')
        ctx.res.writeHead(302, { Location: '/' }).end()
        return
    }
    const packages = await admin
        .firestore()
        .collection('packages')
        .where('user_uid', '==', uid)
        .get()

    return {
        props: {
            packages: packages.docs.map((x) => {
                const data = x.data()
                return {
                    ...data,
                    url: `https://www.npmjs.com/package/${data?.name}`,
                    createdAt: (x?.createTime?.toMillis() || 0) / 1000,
                }
            }) as any,
        },
    }
}

const Page = (props: Props) => (
    <Stack flex='1' minH='100%' h='100%' spacing='40px'>
        <Box>
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
        </Box>
        <Stack
            spacing='40px'
            flex='1'
            w='100%'
            h='100%'
            pb='60px'
            minH='100%'
            bg='gray.50'
        >
            <Box h='140px' />
            <PackagesTable packages={props.packages} />
        </Stack>
        <Banner
            dark
            heading='Add Genql to Your App or Start From Scratch'
            bullet='READY TO TRY?'
            bg='transparent'
            image={<Image ml='-60px' width='200px' src='/bannerImage.svg' />}
            cta={<Button>Generate your graphql api sdk</Button>}
        />
    </Stack>
)

const PackagesTable = ({ packages, ...rest }: Props) => {
    if (packages.length === 0) {
        return <SectionTitle subheading='You have no packages yet' />
    }
    return (
        <PageContainer spacing='20px' {...rest}>
            {/* <SectionTitle subheading='Your packages' /> */}
            <Stack
                px='20px'
                fontWeight='medium'
                opacity={0.4}
                flexDir={['column', null, 'row']}
                display={['none', null, 'flex']}
            >
                <Box flex='1'>name</Box>
                <Box flex='1'>graphql endpoint</Box>
                <Box flex='1'>created at</Box>
            </Stack>
            {/* <Divider /> */}
            <Stack spacing='40px'>
                {packages.map((p) => (
                    <Stack
                        key={p.url}
                        flexDir={['column', null, 'row']}
                        justify='stretch'
                        fontWeight='normal'
                        bg='white'
                        shadow='sm'
                        p='20px'
                        borderRadius='lg'
                        borderWidth='1px'
                    >
                        <Box flex='1'>
                            <Link href={p.url} isExternal fontSize='inherit'>
                                {p.name}
                            </Link>
                        </Box>
                        <Box flex='1'>
                            <Box isTruncated maxWidth='300px'>
                                <Link
                                    color='gray.500'
                                    href={p.graphql_endpoint}
                                    isExternal
                                    fontSize='inherit'
                                >
                                    {p.graphql_endpoint}
                                </Link>
                            </Box>
                        </Box>
                        <Box opacity={0.6} flex='1'>
                            {dayjs(1000 * p.createdAt).fromNow()}
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </PageContainer>
    )
}

export default Page
