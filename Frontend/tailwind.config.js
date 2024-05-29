/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2d2d2d',
        'darker-gray': '#1a1a1a',
        'yellow-400': '#fbbf24',
      },
      backgroundImage: {
        'gradient-to-darker-gray': 'linear-gradient(to bottom, #2d2d2d, #1a1a1a)',
        'gradient-to-lighter-gray': 'linear-gradient(to top, #1a1a1a, #2d2d2d)',
      },
    },
  },
  plugins: [],
}
