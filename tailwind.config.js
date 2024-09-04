/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        "react-bluesky": "#61DAFB",
        "react-blue": "#00D8FF",
        "react-lightgray": "#33373E",
        "react-gray": "#282D35",
        "react-black": "#21222A"
      },
      backgroundImage: {
        'react-logo': "url('/src/assets/reactjs-icon 2.svg')",
      }
    },
  },
  plugins: [],
}

