/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          blue: "#1F2340",
          midnight: "#0D101E",
          indigo: "#131721",
          charcoal: "#252A3F",
          tan: "#B49167",

        },
        light: {
          blue: "#343A63",
          fadeblue: "#6A72A9",
          lightblue: "#D6D8E2",
          paleblue: "#A1A5C4",
          tan: "#B49167",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        // Josefin Sans Need this font
      },
      screens: {
        xs: "400px",
        ss: "580px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}