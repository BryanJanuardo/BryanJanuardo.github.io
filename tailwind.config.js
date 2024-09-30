/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark' : '#212A3E',
        'lightdark' : '#394867',
        'light' : '#ffffff',
      }
    },
    fontFamily: {
      'lato' : ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

