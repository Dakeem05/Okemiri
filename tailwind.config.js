/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["poppins", "sans-serif"],
      'plus-jakarta-sans' :[ 'plus-jakarta-sans', 'sans-serif'],
      'manjari' :[ 'manjari', 'sans-serif'],
      'lexend' :[ 'lexend', 'sans-serif'],
      'dm-sans' :[ 'dm-sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}