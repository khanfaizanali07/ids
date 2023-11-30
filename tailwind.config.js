/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wiggle: {
          '0%': {left:'700px',top:'1700px'},
          '25%': {left:'760px',top:'1700px'},
          '50%': {left:'820px',top:'1700px'},
          '75%': {left:'760px',top:'1700px'},
          '100%': {left:'700px',top:'1700px'},

        },

      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

