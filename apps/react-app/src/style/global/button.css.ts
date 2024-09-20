import { globalStyle, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

import { commonVars } from '../common.css'
import { themeVars, vars } from '../global.css'
import { colorVars } from '../theme.css'

// 设置btn的尺寸
/** 正常尺寸 */
globalStyle('.ant-btn:not(.ant-btn-icon-only)', {
  padding: '0 16px',
  minWidth: 82,
  height: commonVars.heightBase,
  // lineHeight: calc.subtract(commonVars.heightBase, '2px'),
  fontSize: commonVars.fontSizeBase,
})

globalStyle('.ant-btn>.anticon', {
  fontSize: commonVars.fontSizeLg,
  verticalAlign: '-0.175em',
})

globalStyle('.ant-btn.ant-btn-primary:focus', {
  background: colorVars.primaryColor,
  borderColor: colorVars.primaryColor,
})
/** 强调按钮 */
globalStyle('.ant-btn.ant-btn-primary:hover,.ant-btn.ant-btn-primary:active', {
  background: colorVars.btnPrimaryHoverBg,
  borderColor: colorVars.btnPrimaryHoverBg,
})

globalStyle('.ant-btn.ant-btn-primary:disabled, .ant-btn.ant-btn-primary:disabled:hover', {
  background: colorVars.btnPrimaryDisableBg,
  borderColor: colorVars.btnPrimaryDisableBg,
  color: colorVars.btnPrimaryColor,
})

globalStyle('.ant-btn-default:not(.ant-btn-dangerous):not(:disabled):focus', {
  color: colorVars.textColor,
  borderColor: colorVars.borderColorBase,
})

globalStyle('.ant-btn-default:not(.ant-btn-dangerous):not(:disabled):hover', {
  color: colorVars.primaryColor,
  borderColor: colorVars.primaryColor,
  backgroundColor: colorVars.btnDefaultHoverBg,
})

/** 红色按钮样式 */
globalStyle('.ant-btn.ant-btn-primary.ant-btn-dangerous:focus', {
  background: colorVars.errorColor,
  borderColor: colorVars.errorColor,
  color: colorVars.btnPrimaryColor,
})
globalStyle('.ant-btn.ant-btn-primary.ant-btn-dangerous:hover', {
  background: colorVars.btnDangerHoverBg,
  borderColor: colorVars.btnDangerHoverBg,
  color: colorVars.btnPrimaryColor,
})

globalStyle(
  '.ant-btn.ant-btn-primary.ant-btn-dangerous:disabled, .ant-btn.ant-btn-primary.ant-btn-dangerous:disabled:hover',
  {
    background: colorVars.btnDangerDisableBg,
    borderColor: colorVars.btnDangerDisableBg,
    color: colorVars.btnPrimaryColor,
  },
)

/** <Button className='zgg_btn_gray' />*/
globalStyle('.zgg_btn_gray.zgg_btn_gray', {
  background: colorVars.btnGrayBg,
  color: colorVars.btnGrayColor,
  borderColor: colorVars.btnGrayBg,
})
globalStyle('.zgg_btn_gray.zgg_btn_gray.zgg_btn_gray.zgg_btn_gray:not(:disabled):hover', {
  background: colorVars.btnGrayHoverBg,
  color: colorVars.btnGrayColor,
  borderColor: colorVars.btnGrayHoverBg,
})
globalStyle('.zgg_btn_gray.zgg_btn_gray:disabled', {
  background: colorVars.btnDisableBg,
  color: colorVars.btnDisableColor,
  // borderColor: colorVars.btnDisableBg,
})

export const btnGray = style({
  selectors: {
    '&&,&&&&:focus': {
      background: colorVars.btnGrayBg,
      color: colorVars.btnGrayColor,
      borderColor: colorVars.btnGrayBg,
    },
    '&&&&:hover': {
      background: colorVars.btnGrayHoverBg,
      color: colorVars.btnGrayColor,
      borderColor: colorVars.btnGrayBg,
    },
    '&&&&:disabled': {
      background: colorVars.iceWhite,
      color: colorVars.grayColor,
      borderColor: colorVars.btnGrayBg,
    },
  },
})

export const btnInfoGray = style({
  selectors: {
    '&&,&&&&:focus': {
      background: colorVars.btnGrayBg,
      color: colorVars.infoColor,
      borderColor: colorVars.btnGrayBg,
    },
    '&&&&:hover': {
      background: colorVars.btnGrayHoverBg,
      color: colorVars.infoColor,
      borderColor: colorVars.btnGrayHoverBg,
    },
    '&&&&:disabled': {
      background: colorVars.iceWhite,
      color: colorVars.grayColor,
      borderColor: colorVars.iceWhite,
    },
  },
})

export const btnInfo = style({
  selectors: {
    '&&,&&&&:focus': {
      background: colorVars.infoColor,
      color: colorVars.white,
      borderColor: colorVars.infoColor,
    },
    '&&&&:hover': {
      background: colorVars.infoColor,
      color: colorVars.white,
      borderColor: colorVars.infoColor,
    },
    '&&&&:disabled': {
      background: '#94BBFF',
      color: colorVars.white,
      borderColor: '#94BBFF',
    },
  },
})

export const infoTextBtn = style({
  selectors: {
    '.ant-btn&&': {
      color: colorVars.textColor,
      borderWidth: 0,
      minWidth: '68px',
    },
    '&&&&:focus': {
      color: colorVars.textColor,
      borderWidth: 0,
    },
    '&&&&:hover': {
      color: colorVars.infoColor,
      background: '#E5EEFF',
      borderWidth: 0,
    },
    '&&&&:disabled': {
      color: colorVars.grayColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
  },
})

export const errorTextBtn = style({
  selectors: {
    '.ant-btn&&': {
      color: colorVars.errorColor,
    },
    '&&&&:focus': {
      color: colorVars.errorColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      color: colorVars.errorColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&&&:disabled': {
      color: colorVars.grayColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
  },
})

export const btnWhite = style({
  selectors: {
    '&&': {
      background: colorVars.white,
      borderColor: colorVars.btnGrayBg,
    },
    '&&,&&&&:focus': {
      background: colorVars.white,
      color: colorVars.btnGrayColor,
      borderColor: colorVars.btnGrayBg,
    },
    '&&&&:hover': {
      background: colorVars.btnGrayBg,
      color: colorVars.btnGrayColor,
      borderColor: colorVars.btnGrayBg,
    },
    '&&&&:disabled': {
      background: colorVars.btnDisableBg,
      color: colorVars.disabledColor,
      borderColor: colorVars.btnWhiteDisabledBorder,
    },
  },
})

export const ghostBtn = style({
  selectors: {
    '.ant-btn.ant-btn-primary&': {
      background: 'transparent',
      color: themeVars.primaryColor,
      borderColor: themeVars.primaryColor,
      position: 'relative',
    },
    '&&': {
      background: colorVars.primaryColor,
      borderColor: colorVars.white,
    },
    '&&&&:hover': {
      color: colorVars.primaryColor,
      borderColor: colorVars.primaryColor,
      background: colorVars.btnDefaultHoverBg,
    },
    '&&&&:disabled': {
      background: colorVars.btnDisableBg,
      color: colorVars.btnDisableColor,
      borderColor: colorVars.btnDisableBg,
    },
  },
})

export const ghostPrimaryBtn = style({
  selectors: {
    '.ant-btn.ant-btn-primary&': {
      background: 'transparent',
      color: themeVars.primaryColor,
      borderColor: themeVars.primaryColor,
    },
    '&&': {
      background: colorVars.primaryColor,
      borderColor: colorVars.white,
    },
    '&&,&&&&:focus': {
      background: colorVars.primaryColor,
      color: colorVars.white,
      borderColor: colorVars.primaryColor,
    },
    '&&&&:hover': {
      background: colorVars.primaryColor,
      color: colorVars.white,
      borderColor: colorVars.primaryColor,
    },
    '&&&&:disabled': {
      background: colorVars.btnDisableBg,
      color: colorVars.white,
      borderColor: colorVars.btnDisableBg,
    },
  },
})

export const ghostInfoBtn = style({
  selectors: {
    '.ant-btn.ant-btn-primary&': {
      background: themeVars.infoBgColor,
      color: themeVars.linkColor,
      borderColor: 'transparent',
    },
    '&&': {
      background: themeVars.infoBgColor,
      color: themeVars.linkColor,
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      background: themeVars.infoBgColor,
      color: themeVars.linkColor,
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      background: themeVars.infoBgColor,
      color: themeVars.linkColor,
      borderColor: 'transparent',
      textDecoration: 'underline',
      opacity: 0.8,
    },
    '&&&&:disabled': {
      background: colorVars.btnDisableBg,
      color: colorVars.white,
      borderColor: colorVars.btnDisableBg,
    },
  },
})

export const warnBtn = style({
  selectors: {
    '.ant-btn.ant-btn-primary&': {
      background: themeVars.warningColor,
      color: themeVars.white,
      borderColor: 'transparent',
    },
    '&&': {
      background: themeVars.warningColor,
      color: themeVars.white,
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      background: themeVars.warningColor,
      color: themeVars.white,
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      background: themeVars.warningColor,
      color: themeVars.white,
      borderColor: 'transparent',
      textDecoration: 'underline',
    },
    '&&&&:disabled': {
      background: colorVars.btnDisableBg,
      color: colorVars.white,
      borderColor: colorVars.btnDisableBg,
    },
  },
})

export const whiteBtn = style({
  selectors: {
    '&&&': {
      background: themeVars.white,
      color: themeVars.iconButtonColor,
      borderRadius: vars.borderRadiusBase,
      border: 'none',
    },
    '&&,&&&&:focus': {
      background: '#E5EEFF',
      color: themeVars.infoColor,
      borderRadius: vars.borderRadiusBase,
      border: 'none',
    },
    '&&&&:hover': {
      background: '#E5EEFF',
      color: themeVars.infoColor,
      borderRadius: vars.borderRadiusBase,
      border: 'none',
    },
    '&&&&:disabled': {
      background: themeVars.btnDisableBg,
      color: themeVars.white,
      borderRadius: vars.borderRadiusBase,
      border: 'none',
    },
  },
})

export const BlueGradientBtn = style({
  borderRadius: '6px',
  selectors: {
    '&&&.ant-btn-round': {
      borderRadius: '32px',
    },
    '&&': {
      backgroundOrigin: 'border-box',
      backgroundImage: `linear-gradient(90deg, #80AAFF, #4077E5)`,
      boxShadow: `0px 5px 8px 0px rgba(0,51,153,0.14)`,
      color: themeVars.white,
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      backgroundOrigin: 'border-box',
      backgroundImage: `linear-gradient(90deg, #80AAFF, #4077E5)`,
      color: themeVars.white,
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      backgroundOrigin: 'border-box',
      backgroundImage: `linear-gradient(90deg, #80AAFF, #4077E5)`,
      color: themeVars.white,
      borderColor: 'transparent',
      opacity: 0.8,
    },
    '&&&&:disabled': {
      backgroundOrigin: 'border-box',
      backgroundImage: themeVars.btnDisableBg,
      color: themeVars.white,
      borderColor: themeVars.btnDisableBg,
    },
  },
})

export const orangeGradientBtn = style({
  selectors: {
    '&&': {
      color: themeVars.white,
      background: 'linear-gradient(90deg, #FAE1C8, #D1A77D)',
      border: 'none',
    },
    '&&,&&&&:focus': {
      color: themeVars.white,
      background: 'linear-gradient(90deg, #FAE1C8, #D1A77D)',
      border: 'none',
    },
    '&&&&:hover': {
      color: themeVars.white,
      background: 'linear-gradient(90deg, #FAE1C8, #D1A77D)',
      border: 'none',
      opacity: 0.8,
    },
    '&&&&:disabled': {
      color: themeVars.white,
      background: themeVars.btnDisableBg,
      border: themeVars.btnDisableBg,
    },
  },
})

export const OrangeGradientBtn = style({
  selectors: {
    '&&': {
      backgroundOrigin: 'border-box',
      backgroundImage: `linear-gradient(90deg, #F5B87A, #F58718)`,
      boxShadow: `0px 5px 8px 0px rgba(0,51,153,0.14)`,
      color: themeVars.white,
      borderRadius: '6px',
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      backgroundOrigin: 'border-box',
      backgroundImage: `linear-gradient(90deg, #F5B87A, #F58718)`,
      color: themeVars.white,
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      backgroundOrigin: 'border-box',
      backgroundImage: `linear-gradient(90deg, #F5B87A, #F58718)`,
      color: themeVars.white,
      borderColor: 'transparent',
      opacity: 0.8,
    },
    '&&&&:disabled': {
      backgroundOrigin: 'border-box',
      backgroundImage: themeVars.btnDisableBg,
      color: themeVars.white,
      borderColor: themeVars.btnDisableBg,
    },
  },
})

export const textBtn = style({
  selectors: {
    '&&&': {
      background: 'transparent',
      color: 'inherit',
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      background: 'transparent',
      color: 'inherit',
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      background: 'transparent',
      color: themeVars.primaryColor,
      borderColor: 'transparent',
    },
  },
})

export const infoBtn = style({
  selectors: {
    '&&&': {
      color: themeVars.infoColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      color: themeVars.infoColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      color: themeVars.infoColor,
      background: '#DEE0E3',
      borderColor: 'transparent',
    },
    '&&&.ant-btn-background-ghost': {
      color: themeVars.infoColor,
      background: 'transparent',
      borderColor: themeVars.infoColor,
    },
    '&&&.ant-btn-background-ghost:focus': {
      color: themeVars.infoColor,
      background: 'transparent',
      borderColor: themeVars.infoColor,
    },
    '&&&.ant-btn-background-ghost:hover': {
      color: themeVars.infoColor,
      background: 'transparent',
      borderColor: themeVars.infoColor,
      opacity: 0.8,
    },
  },
})

export const garyBtn = style({
  selectors: {
    '&&&': {
      color: themeVars.textColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      color: themeVars.textColor,
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      color: themeVars.textColor,
      background: '#DEE0E3',
      borderColor: 'transparent',
    },
  },
})

export const lightBlueLink = style({
  selectors: {
    '&&&': {
      color: '#2968E6',
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&,&&&&:focus': {
      color: '#2968E6',
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&&&:hover': {
      color: '#2968E6',
      background: 'transparent',
      borderColor: 'transparent',
    },
    '&&&&:disabled': {
      color: '#99BBFF',
      background: 'transparent',
      borderColor: 'transparent',
    },
  },
})

export const defaultIcon = style({
  selectors: {
    '&&&': {
      color: themeVars.iconButtonColor,
      background: 'transparent',
      border: 'none',
    },
    '&&&&:hover': {
      color: themeVars.primaryColor,
      background: themeVars.btnDefaultHoverBg,
      border: 'none',
    },
    '&&&&:disabled': {
      color: themeVars.disabledColor,
      background: themeVars.disabledBg,
      border: 'none',
    },
  },
})

export const blueReliefBtn = style({
  selectors: {
    '&&&&': {
      color: themeVars.white,
      textAlign: 'center',
      borderRadius: '8px',
      background: 'linear-gradient(90deg, #6699FF, #2968E5)',
      boxShadow: `inset 2px 2px 8px rgba(255, 255, 255, 0.7),
    0px 0px 8px rgba(0, 0, 0, 0.05),
    0px 1px 20px rgba(255, 255, 255, 1),
    inset -2px -2px 8px rgba(0, 0, 0, 0.3)`,
      border: 'none',
    },
    '&&&&:hover': {
      opacity: 0.8,
    },
    '&&&&:disabled': {
      color: themeVars.disabledColor,
      background: themeVars.disabledBg,
      border: 'none',
    },
  },
})

// globalStyle(`${btnWrite}:not(disabled) > .anticon`, {
//   color: colorVars.iconButtonColor,
// });

/** <Button type="text"> */
globalStyle('.ant-btn.ant-btn-text', {
  padding: `0 ${commonVars.paddingSm}`,
  height: commonVars.heightBase,
  // lineHeight: commonVars.heightBase,
  lineHeight: '1.5715',
  color: colorVars.btnTextColor,
  minWidth: 'auto',
})

globalStyle('.ant-btn.ant-btn-text[disabled],.ant-btn.ant-btn-text[disabled]:hover', {
  color: colorVars.disabledColor,
  background: colorVars.disabledBg,
})

globalStyle('.ant-btn.ant-btn-text:focus', {
  backgroundColor: 'inherit',
})
/** 有popover弹窗打开时，继续显示hover时的背景 */
globalStyle('.ant-btn.ant-btn-text.ant-popover-open', {
  backgroundColor: colorVars.btnTextHoverBg,
})

globalStyle('.ant-btn.ant-btn-text:hover', {
  backgroundColor: colorVars.btnTextHoverBg,
})

// globalStyle('.ant-btn.ant-btn-text > .anticon, .ant-btn.ant-btn-default > .anticon', {
//   color: themeVars.iconButtonColor,
// });

/** <Button type="link"> */
globalStyle('.ant-btn.ant-btn-link', {
  padding: 0,
  height: 'auto',
  minWidth: 'auto',
  lineHeight: 'inherit',
  textAlign: 'inherit',
  userSelect: 'auto',
  touchAction: 'inherit',
  color: themeVars.linkColor,
})

globalStyle('.ant-btn.ant-btn-link:hover', {
  color: colorVars.linkColor,
  textDecoration: 'underline',
})

globalStyle('.ant-btn.ant-btn-link:focus', {
  color: colorVars.linkColor,
})

globalStyle('.ant-btn.ant-btn-link:hover>span', {
  textDecoration: 'underline',
})

globalStyle('.ant-btn.ant-btn-link[disabled],.ant-btn.ant-btn-link[disabled]:hover', {
  color: colorVars.disabledColor,
})

/** <Button size="small"> */
globalStyle('.ant-btn.ant-btn-sm', {
  padding: '0 8px',
  minWidth: 48,
  height: commonVars.heightSm,
  // lineHeight: commonVars.heightSm,
  fontSize: commonVars.fontSizeSm,
})

/** <Button size="large"> */
globalStyle('.ant-btn.ant-btn-lg', {
  height: commonVars.heightLg,
  // lineHeight: commonVars.heightLg,
  padding: '0 16px',
  fontSize: commonVars.fontSizeBase,
  minWidth: 100,
})

/** ant-btn-default disabled */

// globalStyle(`.ant-btn.ant-btn-default:disabled,.ant-btn.ant-btn-default[disabled]:hover`, {
//   backgroundColor: '#eef0f4',
//   color: '#C8C9CC',
//   borderColor: '#eef0f4',
// });

globalStyle('.ant-switch.ant-switch:not(.ant-switch-checked)', {
  backgroundColor: colorVars.grayColor,
})
