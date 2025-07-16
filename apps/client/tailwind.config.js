import lineClamp from "@tailwindcss/line-clamp";
import scrollbar from "tailwind-scrollbar";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp, scrollbar({ nocompatible: true })],
};
