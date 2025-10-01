
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sora': ['Sora', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			colors: {
				// Theme variables for dynamic theming
				bg: 'rgb(var(--bg) / <alpha-value>)',
				surface: 'rgb(var(--surface) / <alpha-value>)',
				text: 'rgb(var(--text) / <alpha-value>)',
				subt: 'rgb(var(--subt) / <alpha-value>)',
				accent: 'rgb(var(--accent) / <alpha-value>)',
				ring: 'rgb(var(--ring) / <alpha-value>)',
				glass: 'rgb(var(--glass) / <alpha-value>)',
				'button-bg': 'rgb(var(--button-bg) / <alpha-value>)',
				'button-text': 'rgb(var(--button-text) / <alpha-value>)',
				// Existing colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'electric-blue': 'hsl(var(--electric-blue))',
				'electric-blue-light': 'hsl(var(--electric-blue-light))',
				'electric-blue-dark': 'hsl(var(--electric-blue-dark))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl2: '1.25rem',
			},
			boxShadow: {
				soft: '0 10px 30px rgba(0,0,0,0.25)',
			},
			backdropBlur: {
				xs: '2px',
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(.22,.61,.36,1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
