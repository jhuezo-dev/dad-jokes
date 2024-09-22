/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'almost-light': '#F6F6F6',
        'text-dark': '#333333'
      }
    },
  },
  plugins: [],
}

