/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a2b41",
        secondary: "#ec5a2d",
        tertiary: "#da275b",
        textPrimary: "#f5f3f4",
      },
    },
  },
  plugins: [],
};
