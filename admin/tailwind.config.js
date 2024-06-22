/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '100vh' : '100vh',
      },
      gridTemplateColumns :{
        'custom-lay' :'1fr 3fr 1fr 1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}

