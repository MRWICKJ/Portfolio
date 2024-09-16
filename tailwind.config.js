/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white-transparent': 'hsla(0, 0%, 7%, 0.68)', // White with 10% opacity
      },
    },
  },
  plugins: [],
}