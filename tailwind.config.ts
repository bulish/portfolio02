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
        blackColor: '#121423',
        primaryColor: '#006CF4',
        secondaryColor: '#175CCD',
        terniaryColor: '#192141',
        whiteColor: '#FFFFFF',
        lightGreyColor: '#F6F6F9',
        darkGreyColor: '#B0B0B0',
        bordersColor: '#474F71',
        errorColor: '#ba0d0d',
        succcessColor: '#107a49'
      },
    },
  },
  plugins: [],
}
export default config
