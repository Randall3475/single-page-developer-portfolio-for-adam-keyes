/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "768px",
      desktop: "1110px",
    },
    container: {
      screens: {
        mobile: "640px",
        tablet: "768px",
        desktop: "1110px",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        "primary-black": "hsl(0, 0%, 8%)",
        "primary-neon": "hsl(153, 71%, 59%)",
        "secondary-gray": "hsl(0, 0%, 14%)",
        "misc-white": "hsl(0, 0%, 85%)",
        error: "hsla(7, 100%, 68%, 1)",
      },
    },
  },
  plugins: [],
};
