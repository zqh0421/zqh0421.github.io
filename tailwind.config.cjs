const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
        // 添加自定义的列宽比例
        'project': '1fr 3fr',
      },
			fontFamily: {
        sans: ["Lato", "Inter", ...defaultTheme.fontFamily.sans],
				colors: {
					primary: '#6919FF',
					success: '#00F090',
					warning: '#FFDC30',
					error: '#FF2E5B',
				},
				borderWidth: {
					0.5: '0.5px',
				},
				minHeight: {
					screen: ['100vh', '100svh'],
				},
				maxHeight: {
					screen: ['100vh', '100svh'],
				},
				height: {
					screen: ['100vh', '100svh'],
				},
				backgroundImage: {
					'radial-highlight':
						'radial-gradient(circle at 50% 100%, rgba(46, 54, 79, 0.4) 1%, rgba(46, 54, 79, 0.1) 100%)',
				},
				keyframes: {
					'toggle-project-item': {
						from: {
							filter: 'grayscale(0%)',
							opacity: 1,
						},
						to: {
							filter: 'grayscale(100%)',
							opacity: 0.2,
						},
					},
					glitch: {
						'10.5263%': {
							clip: 'rect(65px, 9999px, 200px, 0)',
						},
						'15.7895%': {
							clip: 'rect(8px, 9999px, 200px, 0)',
						},
						'21.0526%': {
							clip: 'rect(51px, 9999px, 159px, 0)',
						},
						'26.3158%': {
							clip: 'rect(6px, 9999px, 82px, 0)',
						},
						'31.5789%': {
							clip: 'rect(1px, 9999px, 106px, 0)',
						},
						'36.8421%': {
							clip: 'rect(17px, 9999px, 69px, 0)',
						},
						'42.1053%': {
							clip: 'rect(65px, 9999px, 144px, 0)',
						},
						'47.3684%': {
							clip: 'rect(1px, 9999px, 91px, 0)',
						},
						'52.6316%': {
							clip: 'rect(18px, 9999px, 209px, 0)',
						},
						'57.8947%': {
							clip: 'rect(14px, 9999px, 175px, 0)',
						},
						'63.1579%': {
							clip: 'rect(61px, 9999px, 107px, 0)',
						},
						'68.4211%': {
							clip: 'rect(73px, 9999px, 178px, 0)',
						},
						'73.6842%': {
							clip: 'rect(53px, 9999px, 207px, 0)',
						},
						'78.9474%': {
							clip: 'rect(33px, 9999px, 199px, 0)',
						},
						'84.2105%': {
							clip: 'rect(73px, 9999px, 144px, 0)',
						},
						'89.4737%': {
							clip: 'rect(79px, 9999px, 163px, 0)',
						},
						'94.7369%': {
							clip: 'rect(1px, 9999px, 76px, 0)',
						},
						'100%': {
							clip: 'rect(64px, 9999px, 117px, 0)',
						},
					},
					marquee: {
						to: {
							transform: 'translateX(-100%)',
						},
					},
				},
				animation: {
					'project-item-disabled': 'toggle-project-item 0.3s linear',
					'project-item-enabled': 'toggle-project-item 0.3s linear reverse',
					'glitch-1': 'glitch 4s linear infinite alternate-reverse',
					'glitch-2': 'glitch 2s linear infinite alternate-reverse',
					marquee: 'marquee 25s linear infinite',
				},
      },
		},
	},
	plugins: [],
}