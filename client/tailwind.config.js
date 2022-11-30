/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'error': '#ff0000',
        'orange': '#f85d5b',
        blue: {
          '900': '#1f1355'
        },
        neutralText: 'var(--neutralText)',
        neutralBg: 'var(--neutralBg)',
        inputBg: 'var(--inputBg)',
        toggleColor: 'var(--toggleColor)'
      },
      saturate: {
        dark: 'var(--dark)'
      },
      backgroundSize: {
        'full': '100% 100%'
      }
    },
  },
  plugins: [],
}
