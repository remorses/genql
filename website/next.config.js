const withTM = require('next-transpile-modules')(['@genql/cli', 'beskar'])

/** @type {import('next').NextConfig} */
const config = {
    experimental: {
        externalDir: true,
    },
    rewrites() {
        const rewriteDocsTo =
            'https://aeea2a8f-f718-4d46.docs-base-path.notaku.site'

        return [
            {
                source: '/docs',
                destination: `${rewriteDocsTo}/docs`,
            },
            {
                source: '/docs/:path*',
                destination: `${rewriteDocsTo}/docs/:path*`,
            },
            // {
            //     source: '/blog',
            //     destination: `${rewriteBlogTo}/blog`,
            // },
            // {
            //     source: '/blog/:path*',
            //     destination: `${rewriteBlogTo}/blog/:path*`,
            // },
        ]
    },
}

module.exports = withTM(config)
