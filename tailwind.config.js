/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aeroblue: "#f5d6dd",
        light_pink: "#f1f1fa",
        electric_blue: "#1100d9",
        golden_yellow: "#f9b36e",
        electric_blue: "#0500e8",
        green_forest: "#4e9c86",
        biscay: "#193271",
        casablanca: "#fbb84b",
        red: "red",
      },
      dropShadow: {
        "3xl": "0px 6px 9px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        main_font: ["JetBrains Mono", "system-ui"],
      },
      scale: {
        110: "1.10",
      },
    },
  },
  plugins: [],
};
