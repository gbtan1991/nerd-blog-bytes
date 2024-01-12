/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'accent-purple': '#b544ff',
          'soft-teal': '#4ecdc4',
          gold: '#ffd700',
          'muted-coral': '#ff6b81', // Vibrant purple as an accent color
        },
        neutral: {
          'light-gray': '#f5f6fa',
          white: '#ffffff',
        },
      },
     
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
};
