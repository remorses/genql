import { Box, Image, Stack } from '@chakra-ui/core'
import firebase from 'firebase'
import {
    Banner,
    Button,
    Link,
    PageContainer,
    SectionTitle,
} from 'landing-blocks'
import { GetServerSidePropsContext } from 'next'
import nextCookies from 'next-cookies'
import Router from 'next/router'
import React from 'react'
import { MainForm } from '../components/MainForm'
import { FIREBASE_ID_TOKEN_COOKIE } from '../constants'

type Props = {
    packages: {
        name: string
        url?: string
    }[]
}

export async function getServerSideProps(
    ctx: GetServerSidePropsContext,
): Promise<{ props: Props }> {
    const uid = nextCookies(ctx)[FIREBASE_ID_TOKEN_COOKIE]
    console.log('uid', uid)
    if (!uid) {
        console.log('redirecting to /')
        ctx.res.writeHead(302, { Location: '/' }).end()
        return
    }
    const packages: any = await firebase
        .firestore()
        .collection('packages')
        .where('user_uid', '==', uid)
        .get()
    return {
        // TODO fetch user packages from firestore
        props: {
            packages: packages.docs,
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
            minH='100%'
            bg='gray.50'
        >
            <Box h='140px' />
            <PackagesTable packages={props.packages} />{' '}
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
            <SectionTitle subheading='Your packages' />
            <Stack px='20px' fontWeight='medium' opacity={0.6} direction='row'>
                <Box flex='1'>name</Box>
                <Box flex='1'>url</Box>
                <Box flex='1'>created at</Box>
            </Stack>
            {/* <Divider /> */}
            <Stack spacing='40px'>
                {packages.map((p) => (
                    <Stack
                        key={p.url}
                        direction='row'
                        justify='stretch'
                        bg='white'
                        shadow='sm'
                        p='20px'
                        borderRadius='lg'
                        borderWidth='1px'
                    >
                        <Box flex='1'>{p.name}</Box>
                        <Box flex='1'>
                            <Link isTruncated isExternal fontSize='inherit'>
                                {p.url}
                            </Link>
                        </Box>
                        <Box flex='1'>{p.url}</Box>
                    </Stack>
                ))}
            </Stack>
        </PageContainer>
    )
}

export default Page
