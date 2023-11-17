/* eslint-disable */ // 禁用所有规则
interface PluginOptions {
  unitToConvert: string
  viewportWidth: number
  unitPrecision: number
  viewportUnit: string
  fontViewportUnit: string
  minPixelValue: number
}

function toFixed(number: number, precision: number): number {
  const multiplier = 10 ** (precision + 1)
  const wholeNumber = Math.floor(number * multiplier)
  return (Math.round(wholeNumber / 10) * 10) / multiplier
}

function createPxReplace(
  viewportSize: number,
  minPixelValue: number,
  unitPrecision: number,
  viewportUnit: string,
): (matched: string, value: string) => string {
  return function (_matched: string, value: string): string {
    if (!value) return ''
    const pixels = parseFloat(value)
    if (pixels <= minPixelValue) return ''
    return `${toFixed((pixels / viewportSize) * 100, unitPrecision)}${viewportUnit}`
  }
}

const templateReg = /((?:<scrip|<template>)([\s\S]+)(?:<\/script>|<\/template>))/gi
// const pxGlobalReg = /(?<=[^\-\d])(\d+)px/gi
const pxGlobalReg = /(?<=[^\-\d\[])(\d+)px/gi

const pluginGenerator = (
  customOptions: Partial<PluginOptions> = {},
): { name: string; transform: (code: string, id: string) => Promise<{ code: string }> } => {
  const options: PluginOptions = {
    unitToConvert: 'px',
    viewportWidth: 1920,
    unitPrecision: 5,
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    minPixelValue: 1,
    ...customOptions,
  }

  return {
    name: 'style-postcss-px-to-viewport',
    // eslint-disable-next-line @typescript-eslint/require-await
    async transform(code: string, id: string): Promise<{ code: string }> {
      let _source = ''
      if (/(.vue|.tsx|.jsx)$/.test(id)) {
        if (templateReg.test(code)) {
          _source = code.match(templateReg)?.[0] ?? ''
        } else {
          _source = code
        }
        if (pxGlobalReg.test(_source)) {
          const $_source = _source.replace(
            pxGlobalReg,
            createPxReplace(
              options.viewportWidth,
              options.minPixelValue,
              options.unitPrecision,
              options.viewportUnit,
            ),
          )

          code = code.replace(_source, $_source)
        }
      }
      return { code }
    },
  }
}

export default pluginGenerator
