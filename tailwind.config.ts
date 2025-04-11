
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				teal: {
					DEFAULT: '#00C9A7',
					hover: '#00B396',
					dark: '#00A084',
					light: '#E5FFF8',
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
				},
        walker: {
          DEFAULT: '#00C9A7',
          hover: '#00B396',
          dark: '#1f1f24',
          light: '#E5FFF8',
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				"accordion-up": {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				},
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(0, 201, 167, 0.2), 0 0 20px rgba(0, 201, 167, 0.2)"
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(0, 201, 167, 0.4), 0 0 30px rgba(0, 201, 167, 0.3)"
          }
        }
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: 'float 5s ease-in-out infinite',
				"fade-in": "fade-in 0.3s ease-out",
				"fade-out": "fade-out 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite"
			},
      boxShadow: {
        'modern': '0 4px 20px -2px rgba(0,0,0,0.2)',
        'input': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -12px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 10px rgba(0, 201, 167, 0.5), 0 0 30px rgba(0, 201, 167, 0.3)',
      },
      backgroundImage: {
        'auth-pattern': "url('data:image/svg+xml,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"rgb(148 163 184 / 0.05)\"%3e%3cpath d=\"M0 .5H31.5V32\/%3e%3c/svg%3e')",
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
