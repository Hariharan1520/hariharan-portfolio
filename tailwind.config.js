/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
        },
        accent: {
          blue: {
            DEFAULT: 'var(--accent-blue)',
            hover: 'var(--accent-blue-hover)',
            subtle: 'var(--accent-blue-subtle)',
          },
        },
        surface: {
          border: 'var(--border-subtle)',
          'border-highlight': 'var(--border-highlight)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'content': '1240px',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'blue-glow': '0 0 20px -4px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
};
