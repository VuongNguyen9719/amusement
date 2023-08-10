/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2EA2C7',
                'primary-hover': '#21B0DD',
                danger: '#D84842',
                'danger-hover': '#F26A64',
                disabled: '#CAD8E5',
                'icon-hover': '#207B8B',
                line: '#CAD8E5',
                'line-focus': '#CAEDF8',
                main: '#333333',
                'white-hover': '#F8F8F8',
                normal: '#CDD5DF',
                warning: '#F0AD4E',
                container: '#DFE1E4',

                'default-item-sidebar': '#697586',
                'hover-item-sidebar': '#6366F1',
                'active-item-sidebar': '#4F46E5',
                'disable-item-sidebar': '#CDD5DF',
            },
            fontFamily: {
                custom: ['Inter', 'sans-serif']
            },
        },
    },
    plugins: [],
}