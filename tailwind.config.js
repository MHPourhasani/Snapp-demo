module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        fontFamily: {
            body: ['IRANSans', 'iranyekan'],
            display: ['IRANSans', 'iranyekan'],
        },

        screens: {
            xs: '475px',
            // => @media (min-width: 475px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '825px',
            // => @media (min-width: 840px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
        },

        extend: {
            colors: {
                green: {
                    snapp: '#22aa58',
                    snappBtn: '#00d170',
                },
            },
            borderWidth: {
                1: '1px',
            },
            width: {
                54: '13.5rem',
                80: '20rem',
                84: '21rem',
                88: '22rem',
                92: '23rem',
            },
            lineHeight: {
                12: '3rem',
                16: '4rem',
            },
            letterSpacing: {
                tightest: '-.01em',
            },
        },
    },
    plugins: [],
};
