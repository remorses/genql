import { Box, Image, Stack } from '@chakra-ui/core'
import { Faded } from 'baby-i-am-faded'
import {
    Banner,
    Button,
    CodeSnippet,
    Divider,
    Feature,
    Footer,
    Heading,
    Hero,
    LandingProvider,
    NavBar,
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

const Page = () => (
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
        <Box flex='1' w='100%' h='100%' minH='100%' bg='white'>
            <Box h='140px' />
            <SectionTitle subheading='Your packages' />
        </Box>
    </Stack>
)

export default Page
