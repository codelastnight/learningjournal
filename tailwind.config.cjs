/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addComponents, theme }) {
			addComponents({
				'a': {
					color: "blue",
					textDecoration: 'underline',
					background: "white"
				},
				'a:hover': {
					color: "white",
					background: "blue"
				}
			});
		},

	]
}

