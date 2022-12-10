/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'li-blue': 'rgb(10,102,194)',
        'darkmode-grey': 'rgb(29,34,38)',
      }
    },
  },
  plugins: [require('flowbite/plugin')]
}
