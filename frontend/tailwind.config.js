/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline-white': '0 0 0 1px rgba(255, 255, 255, 0.9)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',                 // #rgb(84, 184, 245) for contrast headings
        },
        text: 'var(--color-text)',                  // #ffffff for headings        
        secondary: 'var(--color-secondary)',          // #B3BBCA for secondary text
        background: 'var(--color-background)',          // rgb(17, 11, 11) for background
        hover: 'var(--color-hover)',                  // rgb(23, 29, 35) for hover

        warning: 'var(--color-warning)',               // #D7AE20
        success: 'var(--color-success)',               // #3DBB59
        danger: 'var(--color-danger)',                 // #D65025
        info: 'var(--color-info)',                     // #1BAAB4
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        'h2': ['1.5rem', { lineHeight: '2' }], // 24px
        'h3': ['1.3rem', { lineHeight: '2rem' }], // 22px
        'h4': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        'h5': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'h6': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      },
      fontFamily: {
        mono: ['Vectrex', 'mono'],
        mono_heading: ['GT Pressura Mono', 'mono']
      },
      screens: {
        xl: { max: '1149px' },
        lg: { max: '991px' },
        md: { max: '767px' },
        sm: { max: '560px' },
        xs: { max: '479px' },
      },
    },
  },
  plugins: [],
}

