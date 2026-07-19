/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // NeoRox brand palette — dark gaming theme, neon blue + purple
        void: '#07070d',        // page background
        panel: '#0f101c',       // card / panel background
        panel2: '#151726',      // raised panel background
        line: '#22243a',        // hairline borders
        neonblue: '#3fd4ff',    // primary neon blue
        neonblue2: '#0ea5e9',
        neonpurple: '#a855f7',  // primary neon purple
        neonpurple2: '#7c3aed',
        neonpink: '#ff3ec8',    // accent for CTAs
        mist: '#9aa0b4',        // muted body text
        frost: '#e7e9f5'        // primary text
      },
      fontFamily: {
        display: ['"Rajdhani"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(63,212,255,0.35), 0 0 2px rgba(63,212,255,0.8)',
        'neon-purple': '0 0 20px rgba(168,85,247,0.35), 0 0 2px rgba(168,85,247,0.8)',
        'neon-pink': '0 0 24px rgba(255,62,200,0.45), 0 0 2px rgba(255,62,200,0.9)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(63,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,212,255,0.06) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(circle at 50% 0%, rgba(168,85,247,0.25), transparent 60%)'
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.55 }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 1 },
          '20%, 22%, 24%, 55%': { opacity: 0.4 }
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        scan: 'scan 6s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        flicker: 'flicker 4s linear infinite',
        rise: 'rise 0.6s ease forwards'
      }
    }
  },
  plugins: []
}
