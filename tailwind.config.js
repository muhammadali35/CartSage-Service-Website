/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ CartSage Brand Color Palette — Official
       keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // ✅ Shine effect for button
        shine: {
          '0%': { transform: 'translateX(-100%)', opacity: 0.6 },
          '100%': { transform: 'translateX(200%)', opacity: 0 },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        // ✅ Register shine animation
        shine: 'shine 1.2s ease-out forwards',
      },

      colors: {
        // 🔷 PRIMARY BRAND COLORS (from logo)
        'brand-orange': {
          DEFAULT: '#FF6B35', // CTA buttons, cart icon, highlights
          hover: '#F55C23',   // Button hover, active states
        },
        'brand-blue': {
          DEFAULT: '#2563EB', // Logo text, links, key headings
          hover: '#1D4ED8',   // Link hover, secondary actions
        },

        // 🌈 ACCENT & UI COLORS
        'brand-teal': '#0EA5E9',   // Active nav, testimonials, success states

        // 🎨 BACKGROUND & TEXT COLORS
        'dark-navy': '#0F172A',    // Navbar, footer, dark overlays
        'light-bg': '#F8FAFC',     // Card backgrounds, service/project sections
        'text-dark': '#1E293B',    // Body text on light backgrounds
        'text-light': '#CBD5E1',   // Text on dark backgrounds (navbar, footer)
        'border-gray': '#E2E8F0',  // Card borders, dividers, subtle lines
      },

    
    },
  },
  plugins: [],
};