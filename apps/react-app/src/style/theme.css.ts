import { createThemeContract } from '@vanilla-extract/css';
import { MapLeafNodes } from '@vanilla-extract/private';
import { colorConfig } from './theme/default.css';
import { colorConfig as blueConfig } from './theme/blue.css';

export const colorVars = createThemeContract({
  /** [antd] 当前主题 */
  theme: '',
  white: '',
  grayColor: '',
  grayColor2: '',
  infoBgColor: '',
  /** [antd] Base background color for most components */
  componentBackground: '',
  /** [antd] 主题色 */
  primaryColor: '',
  /** [antd] 鼠标悬停时颜色 */
  primaryColorHover: '',
  primaryColor5: '',
  /** [antd] 外边框颜色 */
  primaryColorOutline: '',
  /** [antd] 字体颜色 */
  textColor: '',
  /** [antd] 二级文字颜色 */
  textColorSecondary: '',
  /** [antd] 布局背景 */
  layoutBodyBackground: '',
  layoutSiderBackground: '',
  /** [antd] 链接颜色 */
  linkColor: '',
  linkHoverColor: '',
  linkActiveColor: '',
  // linkHoverDecoration: '',
  // linkFocusDecoration: '',
  /** 输入框悬停时边框颜色 */
  inputHoverBorderColor: '',

  /** [antd] 不可用状态背景颜色 */
  disabledBg: '',
  /** [antd] 不可用状态颜色*/
  disabledColor: '',

  /** [antd] 阴影 */
  boxShadowBase: '',

  /** [antd] tooltip的文本颜色 */
  tooltipColor: '',
  /** [antd] tooltip的背景颜色 */
  tooltipBg: '',
  /** [antd] 成功的文本颜色 */
  successColor: '',
  /** [antd] 成功的背景颜色 */
  successColorDeprecatedBg: '',
  /** [antd] 提示的文本颜色 */
  infoColor: '',
  /** [antd] 错误反馈。应用场景：错误反馈、错误提醒、删除 */
  errorColor: '',
  /** [antd] 警示反馈。应用场景：信息警示、警告、提示 */
  warningColor: '',
  /** [antd] background of header and selected item */
  backgroundColorLight: '',
  /** [antd] 边框颜色 */
  borderColorBase: '',
  /** [antd] 分隔线颜色 */
  borderColorSplit: '',
  /** 菜单被选中时的文本颜色 */
  menuCheckedColor: '',
  menuCheckedTextColor: '',
  /** [antd] 输入框背景颜色 */
  inputBg: '',
  /** [antd] 查询框 placeholder 字体颜色 */
  inputPlaceholderColor: '',
  /** 查询框 placeholder focus 时， 字体颜色 */
  placeholderFocus: '',
  /** [antd] body的背景颜色 */
  bodyBackground: '',
  /** [antd] tag颜色 */
  tagDefaultColor: '',
  /** icon+text按钮的颜色 */
  btnTextColor: '',
  /** icon+text按钮的鼠标hover时背景色 */
  btnTextHoverBg: '',

  /** [antd] 列表项鼠标hover时背景色 */
  itemHoverBg: '',

  alertInfoBorderColor: '',
  alertInfoBgColor: '',

  // 表格
  /** [antd] table背景 */
  tableBg: '',
  /** [antd] table表头背景颜色 */
  tableHeaderBg: '',
  /** [antd] table行分隔线颜色 */
  tableBorderColor: '',
  /** [antd] table选中行背景 */
  tableSelectedRowBg: '',
  /** [antd] table选中行背景 */
  tableSelectedRowHoverBg: '',
  /** [antd] table表头分隔线颜色 */
  tableHeaderCellSplitColor: '',
  /** [antd] table行鼠标悬浮时背景 */
  tableRowHoverBg: '',

  /** [antd] 按钮的shadow */
  btnShadow: '',
  btnPrimaryShadow: '',
  btnTextShadow: '',
  /** [antd] 按钮disable态背景 */
  btnDisableBg: '',
  /** [antd] 按钮disable态文字颜色 */
  btnDisableColor: '',
  /** [antd] 按钮disable态边框 */
  // btnDisableBorder: '',

  btnPrimaryColor: '',
  /** 强调按钮不可用状态下的背景颜色 */
  btnPrimaryDisableBg: '',
  /** 强调按钮鼠标hover和按下时背景颜色 */
  btnPrimaryHoverBg: '',

  /** 默认按钮鼠标hover时的背景 */
  btnDefaultHoverBg: '',
  /** 灰色按钮文本颜色 */
  btnGrayColor: '',
  /** 灰色按钮背景色 */
  btnGrayBg: '',
  /** 灰色按钮鼠标hover时背景 */
  btnGrayHoverBg: '',

  /** 白色按钮边框颜色 */
  btnWhiteBorder: '',
  btnWhiteDisabledBorder: '',

  /** 红色按钮hover时背景 */
  btnDangerHoverBg: '',
  /** 红色按钮disable时背景 */
  btnDangerDisableBg: '',

  /** [antd] select组件选中行背景 */
  selectItemSelectedBg: '',
  /** [antd] cascader组件选中行背景 */
  cascaderItemSelectedBg: '',
  /** [antd] tree组件鼠标悬浮时背景 */
  treeNodeHoverBg: '',

  /** [antd] 分隔线颜色 */
  dividerColor: '',

  /** [antd] radio按钮颜色 */
  radioButtonColor: '',
  /** [antd] radio的颜色 */
  // radioDotColor: '',

  /** [antd] 复选框颜色 */
  // checkboxColor: '',

  /** -------- 自定义变量 -------- */
  /** 灰色背景容器内的元素的hover背景色 */
  grayHoverBg: '',
  /** 深灰背景容器内的元素的hover背景色 */
  darkGrayHoverBg: '',
  /** 用于深色背景容器（如：左侧导航选中项）内的元素的hover背景色 */
  darkHoverBg: '',
  lightTextColor: '',
  // whiteColor: '',
  noteColor: '',
  normalColor: '',
  /** 图标颜色 */
  iconButtonColor: '',
  /** 图标灰色颜色 */
  iconGrayColor: '',
  /** 图标灰白色 */
  iconGreyColor: '',
  /** 图标hover时背景 */
  iconHoverBg: '',
  collapsibleBackgroundColor: '',
  // 常规背景
  // commonBackground: '',
  // 常规背景 浅
  commonLightBackground: '',

  // header
  /** header区背景颜色 */
  headerBackground: '',
  /** header区文字颜色 */
  headerTextColor: '',
  /** header分隔线的颜色 */
  headerSplitColor: '',
  /** header用户名背景色 */
  headerUsernameBackground: '',
  /** header退出按钮颜色 */
  headerExitColor: '',

  // 提示图标颜色
  tipIconColor: '',

  // menu样式开始

  menuItemActiveBg: '',
  // 描述
  descriptionsBg: '',

  scrollbarThumbColor: '',
  scrollbarThumbHoverColor: '',

  /** tabs 样式 开始*/
  tabsCardHeadBackground: '',
  tabsHighlightColor: '',
  tabsHoverColor: '',
  tabsActiveColor: '',
  tabsHoverBg: '',
  tabsInkBarColor: '',
  tabsHorizontalPadding: '',
  tabsCardHorizontalPadding: '',

  /** tabs 样式 结束*/
  greyBackgroundColor: '',
  greyFontColor: '',
  /** tag checkable 颜色 */
  tagCheckableBackColor: '',

  /** 警告提示框背景色 */
  messageWarningBgColor: '',
  /** 成功提示框背景色 */
  messageSuccessBgColor: '',
  /** 错误提示框背景色 */
  messageErrorBgColor: '',
  /** 一般提示框背景色 */
  messageInfoBgColor: '',

  /** 警告提示框背景色 */
  alertWarningBgColor: '',
  alertWarningBorderColor: '',
  /** 成功提示框背景色 */
  alertSuccessBgColor: '',
  /** 错误提示框背景色 */
  alertErrorBgColor: '',

  /** 用户自定义高亮颜色 */
  highlightColor1: '',
  highlightColor2: '',
  highlightColor3: '',
  highlightColor4: '',
  highlightColor5: '',
  highlightColor6: '',
  highlightColor7: '',
  highlightColor8: '',
  highlightColor9: '',
  highlightColor10: '',
  /** 检索默认高亮颜色 */
  searchHighlightColor1: '',
  searchHighlightColor2: '',
  searchHighlightColor3: '',
  searchHighlightColor4: '',
  searchHighlightColor5: '',
  searchHighlightColor6: '',

  checkServiceLabelColor: '',
  checkServiceDescColor: '',
  checkServiceMoneyBg: '',
  checkExplainHoverColor: '',
  checkTipsColor: '',
  checkResultCardHeaderBg: '',
  checkCompareOriginalTextBg: '',
  checkCompareResultColor: '',

  /** 形式审查结果行命中时背景 */
  checkFormalErrorBg: '',

  /** pdf预览页头部背景 */
  pdfViewerHeaderBg: '',
  /** pdf预览页头部按钮hover时背景 */
  pdfViewerHeaderBtnHoverBg: '',
  /** 年费警告 */
  feeWarningFill: '',
  feeWarningFontColor: '',

  /** 分析页面底部按钮字体颜色 */
  analyseBottomBtnColor: '',

  /** 用户管理 */
  accountHeadIcon: '',
  accountHeadIconBg: '',

  /** header区模块名颜色 */
  headerModuleNameColor: '',
  /** header区鼠标hover时边框颜色 */
  headerBottomBorderColor: '',
  /** header区鼠标hover时logo文本颜色 */
  headerLogoTextHoverColor: '',
  /** header区home页分隔线颜色 */
  headerHomeSplitLineColor: '',

  /** ===== ui4.0规范 ====== */

  /** ICONFONT */

  /** 提示图标颜色 */
  infoIconColor: '',
  /** 提示图标hover颜色 */
  infoIconHoverColor: '',
  /** 提示文本的颜色 */
  descriptionTextColor: '',
  /** 箭头图标颜色 */
  arrowIconColor: '',
  /** 关闭图标颜色 */
  closeIconColor: '',
  /** 关闭图标hover颜色 */
  closeIconHoverColor: '',
  /** 实底风格关闭图标颜色 */
  closeIconFilledColor: '',
  /** 实底风格关闭图标hover颜色 */
  closeIconFilledHoverColor: '',
  /** 取消按钮颜色 */
  cancelBtnColor: '',
  /** 取消按钮指向 */
  cancelBtnHoverColor: '',
  /** 列表鼠标悬停颜色 */
  itemHoverBgColor: '',
  /** 背景色2 */
  lightGreyBgColor: '',
  /** 白色透明24 */
  opcity24White: '',
  /** 冰白色 灰色按钮disabled */
  iceWhite: '',
  /** 检索关键词高亮颜色 */
  highlightKeywordColor: '',
});

export type themeVarsType = MapLeafNodes<typeof colorVars, string>;

// 为了能在webpack中使用颜色主题配置项来覆盖antd的less变量，把颜色配置单独提到一个文件中从而能提供给webpack使用
/** 主题主配置(默认配置) */
// export const defaultThemeClass = createTheme(themeVars, defaultConfig);
export {
  colorConfig,
  // darkConfig,
  blueConfig,
};

/** 深色版主题 */
// export const darkThemeClass = createTheme(themeVars, darkConfig);
