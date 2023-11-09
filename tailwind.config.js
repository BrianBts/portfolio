const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      fontSize: {
        sm: ["0.75rem", "1rem"],
        md: ["0.875rem", "1.375rem"],
        lg: ["1rem", "1.5rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["2rem", "2.5rem"],
      },
      colors: {
        redePort: "#E62E1F",
        bluePort: "#185CBC",
        backgroundColor: "#F9F3F2",
        backGrey: "#303031",
      },
    },
  },
  plugins: [],
});
