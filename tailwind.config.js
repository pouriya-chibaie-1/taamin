/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
     'mobile':{'max':'639px'}
      },
      colors: {
        "red-real": "#ff0000",
      },
    },
  },
  plugins: [],
}