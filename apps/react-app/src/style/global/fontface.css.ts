import { globalFontFace, style } from '@vanilla-extract/css';
import { STATIC_URL } from 'src/style/static-url';

export const dingding = 'GlobalDingding';

globalFontFace(dingding, {
  src: `url(${STATIC_URL}/fonts/dingding.woff) format("woff"),url(${STATIC_URL}/fonts/dingding.woff2) format("woff2")`,
  fontDisplay: 'swap',
});
