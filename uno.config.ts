import * as unocss from 'unocss';

export default unocss.defineConfig({
    presets: [
        unocss.presetUno(),
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
        'router-current': 'px-1.5 text-default-reverse bg-white:90 transition-all ease-in-out duration-300 cursor-default select-none'
    }
});