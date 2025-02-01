import { Footer, Link, NavBar } from 'beskar/landing'
import NextNprogress from 'nextjs-progressbar'

import { Bg, Dots } from '@app/components/bg'
import 'baby-i-am-faded/styles.css'
import classNames from 'classnames'
import { Box } from 'layout-kit-react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { BG, CHANGELOG_LINK, DOCS_LINK, GITHUB_LINK } from '../constants'
import '../global.css'
import Script from 'next/script'

// 'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

export default function App(props) {
    const { Component, pageProps } = props
    const { pathname } = useRouter()

    return (
        <>
            <NextNprogress
                color='#29D'
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
                options={{ showSpinner: false }}
                showOnShallow={true}
            />
            <Script
                // strategy='lazyOnload'
                async
                src='https://cdn.splitbee.io/sb.js'
            ></Script>

            <div
                className='relative overflow-x-hidden max-w-full text-gray-100 md:px-[30px] flex flex-col space-y-[40px] min-h-[100vh]'
                style={{ background: BG }}
            >
                {/* <Bg /> */}
                <Dots
                    hidden
                    className='text-sky-100 opacity-60 mx-auto w-[140%] hidden md:block absolute self-center'
                />
                <MyNavbar />
                <Component {...pageProps} />
                <div className='grow'></div>
                <MyFooter dark />
            </div>
        </>
    )
}

export function MyLink({ isExternal = false, href = '#', ...rest }) {
    isExternal = isExternal || href.startsWith('http')
    if (isExternal) {
        return (
            <Link
                href={href}
                // color='black'
                // color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        )
    }
    return (
        <NextLink
            prefetch={isExternal}
            shallow={isExternal}
            href={href}
            passHref
            {...rest}
        ></NextLink>
    )
}

export function MyFooter({ ...rest }) {
    return (
        <Footer
            businessName='Genql'
            className='dark'
            columns={{
                Resources: [
                    <MyLink href={GITHUB_LINK}>Github</MyLink>,
                    <MyLink href={DOCS_LINK}>Docs</MyLink>,
                    <MyLink href={'https://antidetection.com'}>Unchatgpt</MyLink>,
                ],

                'Who made this?': [
                    <MyLink href='https://twitter.com/__morse'>
                        My Twitter
                    </MyLink>,
                    <MyLink href='https://github.com/remorses/'>
                        My Github
                    </MyLink>,
                ],
                'Proudly sponsored by Notaku': [
                    <PoweredByNotaku className='' />,
                    <Box as={PoweredByVercel} alignSelf='center' />,
                ],
            }}
            {...rest}
        />
    )
}
export function MyNavbar({ ...rest }) {
    const { pathname } = useRouter()
    const navs = [
        <MyLink href='/converter'>Converter</MyLink>,
        <MyLink isExternal href={GITHUB_LINK}>
            Github
        </MyLink>,
        <MyLink isExternal href={DOCS_LINK}>
            Docs
        </MyLink>,
        <MyLink isExternal href={CHANGELOG_LINK}>
            Changelog
        </MyLink>,
    ].filter(Boolean)
    if (pathname !== '/') {
        navs.unshift(<MyLink href='/'>Home</MyLink>)
    }

    return (
        <NavBar
            logo={
                <Logo />
                // <Image
                //     width='120px'
                //     stroke='#000'
                //     src='/logo_on_black.svg'
                // />
            }
            navs={navs}
            {...rest}
        />
    )
}

const Logo = () => (
    <NextLink href='/'>
        <Box cursor='pointer' fontWeight='medium' fontSize='24px'>
            Genql
        </Box>
    </NextLink>
)

export const PoweredByVercel = ({ ...rest }) => {
    return (
        <a href='https://vercel.com?utm_source=genql' target='_blank' {...rest}>
            <svg
                width='212'
                height='44'
                viewBox='0 0 212 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <rect width='212' height='44' rx='8' fill='black' />
                <path
                    d='M60.4375 15.2266V26.5H61.8438V22.4766H64.6797C66.7969 22.4766 68.3047 20.9844 68.3047 18.875C68.3047 16.7266 66.8281 15.2266 64.6953 15.2266H60.4375ZM61.8438 16.4766H64.3281C65.9609 16.4766 66.8594 17.3281 66.8594 18.875C66.8594 20.3672 65.9297 21.2266 64.3281 21.2266H61.8438V16.4766ZM73.3441 26.6484C75.7425 26.6484 77.2269 24.9922 77.2269 22.2891C77.2269 19.5781 75.7425 17.9297 73.3441 17.9297C70.9456 17.9297 69.4613 19.5781 69.4613 22.2891C69.4613 24.9922 70.9456 26.6484 73.3441 26.6484ZM73.3441 25.4375C71.7503 25.4375 70.8519 24.2812 70.8519 22.2891C70.8519 20.2891 71.7503 19.1406 73.3441 19.1406C74.9378 19.1406 75.8363 20.2891 75.8363 22.2891C75.8363 24.2812 74.9378 25.4375 73.3441 25.4375ZM89.2975 18.0781H87.9459L86.2897 24.8125H86.1647L84.2819 18.0781H82.9928L81.11 24.8125H80.985L79.3288 18.0781H77.9694L80.3288 26.5H81.6881L83.5631 19.9844H83.6881L85.5709 26.5H86.9381L89.2975 18.0781ZM93.8213 19.1172C95.1572 19.1172 96.0478 20.1016 96.0791 21.5938H91.4384C91.54 20.1016 92.4775 19.1172 93.8213 19.1172ZM96.04 24.3203C95.6884 25.0625 94.9541 25.4609 93.8681 25.4609C92.4384 25.4609 91.5088 24.4062 91.4384 22.7422V22.6797H97.4931V22.1641C97.4931 19.5469 96.1103 17.9297 93.8369 17.9297C91.5244 17.9297 90.04 19.6484 90.04 22.2969C90.04 24.9609 91.5009 26.6484 93.8369 26.6484C95.6806 26.6484 96.9931 25.7578 97.3838 24.3203H96.04ZM99.2825 26.5H100.626V21.2812C100.626 20.0938 101.556 19.2344 102.837 19.2344C103.103 19.2344 103.587 19.2812 103.697 19.3125V17.9688C103.525 17.9453 103.243 17.9297 103.025 17.9297C101.908 17.9297 100.939 18.5078 100.689 19.3281H100.564V18.0781H99.2825V26.5ZM108.181 19.1172C109.517 19.1172 110.408 20.1016 110.439 21.5938H105.798C105.9 20.1016 106.838 19.1172 108.181 19.1172ZM110.4 24.3203C110.048 25.0625 109.314 25.4609 108.228 25.4609C106.798 25.4609 105.869 24.4062 105.798 22.7422V22.6797H111.853V22.1641C111.853 19.5469 110.47 17.9297 108.197 17.9297C105.884 17.9297 104.4 19.6484 104.4 22.2969C104.4 24.9609 105.861 26.6484 108.197 26.6484C110.041 26.6484 111.353 25.7578 111.744 24.3203H110.4ZM116.76 26.6484C117.924 26.6484 118.924 26.0938 119.455 25.1562H119.58V26.5H120.861V14.7344H119.518V19.4062H119.4C118.924 18.4844 117.932 17.9297 116.76 17.9297C114.619 17.9297 113.221 19.6484 113.221 22.2891C113.221 24.9375 114.603 26.6484 116.76 26.6484ZM117.072 19.1406C118.596 19.1406 119.549 20.3594 119.549 22.2891C119.549 24.2344 118.603 25.4375 117.072 25.4375C115.533 25.4375 114.611 24.2578 114.611 22.2891C114.611 20.3281 115.541 19.1406 117.072 19.1406ZM131.534 26.6484C133.667 26.6484 135.065 24.9219 135.065 22.2891C135.065 19.6406 133.674 17.9297 131.534 17.9297C130.378 17.9297 129.354 18.5 128.893 19.4062H128.768V14.7344H127.424V26.5H128.706V25.1562H128.831C129.362 26.0938 130.362 26.6484 131.534 26.6484ZM131.221 19.1406C132.76 19.1406 133.674 20.3203 133.674 22.2891C133.674 24.2578 132.76 25.4375 131.221 25.4375C129.69 25.4375 128.737 24.2344 128.737 22.2891C128.737 20.3438 129.69 19.1406 131.221 19.1406ZM137.261 29.5469C138.753 29.5469 139.425 28.9688 140.143 27.0156L143.433 18.0781H142.003L139.698 25.0078H139.573L137.261 18.0781H135.808L138.925 26.5078L138.768 27.0078C138.417 28.0234 137.995 28.3906 137.222 28.3906C137.034 28.3906 136.823 28.3828 136.659 28.3516V29.5C136.847 29.5312 137.081 29.5469 137.261 29.5469ZM154.652 26.5L158.55 15.2266H156.402L153.589 24.1484H153.457L150.621 15.2266H148.394L152.332 26.5H154.652ZM162.668 19.3203C163.832 19.3203 164.598 20.1328 164.637 21.3984H160.613C160.699 20.1484 161.512 19.3203 162.668 19.3203ZM164.652 24.1484C164.371 24.7812 163.707 25.1328 162.746 25.1328C161.473 25.1328 160.652 24.2422 160.605 22.8203V22.7188H166.574V22.0938C166.574 19.3984 165.113 17.7812 162.676 17.7812C160.199 17.7812 158.66 19.5078 158.66 22.2578C158.66 25.0078 160.176 26.6719 162.691 26.6719C164.707 26.6719 166.137 25.7031 166.488 24.1484H164.652ZM168.199 26.5H170.137V21.5625C170.137 20.3672 171.012 19.5859 172.27 19.5859C172.598 19.5859 173.113 19.6406 173.262 19.6953V17.8984C173.082 17.8438 172.738 17.8125 172.457 17.8125C171.356 17.8125 170.434 18.4375 170.199 19.2812H170.067V17.9531H168.199V26.5ZM181.7 20.8281C181.497 19.0312 180.168 17.7812 177.973 17.7812C175.403 17.7812 173.895 19.4297 173.895 22.2031C173.895 25.0156 175.411 26.6719 177.981 26.6719C180.145 26.6719 181.489 25.4688 181.7 23.6797H179.856C179.653 24.5703 178.981 25.0469 177.973 25.0469C176.653 25.0469 175.856 24 175.856 22.2031C175.856 20.4297 176.645 19.4062 177.973 19.4062C179.036 19.4062 179.676 20 179.856 20.8281H181.7ZM186.817 19.3203C187.981 19.3203 188.747 20.1328 188.786 21.3984H184.762C184.848 20.1484 185.661 19.3203 186.817 19.3203ZM188.802 24.1484C188.52 24.7812 187.856 25.1328 186.895 25.1328C185.622 25.1328 184.802 24.2422 184.755 22.8203V22.7188H190.723V22.0938C190.723 19.3984 189.262 17.7812 186.825 17.7812C184.348 17.7812 182.809 19.5078 182.809 22.2578C182.809 25.0078 184.325 26.6719 186.841 26.6719C188.856 26.6719 190.286 25.7031 190.637 24.1484H188.802ZM192.427 26.5H194.364V14.6484H192.427V26.5Z'
                    fill='white'
                />
                <path d='M23.3248 13L32.6497 29H14L23.3248 13Z' fill='white' />
                <line
                    x1='43.5'
                    y1='2.18557e-08'
                    x2='43.5'
                    y2='44'
                    stroke='#5E5E5E'
                />
            </svg>
        </a>
    )
}

function PoweredByNotaku({ className = '', ...rest }) {
    const href = 'https://notaku.so'
    return (
        <a
            href={href}
            target='_blank'
            className={classNames(
                'transition-transform text-white rounded-md',
                'right-5 px-4 mx-auto bg-black hover:scale-105',
                'active:scale-90 text-[15px] py-[8px]',
                className,
            )}
            {...rest}
        >
            <IconLogo className='mr-[6px] h-[1.3em] w-[1.3em] inline' />
            <span className=''>Powered by </span>
            <span className='font-bold'>Notaku</span>
        </a>
    )
}

function IconLogo({ ...rest }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={170}
            height={170}
            viewBox='0 0 120 120'
            {...rest}
        >
            <path
                fill='#000'
                fillRule='nonzero'
                d='M21.0151865,89.4736842 C17.353443,89.4736842 14.9122807,86.7894737 14.9122807,82.7631579 C14.9122807,78.7368421 17.9637336,76.0526316 21.0151865,76.0526316 L81.9164645,76.0526316 C81.548383,79.4582237 81.5808047,86.1981086 82.0175439,89.4736842 L21.0151865,89.4736842 Z'
                opacity='.727'
            />
            <path
                fill='#FFF'
                fillRule='nonzero'
                d='M18.5338346,74.5614035 L81.8577694,74.5614035 C84.416758,74.5614035 86.4912281,72.5584669 86.4912281,70.0877193 L86.4912281,8.94736842 C86.4912281,5.65303833 83.7252679,2.98245614 80.3132832,2.98245614 L18.5338346,2.98245614 C8.29788039,2.98245614 0,10.9942027 0,20.877193 L0,80.5263158 C0,90.409306 8.29788039,98.4210526 18.5338346,98.4210526 L81.8577694,98.4210526 C84.416758,98.4210526 86.4912281,96.418116 86.4912281,93.9473684 L86.4912281,90.9649123 C86.4912281,88.4941647 84.416758,86.4912281 81.8577694,86.4912281 L18.5338346,86.4912281 C14.8270677,86.4912281 12.3558897,84.1052632 12.3558897,80.5263158 C12.3558897,76.9473684 15.4448622,74.5614035 18.5338346,74.5614035 Z'
            />
            <polygon
                fill='#000'
                points='16.404 0 37.281 0 37.281 28.333 26.842 19.749 16.404 28.333'
            />
        </svg>
    )
}
