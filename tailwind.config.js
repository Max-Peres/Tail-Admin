/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'blue-light': '#cce4f6',
                'blue-medium': '#4a90e2',
                'blue-dark': '#003366',
            },
        },
    },
    variants: {},
    plugins: [],
}

