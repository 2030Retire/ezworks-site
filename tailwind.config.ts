import type { Config } from 'tailwindcss';

/**
 * Brand palette. Contrast pairs verified against WCAG AA:
 *   ink   #16202B on #FFFFFF  → 14.8:1
 *   soft  #5A6B7E on #FFFFFF  →  5.3:1  (body-safe)
 *   soft  #5A6B7E on #F7F9FC  →  5.0:1
 *   blue  #0063F9 on #FFFFFF  →  5.0:1  (link/label safe, AA for normal text)
 *   white #FFFFFF on #0063F9  →  5.0:1
 *   white #FFFFFF on #0B1B2E  → 15.5:1
 * Brand blue is an accent only — never large bodies of blue text on white.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0063F9',
          hover: '#0052D1',
          deep: '#0B1B2E',
        },
        ink: '#16202B',
        soft: '#5A6B7E',
        line: '#E3E9F0',
        // Second hairline weight: table header rules and closing dividers,
        // where the default line reads too faint against a surface tone.
        'line-strong': '#CDD2D8',
        tint: '#F0F5FF',
        surface: '#F7F9FC',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
        prose: '68ch',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '18px',
      },
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        reveal: 'reveal .5s cubic-bezier(.2,.8,.2,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
