import { Box, Image, Stack, Divider } from '@chakra-ui/core'
import { Faded } from 'baby-i-am-faded'
import {
    Banner,
    Button,
    CodeSnippet,
    Feature,
    Footer,
    Heading,
    Hero,
    LandingProvider,
    NavBar,
    Link,
    PageContainer,
    PatternBackground,
    Section,
    SectionTitle,
    TestimonialsLogos,
} from 'landing-blocks'
import React, { Fragment } from 'react'
import {
    FaAngular as AngularIcon,
    FaArrowRight as ArrowRight,
    FaNode as NodeIcon,
    FaReact as ReactIcon,
} from 'react-icons/fa'
import { Frame, Keyframes } from 'react-keyframes'
import { MainForm } from '../components/MainForm'

type Props = {
    packages: {
        name: string
        url?: string
    }[]
}

export async function getServerSideProps(): Promise<{ props: Props }> {
    return {
        props: {
            packages: [
                { name: 'xxx', url: 'https://countries.trevorblades.com' },
                { name: 'yyy' },
                { name: 'shit' },
            ],
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
                        direction='row'
                        justify='stretch'
                        bg='white'
                        shadow='sm'
                        p='20px'
                        borderRadius='lg'
                        borderWidth='1px'
                    >
                        <Box flex='1'>{p.name}</Box>
                        <Link
                            isTruncated
                            isExternal
                            fontSize='inherit'
                            flex='1'
                        >
                            {p.url}
                        </Link>
                        <Box flex='1'>{p.url}</Box>
                    </Stack>
                ))}
            </Stack>
        </PageContainer>
    )
}

export default Page
