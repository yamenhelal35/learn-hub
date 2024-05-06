/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        '120': '38rem',
        '100': '32rem'
      },
      width:{
        '96': '25rem',
        '97': '27rem',
        '120': '50rem',
        '130':'65rem',
        '100':'32rem'
        }
    },
  },
  plugins: [],
}

