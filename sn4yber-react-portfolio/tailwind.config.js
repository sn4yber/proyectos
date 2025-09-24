/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				dark: '#7c3aed',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			success: '#10b981',
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			text: {
  				primary: '#ffffff',
  				secondary: '#a1a1aa',
  				muted: '#71717a'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'background-primary': 'hsl(var(--background))',
  			'background-glass': 'rgba(255,255,255,0.1)',
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
  			'gradient-secondary': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  			'gradient-surface': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)'
  		},
  		boxShadow: {
  			glow: '0 0 40px rgba(139, 92, 246, 0.3)',
  			glass: '0 8px 32px rgba(0, 0, 0, 0.1)'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
  			typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
  			gradient: 'gradient 6s ease infinite'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'pulse-glow': {
  				'0%': {
  					boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
  				},
  				'100%': {
  					boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)'
  				}
  			},
  			typing: {
  				from: {
  					width: '0'
  				},
  				to: {
  					width: '100%'
  				}
  			},
  			'blink-caret': {
  				'from, to': {
  					borderColor: 'transparent'
  				},
  				'50%': {
  					borderColor: '#8b5cf6'
  				}
  			},
  			gradient: {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			}
  		},
  		backgroundSize: {
  			'300%': '300%'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
