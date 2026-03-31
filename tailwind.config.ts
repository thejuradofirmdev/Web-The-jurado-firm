import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2340',
          light: '#1a3a5c',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A017',
          dark: '#9A7209',
        },
        premium: '#F2F4F7',
        approved: '#166534',
        whatsapp: '#25D366',
        
        // Manteniendo compatibilidad temporal para componentes que usaban primary/secondary/background
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#0D2340',
        },
        secondary: {
          DEFAULT: '#B8860B',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
