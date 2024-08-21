/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#fafafa',
				black: '#1d1d1d',
				midblack: '#2d2d2d',
				gray: '#959595'
			}
		}
	},
	plugins: []
};
