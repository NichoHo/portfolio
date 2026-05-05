import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.6' }], // 18px
        lg: ['1.406rem', { lineHeight: '1.5' }],   // ~22.5px
        xl: ['1.758rem', { lineHeight: '1.4' }],   // ~28px
        '2xl': ['2.197rem', { lineHeight: '1.2' }],// ~35px
        '3xl': ['2.746rem', { lineHeight: '1.2' }],// ~44px
      },
    },
  },
  plugins: [],
};
export default config;