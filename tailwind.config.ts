import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'plant-pattern': 'url("../public/plant-bg.svg")',
          'plant-pattern-gray': 'url("../public/plant-bg-gray.svg")',
      },
      colors: {
        'plant-green': '#2C7F5F',
        'plant-green-dark': '#205D46',
      },
    },
  },
  plugins: [],
}
export default config
