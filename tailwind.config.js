/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          "noto": ["Noto Sans", "sans-serif"]
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
        title: 'var(--title)',
        border: 'var(--border)',
        footerBackground: 'var(--footerBackground)',
      },
  },
  },
  plugins: [],
}