/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      fontFamily: {
        lobster: "'Lobster', 'cursive'",
        karla: "'Karla', 'sans-serif'",
        'source-code-pro': "'Source Code Pro', 'monospace'",
        'zilla-slab': "'Zilla Slab', 'serif'"
      }
    },
  },
  plugins: [],
}