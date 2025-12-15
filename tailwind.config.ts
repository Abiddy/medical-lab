import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        'light-tone': 'var(--color-light-tone)',
        'mid-tone': 'var(--color-mid-tone)',
        'dark-tone': 'var(--color-dark-tone)',
        'border-dark': 'var(--color-border-dark)',
        'border-white': 'var(--color-border-white)',
        'text-light-tone-faded': 'var(--color-text-light-tone-faded)',
        'text-light-tone': 'var(--color-text-light-tone)',
        'primary-blue': 'var(--color-primary-blue)',
        'dark-gray': 'var(--color-dark-gray)',
        'light-gray': 'var(--color-light-gray)',
      },
      fontFamily: {
        'red-hat-display': ['var(--font-red-hat-display)', 'sans-serif'],
        'manrope': ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config



