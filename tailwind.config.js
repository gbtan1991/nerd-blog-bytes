/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
