/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'container': '[1920px]',
      },
      fontFamily: {
        'geo': 'Georama',
      },
    },
  },
  plugins: [],
}