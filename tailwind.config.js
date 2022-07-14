/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
