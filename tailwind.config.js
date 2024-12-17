/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

