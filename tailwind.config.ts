import type { Config } from "tailwindcss";

const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			"primary-gradient": "linear-gradient(to bottom, #B59CF8, #F5F2FF 48%, #B59CF8 68%, #8273A9 100%)",
			frost: "repeating-linear-gradient(to right, rgba(255,255,255,.04) 10%, rgba(255,255,255,.05) 50%, rgba(255,255,255,.04) 80%)",
		},
		fontFamily: {
			sans: 'var(--font-archivo)'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '4rem',
			},
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  		},
  		keyframes: {
  			scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
			blob: {
				"0%":{
					transform: "translate(0px, 0px) scale(1)",
				},
				"33%":{
					transform: "translate(30px, -50px) scale(1.1)",
				},
				"66%":{
					transform: "translate(-20px, 20px) scale(0.9)",
				},
				"100%":{
					transform: "translate(0px, 0px) scale(1)",
				},
			},
  		},
  		animation: {
  			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction,forwards) linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			blob: "blob 7s infinite"
  		}
  	}
  },
  plugins: [addVariablesForColors,
	require("tailwindcss-animate")
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }