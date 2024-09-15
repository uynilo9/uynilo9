import * as unocss from 'unocss';

export default unocss.defineConfig({
	presets: [
		unocss.presetUno(),
		unocss.presetIcons(),
		unocss.presetWebFonts({
			provider: 'google',
			fonts: {
				quicksand: 'Quicksand:400,500,600',
			},
		}),
	],
	shortcuts: {
		'body-default': 'flex font-quicksand bg-black:90',
		'text-default':
			'text-white:90 selection:bg-white:90 selection:text-black:90',
		'text-default-reverse':
			'text-black:90 selection:bg-black:90 selection:text-white:90',
		'router-default':
			'px-1.5 text-default text-gray @hover:text-white:90 transition-all ease-in-out duration-300 cursor-pointer select-none',
		'router-current':
			'px-1.5 text-default-reverse bg-white:90 transition-all ease-in-out duration-300 cursor-default select-none',
		'status-default': 'px-1.25 py-0.5 text-default rounded-1 select-none',
		'status-developing': 'status-default bg-red-500',
		'status-archived': 'status-default bg-dark-800',
		'status-idle': 'status-default bg-yellow-500',
		'status-planning': 'status-default bg-blue-400',
		'icon-default':
			'text-5 text-gray transition-color ease-in-out duration-300',
		'icon-roc': 'i-twemoji:flag-taiwan text-4',
		'icon-check': 'i-tabler:discount-check-filled?mask text-4 text-blue',
		'icon-pkg.go.dev':
			'i-vscode-icons:file-type-go-gopher?mask icon-default @hover:text-[#6ad7e5]',
		'icon-vercel':
			'i-tabler:brand-vercel icon-default @hover:text-[#f5f5f5]',
		'icon-apple-music':
			'i-simple-icons:applemusic icon-default @hover:text-[#fb5169]',
		'icon-discord':
			'i-tabler:brand-discord icon-default @hover:text-[#5865f2]',
		'icon-github':
			'i-tabler:brand-github icon-default @hover:text-[#f5f5f5]',
		'icon-reddit':
			'i-tabler:brand-reddit icon-default @hover:text-[#ec4001]',
		'icon-twitch':
			'i-tabler:brand-twitch icon-default @hover:text-[#843feb]',
		'icon-twitter':
			'i-tabler:brand-twitter icon-default @hover:text-[#1b8fdd]',
		'icon-youtube':
			'i-tabler:brand-youtube icon-default @hover:text-[#db0808]',
		'icon-bun':
			'i-vscode-icons:file-type-bun?mask icon-default @hover:text-[#fbf0df]',
		'icon-ts':
			'i-tabler:brand-typescript icon-default @hover:text-[#3178c6]',
		'icon-vue': 'i-tabler:brand-vue icon-default @hover:text-[#41b883]',
		'icon-vite': 'i-tabler:brand-vite icon-default @hover:text-[#7590ff]',
		'icon-unocss':
			'i-vscode-icons:file-type-unocss?mask icon-default @hover:text-[#4d4d4d]',
		'icon-go': 'i-tabler:brand-golang icon-default @hover:text-[#00acd7]',
		'icon-wails': 'i-simple-icons:wails icon-default @hover:text-[#d02a2c]',
	},
});
