import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  safelist: [
    {
      pattern: /(text|bg|border|from|to|via)-(olive)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(text|bg|border|from|to|via)-(olive)-(50|100|200|300|400|500|600|700|800|900)\/(10|20|30|40|50|60|70|80|90)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#84a98c",
          dark: "#52796f",
        },
        "dark-grey": "#2d2d2d",
        "olive": {
          50: "#f7f9f7",
          100: "#e8ede9",
          200: "#cad2c5",
          300: "#a3b899",
          400: "#84a98c",
          500: "#52796f",
          600: "#354f52",
          700: "#2f3e46",
          800: "#1e2d2f",
          900: "#0d1b1e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

