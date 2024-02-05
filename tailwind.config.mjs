/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)',
				'dark-grayish-red': 'hsl(0, 6%, 24%)',
			},
			colors: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)',
				'dark-grayish-red': 'hsl(0, 6%, 24%)'
			},
			borderColor: {
				'desaturated-red': 'hsl(0, 36%, 70%)',
				'soft-red': 'hsl(0, 93%, 68%)',
				'dark-grayish-red': 'hsl(0, 6%, 24%)'
			},
			backgroundImage: {
				'pattern': 'url("/images/bg-pattern-desktop.svg")'
			},
			boxShadow: {
				'button-shadow': '0px 0px 18px 1px hsl(0, 20%, 80%)'
			},
			
			
		},
	},
	plugins: [],
}
