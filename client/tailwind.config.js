/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      colors: {
        grayBackground: "#1F2122",
        grayBackgroundLight: "#27292A",

        backgroundMain: "#1F2122",
        accent: "#007BFF",
        secondary: "#F1F1F1",
        textMain: "#FFFFFF",
        textSecondary: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
