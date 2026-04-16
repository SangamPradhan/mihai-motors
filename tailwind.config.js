/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": "#c0392b",
        "on-primary": "#ffffff",
        "surface": "#131313",
        "on-surface": "#e5e2e1",
        "surface-container": "#201f1f",
        "surface-container-highest": "#2c2c2c",
        "surface-container-low": "#1a1a1a",
        "on-surface-variant": "#a7a7a7",
        "secondary": "#c7c6c6"
      },
      "borderRadius": {
        "DEFAULT": "0px"
      },
      "fontFamily": {
        "headline": ["Noto Serif", "serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
