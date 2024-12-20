/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                'slide': 'slide 25s linear infinite',
            },
            keyframes: {
                'slide': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            fontFamily: {
                'taviraj': ['Taviraj', 'sans-serif'],
                'chivo': ['Chivo', 'sans-serif'],
                'new-york-regular': ['NewYorkRegular', 'serif'],
            },
            colors: {
                'primary': '#708349',
                'custom-cream': '#F6F6EE',
                'custom-btn-green': '#8E8E6A',
                'footer-background': '#252525',
                olive: {
                    50: "#f5f5eb",
                    100: "#e7e8d1",
                    200: "#c4c8a2",
                    300: "#a1a973",
                    400: "#7e8943",
                    500: "#5b6a14",
                    600: "#4d5a10",
                    700: "#3e470d",
                    800: "#303609",
                    900: "#202405",
                },
            },
            maxHeight: {
                '650': '650px',
                '400': '400px',
            },
            borderWidth: {
                '10': '50px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
