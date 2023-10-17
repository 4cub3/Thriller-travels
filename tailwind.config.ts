import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      primary: '#1c2551',
      "primary-100": '#2d3253',
      "white-10": '#f8f8f8',
     },
     flex:{
      "2" : '0 0 33%'
     }
    },
  },
  plugins: [],
}
export default config
