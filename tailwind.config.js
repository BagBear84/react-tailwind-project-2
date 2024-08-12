/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shapeMobile': "url('./src/images/ShapeMobile.png')",
        
      }
    },
    fontFamily: {
      'roboto' : ['"Roboto"' , 'sans-serif']
    },
  },
  plugins: [],
}

