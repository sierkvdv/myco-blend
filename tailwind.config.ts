import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#f7f4ef',
          dark: '#ede8df',
          darker: '#ddd6c9',
        },
        forest: {
          DEFAULT: '#2d4a3e',
          light: '#3d6454',
          dark: '#1e3329',
        },
        amber: {
          DEFAULT: '#b07d3a',
          light: '#c9974f',
          dark: '#8f6228',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'sans-serif'],
        serif: ['var(--font-noto-serif-kr)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
