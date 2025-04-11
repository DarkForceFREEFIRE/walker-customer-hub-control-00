
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
        },
        // Windows 11 fluent design system colors
        win11: {
          background: '#1F1F1F',
          card: '#292929',
          accent: '#60CDFF', // Default Windows accent blue
          text: '#FFFFFF',
          border: 'rgba(255, 255, 255, 0.08)'
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
            boxShadow: "0 0 5px rgba(96, 205, 255, 0.2), 0 0 20px rgba(96, 205, 255, 0.2)"
          },
          "50%": { 
            boxShadow: "0 0 10px rgba(96, 205, 255, 0.4), 0 0 30px rgba(96, 205, 255, 0.3)"
          }
        },
        // Windows 11 animations
        "reveal": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        }
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: 'float 5s ease-in-out infinite',
				"fade-in": "fade-in 0.3s ease-out",
				"fade-out": "fade-out 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        // Windows 11 animations
        "reveal": "reveal 0.5s cubic-bezier(0.05, 0.7, 0.1, 1.0) forwards",
        "scale-in": "scale-in 0.3s cubic-bezier(0.05, 0.7, 0.1, 1.0) forwards"
			},
      boxShadow: {
        'modern': '0 4px 20px -2px rgba(0,0,0,0.2)',
        'input': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -12px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 10px rgba(96, 205, 255, 0.5), 0 0 30px rgba(96, 205, 255, 0.3)',
        // Windows 11 shadows
        'win11': '0 8px 16px rgba(0, 0, 0, 0.14), 0 0 1px rgba(0, 0, 0, 0.1)',
        'win11-hover': '0 16px 24px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'auth-pattern': "url('data:image/svg+xml,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"rgb(148 163 184 / 0.05)\"%3e%3cpath d=\"M0 .5H31.5V32\/%3e%3c/svg%3e')",
        'noise-subtle': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
