/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './src/**/*.{js,ts,jsx,tsx}', // Include JavaScript and TypeScript files in the src directory
    './public/index.html',        // Include the HTML file in the public directory
  ],
  theme: {
    extend: {
      height:{
        calc : 'calc(100vh-8)'
      }
    },
  },
  plugins: [],
}

