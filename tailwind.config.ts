import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: 'hsl(var(--background))',
          dark: 'hsl(var(--background))'
        },
        foreground: {
          light: 'hsl(var(--foreground))',
          dark: 'hsl(var(--foreground))'
        },
        primary: {
          light: 'hsl(var(--primary))',
          dark: 'hsl(var(--primary))',
          DEFAULT: 'hsl(var(--primary))'
        },
        secondary: {
          light: 'hsl(var(--secondary))',
          dark: 'hsl(var(--secondary))'
        },
        accent: {
          light: 'hsl(var(--accent))',
          dark: 'hsl(var(--accent))'
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
        info: 'hsl(var(--info))',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'hover-scale': 'hoverScale 0.3s ease-out forwards',
        'hover-rotate': 'hoverRotate 0.3s ease-out forwards',
        'hover-translate': 'hoverTranslate 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        hoverRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1deg)' },
        },
        hoverTranslate: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1px)' },
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px -3px rgba(0, 0, 0, 0.1)',
        'dark-glow': '0 0 15px -3px rgba(255, 255, 255, 0.1)',
      },
      transitionProperty: {
        'scale': 'transform',
        'rotate': 'transform',
        'shadow': 'box-shadow',
        'opacity': 'opacity',
      },
    },
  },
  plugins: [],
} satisfies Config;
