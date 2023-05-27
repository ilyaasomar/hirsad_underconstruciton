/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: "#0575e6",
        secondary: "#4a00e0",
        third: "#E7F4F9"
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
