import { createVar, globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { commonVars } from '../common.css'
import { themeVars, vars } from '../global.css'
import { colorVars } from '../theme.css'

export const tabColor = createVar()

export const size = createVar()
export const height = createVar()

export const defaultTbs = style({
  vars: {
    [tabColor]: themeVars.primaryColor,
    [size]: commonVars.fontSizeBase,
  },
})

export const customTab = styleVariants({
  xsmall: [defaultTbs, { vars: { [size]: '13px', [height]: vars.heightLg } }],
  small: [defaultTbs, { vars: { [size]: commonVars.fontSizeBase, [height]: vars.heightLg } }],
  middle: [defaultTbs, { vars: { [size]: commonVars.fontSizeLg, [height]: vars.heightLg } }],
  large: [defaultTbs, { vars: { [size]: commonVars.fontSizeBase, [height]: '46px' } }],
  xlarge: [defaultTbs, { vars: { [size]: commonVars.fontSizeLg, [height]: vars.heightXl } }],
})
export const blockTab = style({})

export const noPaddingTab = style({})

export const noBorderTab = style({})

globalStyle(
  `${noBorderTab}.ant-tabs-top > .ant-tabs-nav::before,
  ${noBorderTab}.ant-tabs-bottom > .ant-tabs-nav::before,
  ${noBorderTab}.ant-tabs-top > div > .ant-tabs-nav::before,
  ${noBorderTab}.ant-tabs-bottom > div > .ant-tabs-nav::before`,
  {
    border: 'none',
  },
)

globalStyle(
  `${defaultTbs}.ant-tabs.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab, .ant-tabs.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab`,
  {
    marginTop: 0,
    marginLeft: 0,
    background: 'transparent',
    paddingTop: 0,
    paddingBottom: 0,
    border: 'none',
    borderRadius: 0,
    zIndex: 1,
    color: colorVars.lightTextColor,
  },
)

globalStyle(`${defaultTbs}.ant-tabs.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-btn`, {
  margin: '0 auto',
})

globalStyle(`${defaultTbs} .ant-tabs-content-holder`, {
  backgroundColor: 'transparent',
})

globalStyle(`${defaultTbs}.ant-tabs-top > .ant-tabs-nav::before`, {
  borderWidth: '1px',
})

globalStyle(
  `${defaultTbs} .ant-tabs-tab-btn:focus,
  ${defaultTbs} .ant-tabs-tab-remove:focus,
  ${defaultTbs} .ant-tabs-tab-btn:active,
  ${defaultTbs} .ant-tabs-tab-remove:active`,
  {
    color: tabColor,
    // color: darken(0.1, rgba(tabColor, 0.8)),
  },
)

globalStyle(
  `${defaultTbs}.ant-tabs.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active > .ant-tabs-tab-btn,
  ${defaultTbs}.ant-tabs.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active > .ant-tabs-tab-btn`,
  {
    color: tabColor,
    fontWeight: 'bold',
  },
)

globalStyle(`${blockTab}.ant-tabs.ant-tabs-top .ant-tabs-nav-list`, {
  width: '100%',
})

globalStyle(`${defaultTbs}.ant-tabs.ant-tabs-top .ant-tabs-nav-list`, {
  // width: '100%',
  display: 'flex',
})

globalStyle(`${defaultTbs}.ant-tabs.ant-tabs-top .ant-tabs-tab`, {
  flex: '1',
  textAlign: 'center',
  fontSize: size,
})

globalStyle(`${defaultTbs}.ant-tabs.ant-tabs-top > .ant-tabs-nav`, {
  marginBottom: '16px',
  height: height,
})

/** 选中项右侧标识 */
globalStyle(`${defaultTbs}.ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar`, {
  backgroundColor: tabColor,
})

globalStyle(
  `${defaultTbs}.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover,
  ${defaultTbs}.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover`,
  {
    color: themeVars.primaryColor,
    background: 'transparent',
  },
)

// globalStyle('.ant-tabs-tab .ant-tabs-nav-list', {
//   marginLeft: vars.marginSm
// });
/** tab位于顶部时样式 */
globalStyle('.ant-tabs.ant-tabs-top > .ant-tabs-nav', {
  marginBottom: 0,
  height: commonVars.heightLg,
})

globalStyle('.ant-tabs-content-holder', {
  backgroundColor: colorVars.componentBackground,
})

globalStyle('.ant-tabs.ant-tabs-top.ant-tabs-large > .ant-tabs-nav', {
  height: commonVars.heightXl,
})

globalStyle('.ant-tabs.ant-tabs-top.ant-tabs-small > .ant-tabs-nav', {
  height: commonVars.heightBase,
})

globalStyle('.ant-tabs.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-btn', {
  textAlign: 'center',
})

globalStyle(
  `${noPaddingTab}.ant-tabs.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab, .ant-tabs.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab`,
  {
    padding: '0',
  },
)

globalStyle(
  '.ant-tabs.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab, .ant-tabs.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab',
  {
    marginTop: commonVars.marginSm,
    marginLeft: commonVars.marginSm,
    // background: colorVars.itemHoverBg,
    // background: 'transparent',
    background: themeVars.cancelBtnColor,
    padding: `0 ${commonVars.paddingLg}`,
    paddingTop: 0,
    paddingBottom: 0,
    border: `1px solid ${colorVars.commonLightBackground}`,
    borderBottomWidth: 0,
    borderRadius: `${commonVars.borderRadiusBase} ${commonVars.borderRadiusBase} 0 0`,
    zIndex: 1,
    color: colorVars.lightTextColor,
  },
)

globalStyle(
  '.ant-tabs.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active',
  {
    background: colorVars.white,
  },
)

globalStyle('.ant-tabs-top.ant-tabs-card>.ant-tabs-nav', {
  background: colorVars.commonLightBackground,
})

globalStyle('.ant-tabs-top.ant-tabs-card>.ant-tabs-nav::before', {
  borderBottomWidth: 0,
})

globalStyle(
  `.ant-tabs-top.ant-tabs-card>.ant-tabs-nav .ant-tabs-tab,
   .ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab`,
  {
    borderWidth: 0,
    background: 'transparent',
  },
)

globalStyle(
  '.ant-tabs-top.ant-tabs-card>.ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover, .ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover',
  {
    background: colorVars.tabsHoverBg,
  },
)

globalStyle(
  '.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover, .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover',
  {
    background: colorVars.tabsHoverBg,
  },
)

globalStyle(
  `.ant-tabs-top.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
   .ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active`,
  {
    background: colorVars.white,
    // fontWeight: commonVars.fontWeightBold,
  },
)

globalStyle(
  `.ant-tabs.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active > .ant-tabs-tab-btn,
  .ant-tabs.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active > .ant-tabs-tab-btn`,
  {
    color: colorVars.primaryColor,
  },
)

// globalStyle('.ant-tabs-top.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active>.ant-tabs-tab-btn, .ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active>.ant-tabs-tab-btn', {
//   background: themeVars.white,
// });

/** 左侧tab栏 */
globalStyle('.ant-tabs-left>.ant-tabs-nav', {
  background: colorVars.commonLightBackground,
  borderRight: commonVars.border,
})

globalStyle('.ant-tabs.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab', {
  padding: `0 ${commonVars.paddingLg}`,
  marginTop: 12,
  marginBottom: commonVars.marginXss,
})

globalStyle('.ant-tabs.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab', {
  marginTop: '4px',
})

globalStyle('.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab-btn', {
  color: colorVars.textColor,
  cursor: 'pointer',
  padding: `${commonVars.paddingMd} ${commonVars.paddingLg}`,
  textAlign: 'left',
  lineHeight: 1,
  minWidth: 100,
})

globalStyle('.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab-btn:hover', {
  backgroundColor: colorVars.grayHoverBg,
  borderRadius: commonVars.borderRadiusBase,
})

/** 选中项右侧标识 */
globalStyle('.ant-tabs-left>.ant-tabs-nav .ant-tabs-ink-bar', {
  backgroundColor: 'transparent',
})

globalStyle('.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn', {
  background: colorVars.menuCheckedColor,
  borderRadius: commonVars.borderRadiusBase,
  color: colorVars.menuCheckedTextColor,
})

globalStyle(
  '.ant-tabs.ant-tabs-left > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane, .ant-tabs.ant-tabs-left > div > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane',
  {
    paddingLeft: 0,
  },
)

export const tabEqually = style({})

globalStyle(`.ant-tabs.ant-tabs-top.${tabEqually}>.ant-tabs-nav .ant-tabs-nav-list`, {
  width: '100%',
  overflow: 'hidden',
})

globalStyle(`.ant-tabs.ant-tabs-top.${tabEqually}>.ant-tabs-nav .ant-tabs-tab.ant-tabs-tab`, {
  flex: '1 1 auto',
  justifyContent: 'center',
  marginLeft: 0,
  marginTop: 0,
  borderRadius: 0,
})

// 不显示更多按钮
globalStyle(`.ant-tabs.ant-tabs-top.${tabEqually}>.ant-tabs-nav>.ant-tabs-nav-operations`, {
  display: 'none',
})
