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
        "outline-variant": "#59413d",
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
