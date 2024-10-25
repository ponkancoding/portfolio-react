import { fileURLToPath } from 'url';
const componentsDir = fileURLToPath(new URL('./src', import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    `./${componentsDir}/**/*.{js,ts,jsx,tsx,css,scss}`
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          200: '#E6E6E6'
        },
        fontSize: {
          '6xl': ['84px', '1.25em'],
          '5xl': ['60px', '1.5em'],
          '4xl': ['36px', '1.5em'],
          '3xl': ['28px', '1.5em'],
          '2xl': ['24px', '1.75em'],
          'xl': ['22px', '1.5em'],
          'lg': ['20px', '1.5em'],
          'base': ['18px', '1.75em'],
          'sm': ['16px', '1.5em'],
          'xs': ['14px', '1.5em'],
          'xxs': ['12px', '1.5em'],
        },
      }
    },
  },
  plugins: [],
}