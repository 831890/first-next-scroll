/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        '20px': ['1.25rem', { lineHeight: '1.875rem' }],
        '16px': ['1rem', { lineHeight: '1.5rem' }],
        '14px': ['0.875rem', { lineHeight: '1.375rem' }],
        '12px': ['0.75rem', { lineHeight: '1.125rem' }],
      },
      fontWeight: {
        'ft-700': 700,
        'ft-400': 400,
      },
      colors: {
        gray01: '#323438',
        gray02: '#85878C',
        gray03: '#E5E6E9',
        white: '#FFFFFF',
        green: '#00C362',
        blue: '#2196F3',
      },
    },
  },
  plugins: [],
};
