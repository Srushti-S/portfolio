/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0a0a0a',
        surface:   '#111110',
        border:    '#1f1e1c',
        primary:   '#e8e0d5',   
        secondary: '#5c574f',   
        muted:     '#2a2925',
        accent:    '#c8a97e',   
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.03em',
      },
    },
  },
  plugins: [],
};
