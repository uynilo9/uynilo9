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
    ]
});