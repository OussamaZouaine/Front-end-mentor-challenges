module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito Sans', 'sans-serif'],
            },
            colors: {
                'dark-blue': 'hsl(209, 23%, 22%)',
                'very-dark-blue': 'hsl(207, 26%, 17%)',
                'darker-blue': 'hsl(200, 15%, 8%)',
                'dark-gray': 'hsl(0, 0%, 52%)',
                'very-light-gray': 'hsl(0, 0%, 98%)',
            },
        },
    },
    plugins: [],
};
