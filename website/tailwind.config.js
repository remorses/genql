const colors = require('beskar/colors')
const path = require('path')

const glob = path.join(
    require.resolve('beskar/package.json'),
    '../src',
    '/**/*.{js,ts,jsx,tsx}',
)

console.log('glob', glob)

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,ts,jsx,tsx}', //

        glob,
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwindcss-animate")],
}
