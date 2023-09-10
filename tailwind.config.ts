import type { Config } from 'tailwindcss';

// const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // primary: colors.sky,
        'brand-normal': '#1e80ff',
        'brand-hover': '#1171ee',
      },
      screens: {
        lg: '1032px',
        'xl': '1232px',
        '2xl': '1480px',
      },
      maxWidth: {
        '5xl': '1000px',
        '6xl': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
