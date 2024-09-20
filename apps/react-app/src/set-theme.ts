import { setElementVars } from '@vanilla-extract/dynamic'

import { blueConfig, colorConfig, themeVars } from './style/global.css'

const themes = {
  default: colorConfig,
  blue: blueConfig,
  // dark: darkConfig,
}

export const setTheme = (theme: keyof typeof themes) => {
  debugger
  console.log(colorConfig)

  const el: HTMLElement = document.querySelector(':root')!
  setElementVars(el, themeVars, themes[theme])
}

export const getThemeColor = (theme: keyof typeof themes) => {
  return themes[theme]
}
