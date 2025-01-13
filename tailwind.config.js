import { list } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        light: {
          primary: "#f8fafc", //slate-50
          secondary: "#cbd5e1",//slate-300
          tertiary: "#475569",//slate-600
        },
        dark: {
          primary: "#27272a",//zinc-900
          secondary: "#09090b",//zinc-950
          tertiary: "#a1a1aa",//zinc-400
        },
      },
    },
  },
  plugins: [],
}