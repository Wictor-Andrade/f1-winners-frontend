module.exports = {
    darkMode: ["class"],
    content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	screens: {
    		sm: '480px',
    		md: '768px',
    		lg: '992px',
    		xl: '1280px',
    		xxl: '1440px'
    	},
    	container: {
    		center: true,
    		screens: {
    			sm: '100%',
    			md: '100%',
    			lg: '992px',
    			xl: '1280px'
    		}
    	},
    	maxWidth: {
    		xxs: '20rem',
    		xs: '25rem',
    		sm: '30rem',
    		md: '35rem',
    		lg: '48rem',
    		xl: '64rem',
    		xxl: '80rem',
    		full: '100%'
    	},
    	boxShadow: {
    		xxsmall: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    		xsmall: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    		small: '0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)',
    		medium: '0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)',
    		large: '0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)',
    		xlarge: '0px 24px 48px -12px rgba(0, 0, 0, 0.18)',
    		xxlarge: '0px 32px 64px -12px rgba(0, 0, 0, 0.14)'
    	},
    	fontSize: {
    		xs: [
    			'0.75rem',
    			{
    				lineHeight: '1.5'
    			}
    		],
    		sm: [
    			'0.875rem',
    			{
    				lineHeight: '1.5'
    			}
    		],
    		base: [
    			'1rem',
    			{
    				lineHeight: '1.5'
    			}
    		],
    		md: [
    			'1.125rem',
    			{
    				lineHeight: '1.5'
    			}
    		],
    		lg: [
    			'1.25rem',
    			{
    				lineHeight: '1.5'
    			}
    		],
    		xl: [
    			'1.25rem',
    			{
    				lineHeight: '1.4'
    			}
    		],
    		'2xl': [
    			'1.5rem',
    			{
    				lineHeight: '1.4'
    			}
    		],
    		'3xl': [
    			'1.75rem',
    			{
    				lineHeight: '1.4'
    			}
    		],
    		'4xl': [
    			'2rem',
    			{
    				lineHeight: '1.3'
    			}
    		],
    		'5xl': [
    			'2.25rem',
    			{
    				lineHeight: '1.2'
    			}
    		],
    		'6xl': [
    			'2.5rem',
    			{
    				lineHeight: '1.2'
    			}
    		],
    		'7xl': [
    			'2.75rem',
    			{
    				lineHeight: '1.2'
    			}
    		],
    		'8xl': [
    			'3rem',
    			{
    				lineHeight: '1.2'
    			}
    		],
    		'9xl': [
    			'3.25rem',
    			{
    				lineHeight: '1.2'
    			}
    		],
    		'10xl': [
    			'3.5rem',
    			{
    				lineHeight: '1.2'
    			}
    		]
    	},
    	extend: {
    		spacing: {
    			'0': '0px',
    			'1': '0.25rem',
    			'2': '0.5rem',
    			'3': '0.75rem',
    			'4': '1rem',
    			'5': '1.25rem',
    			'6': '1.5rem',
    			'8': '2rem',
    			'10': '2.5rem',
    			'12': '3rem',
    			'14': '3.5rem',
    			'16': '4rem',
    			'18': '4.5rem',
    			'20': '5rem',
    			'24': '6rem',
    			'28': '7rem',
    			'30': '7.5rem',
    			'32': '8rem',
    			'36': '9rem',
    			'40': '10rem',
    			'44': '11rem',
    			'48': '12rem',
    			'52': '13rem',
    			'56': '14rem',
    			'60': '15rem',
    			'64': '16rem',
    			'72': '18rem',
    			'80': '20rem',
    			'96': '24rem',
    			px: '1px'
    		},
    		colors: {
    			brand: {
    				black: '#000000',
    				white: '#ffffff'
    			},
    			neutral: {
    				DEFAULT: '#666666',
    				black: '#000000',
    				white: '#ffffff',
    				lightest: '#eeeeee',
    				lighter: '#cccccc',
    				light: '#aaaaaa',
    				dark: '#444444',
    				darker: '#222222',
    				darkest: '#111111'
    			},
    			system: {
    				'success-green': '#027a48',
    				'success-green-light': '#ecfdf3',
    				'error-red': '#b42318',
    				'error-red-light': '#fef3f2'
    			},
    			background: {
    				DEFAULT: '#ffffff',
    				primary: '#ffffff',
    				secondary: '#eeeeee',
    				tertiary: '#666666',
    				alternative: '#000000',
    				success: '#ecfdf3',
    				error: '#fef3f2'
    			},
    			border: {
    				DEFAULT: '#000000',
    				primary: '#000000',
    				secondary: '#aaaaaa',
    				tertiary: '#444444',
    				alternative: '#ffffff',
    				success: '#027a48',
    				error: '#b42318'
    			},
    			text: {
    				DEFAULT: '#000000',
    				primary: '#000000',
    				secondary: '#aaaaaa',
    				alternative: '#ffffff',
    				success: '#027a48',
    				error: '#b42318'
    			},
    			link: {
    				DEFAULT: '#000000',
    				primary: '#000000',
    				secondary: '#666666',
    				alternative: '#ffffff'
    			},
    			sidebar: {
    				DEFAULT: '#FFF',
    			}
    		},
    		typography: '(theme) => ({\n				DEFAULT: {\n					css: [\n						{\n							color: "#000000",\n							lineHeight: "1.5",\n							maxWidth: "100%",\n							p: {\n								marginTop: "1rem",\n								marginBottom: "1rem",\n							},\n							"h1, h2, h3, h4, h5, h6": {\n								fontWeight: theme("fontWeight.bold"),\n							},\n							h2: {\n								marginBottom: theme("spacing.4"),\n								marginTop: theme("spacing.6"),\n								fontSize: "2.25rem",\n								lineHeight: "1.2",\n							},\n							h3: {\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.6"),\n								fontSize: "2rem",\n								lineHeight: "1.2",\n							},\n							h4: {\n								marginBottom: theme("spacing.5"),\n								marginTop: theme("spacing.6"),\n								fontSize: "1.5rem",\n								lineHeight: "1.4",\n							},\n							h5: {\n								fontSize: "1.25rem",\n								marginTop: theme("spacing.5"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.4",\n							},\n							h6: {\n								fontSize: "1.125rem",\n								marginTop: theme("spacing.5"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.4",\n							},\n							blockquote: {\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.6"),\n								borderLeftWidth: "0.1875rem",\n								borderLeftColor: theme("colors.border.primary"),\n								paddingLeft: theme("spacing.5"),\n								paddingRight: theme("spacing.5"),\n								paddingTop: theme("spacing.3"),\n								paddingBottom: theme("spacing.3"),\n								fontSize: "1.25rem",\n								fontWeight: theme("fontWeight.normal"),\n								lineHeight: "1.5",\n							},\n							figure: {\n								marginTop: theme("spacing.10"),\n								marginBottom: theme("spacing.10"),\n							},\n							figcaption: {\n								marginTop: theme("spacing.2"),\n								borderLeftWidth: "2px",\n								borderLeftColor: theme("colors.border.DEFAULT"),\n								paddingLeft: theme("spacing.2"),\n								fontSize: ".875rem",\n								color: theme("colors.text.primary"),\n								opacity: "0.8",\n								lineHeight: "1.5",\n							},\n							strong: {\n								fontWeight: theme("fontWeight.bold"),\n							},\n						},\n						{\n							":where(&)": {\n								"> h2:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h3:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h4:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h5:first-child": {\n									marginTop: theme("spacing.5"),\n								},\n								"> h6:first-child": {\n									marginTop: theme("spacing.5"),\n								},\n							},\n						},\n					],\n				},\n				md: {\n					css: [\n						{\n							h2: {\n								fontSize: "2.75rem",\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.2",\n							},\n							h3: {\n								fontSize: "2.25rem",\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.6"),\n								lineHeight: "1.2",\n							},\n							h4: {\n								fontSize: "1.75rem",\n								lineHeight: "1.3",\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.5"),\n							},\n							h5: {\n								fontSize: "1.5rem",\n								marginTop: theme("spacing.5"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.4",\n							},\n							h6: {\n								fontSize: "1.25rem",\n								marginTop: theme("spacing.5"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.4",\n							},\n							figure: {\n								marginTop: theme("spacing.12"),\n								marginBottom: theme("spacing.12"),\n							},\n							figcaption: {\n								marginTop: theme("spacing.2"),\n								fontSize: theme("fontSize.sm"),\n							},\n							p: {\n								fontSize: "1rem",\n								marginTop: "0",\n								marginBottom: "1rem",\n							},\n							blockquote: {\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.6"),\n							},\n						},\n						{\n							":where(&)": {\n								"> h2:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h3:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h4:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h5:first-child": {\n									marginTop: theme("spacing.5"),\n								},\n								"> h6:first-child": {\n									marginTop: theme("spacing.5"),\n								},\n							},\n						},\n					],\n				},\n				lg: {\n					css: [\n						{\n							h2: {\n								fontSize: "3rem",\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.2",\n							},\n							h3: {\n								fontSize: "2.5rem",\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.6"),\n								lineHeight: "1.2",\n							},\n							h4: {\n								fontSize: "2rem",\n								lineHeight: "1.3",\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.5"),\n							},\n							h5: {\n								fontSize: "1.5rem",\n								marginTop: theme("spacing.5"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.4",\n							},\n							h6: {\n								fontSize: "1.25rem",\n								marginTop: theme("spacing.5"),\n								marginBottom: theme("spacing.4"),\n								lineHeight: "1.4",\n							},\n							figure: {\n								marginTop: theme("spacing.12"),\n								marginBottom: theme("spacing.12"),\n							},\n							figcaption: {\n								marginTop: theme("spacing.2"),\n								fontSize: theme("fontSize.sm"),\n							},\n							p: {\n								fontSize: "1rem",\n								lineHeight: "1.5",\n								marginTop: "0",\n								marginBottom: "1rem",\n							},\n							blockquote: {\n								marginTop: theme("spacing.6"),\n								marginBottom: theme("spacing.6"),\n							},\n						},\n						{\n							":where(&)": {\n								"> h2:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h3:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h4:first-child": {\n									marginTop: theme("spacing.6"),\n								},\n								"> h5:first-child": {\n									marginTop: theme("spacing.5"),\n								},\n								"> h6:first-child": {\n									marginTop: theme("spacing.5"),\n								},\n							},\n						},\n					],\n				},\n			})',
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0px'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0px'
    				}
    			},
    			'loop-horizontally': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(-100%)'
    				}
    			},
    			'loop-testimonials': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(-135rem)'
    				}
    			},
    			'loop-vertically': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(-50%)'
    				}
    			},
    			'loop-vertically-top': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(-50%)'
    				}
    			},
    			'loop-vertically-bottom': {
    				from: {
    					transform: 'translateY(-50%)'
    				},
    				to: {
    					transform: 'translateY(0)'
    				}
    			},
    			'marquee-horizontally': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(-50%)'
    				}
    			},
    			'marquee-top': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(-50%)'
    				}
    			},
    			'marquee-right': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(100%)'
    				}
    			},
    			'marquee-bottom': {
    				from: {
    					transform: 'translateX(-50%)'
    				},
    				to: {
    					transform: 'translateX(0%)'
    				}
    			},
    			'marquee-left': {
    				from: {
    					transform: 'translateX(100%)'
    				},
    				to: {
    					transform: 'translateX(0)'
    				}
    			},
    			tabs: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'loop-horizontally': 'loop-horizontally 20s linear infinite',
    			'loop-testimonials': 'loop-testimonials 30s linear infinite',
    			'loop-vertically': 'loop-vertically 30s linear infinite',
    			'loop-vertically-top': 'loop-vertically-top 50s linear infinite',
    			'loop-vertically-bottom': 'loop-vertically-bottom 50s linear infinite',
    			'marquee-horizontally': 'marquee-top 30s linear infinite',
    			'marquee-top': 'marquee-top 50s linear infinite',
    			'marquee-right': 'marquee-right 25s linear infinite',
    			'marquee-bottom': 'marquee-bottom 50s linear infinite',
    			'marquee-left': 'marquee-left 25s linear infinite',
    			tabs: 'tabs 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards'
    		}
    	}
    },
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		({ addComponents }) => {
			const newComponents = {
				".animate-disable": {
					animationName: "none",
					animationDuration: "0s",
					"--tw-enter-opacity": "initial",
					"--tw-enter-scale": "initial",
					"--tw-enter-rotate": "initial",
					"--tw-enter-translate-x": "initial",
					"--tw-enter-translate-y": "initial",
				},
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					scrollbarWidth: "none",
				},
			};
			addComponents(newComponents);
		},
	],
};