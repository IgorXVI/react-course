import plugin from "tailwindcss/plugin"

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
        "react-black": "#21222A",
        "meme-darkpurple": "#672280",
        "meme-purple": "#A626D3"
      },
      backgroundImage: {
        'react-logo': "url('/src/assets/reactjs-icon 2.svg')",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        solid: `
          2px 2px 0 #000,
          -2px -2px 0 #000,
          2px -2px 0 #000,
          -2px 2px 0 #000,
          0 2px 0 #000,
          2px 0 0 #000,
          0 -2px 0 #000,
          -2px 0 0 #000,
          2px 2px 5px #000
        `
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

