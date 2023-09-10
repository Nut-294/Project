/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-delay': 'spin 6s linear infinite -3s',
      },
      margin:{
        'mse' : '36rem',
        '545px': '545px',
        '800px':'50rem',
        '640px': '40rem',
        '900px': '60rem',
        '992px': '62rem',
        '1000px': '62.5rem',
        '1008px': '63rem',
        '1032px': '64.5rem',
        '872px': '54.5rem',
        '848px': '53rem',
      },
      height: {
        '500px': '31.25rem',
        '800px': '50rem',
      },
      width: {
        '500px': '31.25rem',
        '800px': '50rem',
        '400px': '25rem',
        '352px': '22rem',
        '128': '22rem',
        
      },
      padding:{
        '352px': '22rem',
      },
    },
  },
  plugins: [],
}
