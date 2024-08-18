/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary: '#6B3F97', // Purple
        primary: '#8D6B4C', // Brown
        secondary: '#8D6B4C', // Brown
        accent: '#FFFFFF', // White
      },
    },
  },
  plugins: [],
};
