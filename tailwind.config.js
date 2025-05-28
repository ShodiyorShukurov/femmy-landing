module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        'main-text-color': 'var(--main-text-color)',
        'secondary-text-color': 'var(--secondary-text-color)',
        'button-color': 'var(--button-color)',
        'button-text-color': 'var(--button-text-color)',
        'header-bg': 'var(--header-bg)',
      },
       screens: {
        tall: { raw: '(max-height: 800px)' }, 
        xd: '900px',
      },
    },
  },
  plugins: [],
};