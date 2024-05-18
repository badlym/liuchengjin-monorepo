import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },

  presets: [
    presetUno({
      attributifyPseudo: true,
      prefix: 'zgg-',
    }),
    presetAttributify(),
    // @see https://unocss.dev/presets/icons#autoinstall
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
      scale: 1.2,
      // autoInstall: true,
      prefix: 'icon-',
      collections: {
        icons: FileSystemIconLoader(`src/assets/icons`, svg => svg),
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        script: 'Homemade Apple',
      },
    }),
  ],
});
