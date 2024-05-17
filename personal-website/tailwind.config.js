/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'monospace'],
      }
    },
  },
  plugins: [
    typography,
  ],
}
