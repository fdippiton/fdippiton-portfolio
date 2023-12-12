/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_night: "#373286",
        light_pink: "rgba(221, 198, 240, 0.5)",
        electric_blue: "#1100d9",
        golden_yellow: "#f9b36e",
        banana_maria: "#fbe9b9",
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
