import * as unocss from 'unocss';

export default unocss.defineConfig({
    presets: [
        unocss.presetUno(),
        unocss.presetIcons(),
        unocss.presetWebFonts({
        provider: 'google',
            fonts: {
                quicksand: 'Quicksand:400,500,600'
            }
        })
    ],
    shortcuts: {
        'body-default': 'flex font-quicksand bg-black:90',
        'text-default': 'text-white:90 selection:bg-white:90 selection:text-black:90',
        'text-default-reverse': 'text-black:90 selection:bg-black:90 selection:text-white:90',
        'router-default': 'px-1.5 text-default text-gray @hover:text-white:90 transition-all ease-in-out duration-300 cursor-pointer select-none',
        'router-current': 'px-1.5 text-default-reverse bg-white:90 transition-all ease-in-out duration-300 cursor-default select-none',
        'icon-github': 'i-tabler:brand-github text-5 text-gray @hover:text-[#ececec] transition-color ease-in-out duration-300',
        'icon-bun': 'i-vscode-icons:file-type-bun?mask text-5 text-gray @hover:text-[#fbf0df] transition-color ease-in-out duration-300',
        'icon-ts': 'i-tabler:brand-typescript text-5 text-gray @hover:text-[#3178c6] transition-color ease-in-out duration-300',
        'icon-vue': 'i-tabler:brand-vue text-5 text-gray @hover:text-[#41b883] transition-color ease-in-out duration-300',
        'icon-vite': 'i-tabler:brand-vite text-5 text-gray @hover:text-[#7590ff] transition-color ease-in-out duration-300',
        'icon-unocss': 'i-vscode-icons:file-type-unocss?mask text-5 text-gray @hover:text-[#4d4d4d] transition-color ease-in-out duration-300',
    }
});