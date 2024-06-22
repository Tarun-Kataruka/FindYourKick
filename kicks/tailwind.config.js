/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      },
      height :{
        '60vh':'60vh',
        '40vh' :'40vh',
        '80vh' : '80vh',
        '600px' : '600px',
        '700px' : '700px',
        '90vh' : '90vh',
        
      },
      width :{
        '730px':'730px',
        '500px' : '500px',
        '580px' :'580px',
        '586px' :'586px',
        '700px' : '700px',
      },
      gridTemplateColumns :{
        'custom-layout' : '0.5fr 2fr 1fr 1fr 1fr 1fr',
        'custom-lay' :'1fr 3fr 1fr 1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}

