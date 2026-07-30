/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1120',
        card: '#111827',
        accent: '#2563EB',
        accentGreen: '#22C55E',
        textPrimary: '#F9FAFB',
        textSecondary: '#9CA3AF',
        borderDark: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};