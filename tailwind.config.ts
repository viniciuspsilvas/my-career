import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    separated: {
      comma: ", ",
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-aguda)']
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: 'transparent',
        black: {
          DEFAULT: '#323232',
          0: 'rgba(50, 50, 50, 0)',
          35: 'rgba(50, 50, 50, 0.35)',
          45: 'rgba(50, 50, 50, 0.45)',
          55: 'rgba(50, 50, 50, 0.55)',
          65: 'rgba(50, 50, 50, 0.65)',
          75: 'rgba(50, 50, 50, 0.75)',
          85: 'rgba(50, 50, 50, 0.85)',
          95: 'rgba(50, 50, 50, 0.95)',
          100: '#323232'
        },
        white: {
          DEFAULT: '#fff',
          50: '#f7f7f7',
          40: '#F4F4F4',
          30: '#F8F8F8',
        },
        primary: {
          DEFAULT: '#FDBA2D',
          100: '#fee6b3',
          200: '#fed681',
          300: '#fdc54e',
          400: '#fdb41c',
          500: '#FDBA2D',
          600: '#e39b02',
          700: '#b17802',
          800: '#7e5601',
          900: '#4c3401'
        },
        secondary: {
          DEFAULT: '#F2CEA5',
          100: '#FFF7F0',
          200: '#FFEEDB',
          300: '#FFE4C1',
          400: '#FFD8A7',
          500: '#F2CEA5',
          600: '#CFA57E',
          700: '#A97D57',
          800: '#825534',
          900: '#5D3D17'
        },
        tertiary: {
          DEFAULT: '#736037',
          100: '#D9C9BE',
          200: '#B1A18F',
          300: '#897760',
          400: '#615E31',
          500: '#736037',
          600: '#54492B',
          700: '#372C1D',
          800: '#1B160F',
          900: '#0D0B07'
        },
        basic: {
          DEFAULT: '#C5CEE0', // eva light
          100: '#FFFFFF',
          200: '#F7F9FC',
          300: '#EDF1F7',
          400: '#E4E9F2',
          500: '#C5CEE0',
          600: '#8F9BB3',
          700: '#2E3A59',
          800: '#222B45',
          900: '#1A2138',
          1000: '#151A30',
          1100: '#101426'
        },
        danger: {
          DEFAULT: '#FF4E53',
          100: '#FFEBE9',
          200: '#FFC3C4',
          300: '#FF9B9C',
          400: '#FF767C',
          500: '#FF4E53',
          600: '#DB323B',
          700: '#B71926',
          800: '#930F19',
          900: '#7A0A14'
        },

        success: {
          DEFAULT: '#5BD36B',
          500: '#5BD36B',
          600: '#42B55C',
          700: '#3ba051',
          800: '#2e7f42',
          900: '#1f5c2f',
          1000: '#144020',
          1100: '#0b2b15',
          1200: '#061a0c',
          1300: '#030b06'


        },
        warning: {
          DEFAULT: '#FCB353',
          500: '#FCB353',
          600: '#E89B3F',
          700: '#c47f32',
          800: '#9e6124',
          900: '#7a481a',
          1000: '#5a3412',
          1100: '#3e220b',
          1200: '#261207',
          1300: '#140b04'
        },
        info: {
          DEFAULT: '#28C2ED',
          500: '#28C2ED',
          600: '#1D98CB',
          700: '#1981aa'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
