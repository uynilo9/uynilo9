import * as unocss from 'unocss';

export default unocss.defineConfig({
    presets: [
        unocss.presetUno(),
        unocss.presetWebFonts({
        provider: 'google',
            fonts: {
                quicksand: 'Quicksand:400,500'
            }
        })
    ],
    shortcuts: {
        'body-default': 'flex font-quicksand @light:bg-black:10 @dark:bg-black:90',
        'text-default': 'font-400 @light:text-black:90 @dark:text-white:90 selection:@dark:bg-white:90 selection:@dark:text-black:90 selection:@light:bg-black:90 selection:@light:text-white:90'
    }
});