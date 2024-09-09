/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {backgroundImage: {
      'cripto-app': "url('/bg.jpg')",
    },},
  },
  plugins: [],
}

