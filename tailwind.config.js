/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
      '2xl': '1600px',
    },
    extend: {
      colors: {
        primary: '#FDBB56',
      },
      textColor: {
        heading: '#1A1A1A',
        content: '#464B4D',
        description: '#838C8F',
        disabled: '#BFC5C7',
        highlight: '#EC9B0E',
      },
      boxShadow: {
        content: '0 0 5px 0 rgba(0,21,41,0.12)',
        float: '0 4px 10px 0 rgba(0,0,0,0.15), 0 9px 28px 0 rgba(0,0,0,0.05)',
      },
      spacing: {
        7.5: '1.875rem',
      },
      opacity: {
        2: '0.02',
        4: '0.04',
        6: '0.06',
        8: '0.08',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
