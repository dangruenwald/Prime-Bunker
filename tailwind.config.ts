
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dayBG: '#f7f9fc',
          dayInk: '#0b1c2c',
          nightBG: '#0a1624',
          nightInk: '#e4e6ea',
          steel: '#1a2733',
          navy: '#0f2031',
          accent: '#1b4b7a'
        }
      },
      boxShadow: {
        card: '0 8px 28px rgba(0,0,0,0.12)'
      },
      borderRadius: {
        xl: '14px',
        '2xl': '22px'
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      serif: ['IBM Plex Serif', 'ui-serif', 'Georgia']
    }
  },
  plugins: []
}
export default config
