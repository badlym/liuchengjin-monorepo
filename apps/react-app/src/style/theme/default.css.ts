// import { rgba } from 'polished';
import type { themeVarsType } from '../theme.css';

const warningBgColor = '#faede1';

export const customAntdBase = {
  theme: 'zgg',
  primaryColor: '#14cc83',
};

export const base = {
  selectItemSelectedBg: 'transparent',
  itemHoverBg: '#ebedf0',
  iconHoverBg: '#ebedf0',
  primaryColor5: '14cc83',
  /** 主色 */
  // primaryColor: '#14cc83',
  // primaryColor: 'var(--ant-primary-color)',
  /** 正文颜色 */
  textColor: '#303133',
  /** 提示信息文字 */
  lightTextColor: '#606266',
  white: '#ffffff',
  /** Base background color for most components */
  componentBackground: '#ffffff',
  /** 常规背景，常用于页面或组件的header区 */
  commonLightBackground: '#F0F2F5',
  /** 不可用状态背景颜色 */
  disabledBg: '#F0F2F5',
  disabledColor: '#C0C4CC',
  borderColorSplit: '#E1E2E6',
  grayColor: '#D2D3D6',
  grayColor2: '#909399',
  /** 链接颜色 */
  linkColor: '#4077e5',
};

const customBase = {
  grayHoverBg: '#DEE0E3',
  darkGrayHoverBg: '#D2D3D6',
  /** 用于深色背景上的交互背景颜色 */
  darkHoverBg: 'rgba(#EBEDF0, 0.2)',
  infoBgColor: '#e5eeff',
};

/** 覆盖antd的颜色值变量，key值需要和antd的变量名对应 */
export const antdColor = {
  ...base,
  boxShadowBase: 'rgba(0,0,0,0.14)',
  /** 二级文字颜色 深灰色 */
  textColorSecondary: '#48494d',
  primaryColorHover: '#13c27c',
  primaryColorOutline: '',
  inputPlaceholderColor: '#b7bcc7',
  placeholderFocus: '#ccc',
  bodyBackground: '#f5f6f7',
  layoutBodyBackground: base.white,
  layoutSiderBackground: '#f5f6f7',
  inputHoverBorderColor: '#c0c4cc',
  tooltipColor: '#606266',
  tooltipBg: base.white,
  successColor: '#14cc83',
  successColorDeprecatedBg: '#e1f9ef',
  infoColor: '#4077e6',
  /** 错误反馈。应用场景：错误反馈、错误提醒、删除 */
  errorColor: '#f55a3b',
  /** 警示反馈。应用场景：信息警示、警告、提示 */
  warningColor: '#f5983b',
  backgroundColorLight: '#F5F6FA',
  borderColorBase: '#dfe1e5',

  btnShadow: 'none',
  btnPrimaryShadow: 'none',
  btnPrimaryColor: base.white,
  btnTextShadow: 'none',
  btnTextColor: '#4b4b4d',
  btnTextHoverBg: '#ebecf0',
  btnDisableBg: base.disabledBg,
  btnDisableColor: base.disabledColor,
  // btnDisableBorder: '#7AE1B9',
  btnDefaultHoverBg: '#e1faf0',
  /** 红色按钮hover时背景 */
  btnDangerHoverBg: '#EB5638',
  /** 红色按钮disable时背景 */
  btnDangerDisableBg: '#FAE5E1',

  // tag颜色
  tagDefaultColor: '#999',

  inputBg: base.componentBackground,

  /** 描述背景色 */
  descriptionsBg: '#f2f5fa',

  /** tabs 样式 开始*/
  tabsCardHeadBackground: '#f5f6f7',
  tabsHighlightColor: base.textColor,
  tabsHoverColor: customBase.grayHoverBg,
  tabsActiveColor: customAntdBase.primaryColor,
  tabsInkBarColor: base.white,
  tabsHoverBg: customBase.grayHoverBg,
  tabsHorizontalPadding: '14px 20px',
  tabsCardHorizontalPadding: '4px 12px',

  /** 表格背景色 */
  tableBg: base.componentBackground,
  /** 表格选中行背景色 */
  tableSelectedRowBg: base.componentBackground,
  tableSelectedRowHoverBg: '#F3F4F8',
  /** 表格表头分隔线颜色 */
  tableHeaderCellSplitColor: 'transparent',
  /** 表头背景色 */
  tableHeaderBg: '#EBEEF5',
  /** 表格边框颜色 */
  tableBorderColor: '#E4E7ED',
  /** 行鼠标hover时背景色 */
  tableRowHoverBg: '#F3F4F8',

  /** 级联选择选中行背景色 */
  cascaderItemSelectedBg: base.selectItemSelectedBg,

  /** 树节点鼠标hover时背景 */
  treeNodeHoverBg: customBase.grayHoverBg,

  /** 分割线颜色 */
  dividerColor: base.borderColorSplit,
  radioButtonColor: '#c0c4cc',
  // radioDotColor: base.linkColor,
  // checkboxColor: base.linkColor,

  // message
  /** 警告提示框背景色 */
  messageWarningBgColor: warningBgColor,
  /** 成功提示框背景色 */
  messageSuccessBgColor: '#e1faf0',
  /** 错误提示框背景色 */
  messageErrorBgColor: '#fae5e1',
  /** 一般提示框背景色 */
  messageInfoBgColor: customBase.infoBgColor,

  // alert
  /** 警告提示框背景色 */
  alertWarningBorderColor: warningBgColor,
  alertWarningBgColor: warningBgColor,
  /** 成功提示框背景色 */
  alertSuccessBgColor: '#e1faf0',
  /** 错误提示框背景色 */
  alertErrorBgColor: '#fae5e1',
  /** 一般提示框背景色 */
  alertInfoBorderColor: customBase.infoBgColor,
  alertInfoBgColor: customBase.infoBgColor,

  linkHoverColor: base.linkColor,
  linkActiveColor: base.linkColor,
  // linkHoverDecoration: 'underline',
  // linkFocusDecoration: 'underline',
};

/** 默认主题颜色定义 */
export const colorConfig: themeVarsType = {
  theme: customAntdBase.theme,
  ...antdColor,
  ...customBase,

  btnGrayBg: '#EBEDF0',
  btnGrayColor: base.lightTextColor,
  btnGrayHoverBg: '#E1E2E5',
  /** 强调按钮不可用状态下的背景颜色 */
  btnPrimaryDisableBg: '#84f5c8',
  /** 强调按钮鼠标hover和按下时背景颜色 */
  btnPrimaryHoverBg: '#13C27C',
  /** 白色按钮边框 */
  btnWhiteBorder: '#D2D4D6',
  btnWhiteDisabledBorder: '#DFE1E6',

  /** icon颜色 */
  iconButtonColor: '#525866',
  iconGrayColor: '#A8ABB3',
  iconGreyColor: '#787A80',

  noteColor: '#ff5858',
  normalColor: '#e4e7ed',
  collapsibleBackgroundColor: '#f4f5f7',
  menuCheckedColor: customAntdBase.primaryColor,
  menuCheckedTextColor: base.white,

  /** header */
  /** Header背景 */
  headerBackground: '#1B2138',
  /** header文字颜色 */
  headerTextColor: base.white,
  /** header 分隔线的颜色 */
  headerSplitColor: '#D8DADF',
  /** 用户名背景 */
  headerUsernameBackground: '#08C277',
  /** 退出按钮颜色 */
  headerExitColor: '#E62E2E',
  // 提示图标颜色
  tipIconColor: '#C4C6CC',
  // menu样式开始

  scrollbarThumbColor: '#d8d8d8',

  menuItemActiveBg: 'transparent',
  scrollbarThumbHoverColor: '#c3c2c2',
  /** 灰色值 */
  greyBackgroundColor: '#F0F2F5',
  greyFontColor: '#D7D8DB',
  /** tag checkable 颜色 */
  tagCheckableBackColor: '#939399',

  /** 用户自定义高亮颜色 */
  highlightColor1: '#E6867C',
  highlightColor2: '#8AB8E6',
  highlightColor3: '#948AE6',
  highlightColor4: '#90E0F0',
  highlightColor5: '#B1E67C',
  highlightColor6: '#8AE6D6',
  highlightColor7: '#7CE69F',
  highlightColor8: '#D993E6',
  highlightColor9: '#E6B17C',
  highlightColor10: '#DBE67A',
  /** 检索高亮颜色 */
  searchHighlightColor1: '#FFC2C2',
  searchHighlightColor2: '#FFCF71',
  searchHighlightColor3: '#FF74AC',
  searchHighlightColor4: '#F7783E',
  searchHighlightColor5: '#F5EE36',
  searchHighlightColor6: '#A4F8C6',

  /** 质量评估模块 */
  checkServiceLabelColor: '#4c4c4c',
  checkServiceDescColor: '#FF4A26',
  checkServiceMoneyBg: '#ededf5',
  checkExplainHoverColor: '#abadb3',
  checkTipsColor: '#999',
  checkResultCardHeaderBg: '#212638',
  checkCompareOriginalTextBg: '#f6ebe9',
  checkCompareResultColor: '#ff4d4d',

  checkFormalErrorBg: '#fae5e1',
  pdfViewerHeaderBg: '#292C33',
  pdfViewerHeaderBtnHoverBg: `rgba(${base.iconHoverBg}, 0.2)`,

  /** 年费 */
  feeWarningFill: warningBgColor,
  feeWarningFontColor: '#f5983b',

  analyseBottomBtnColor: antdColor.linkColor,

  /** 用户管理 */
  accountHeadIcon: '#DFE1E6',
  accountHeadIconBg: 'rgba(#000000, 0.6)',

  headerModuleNameColor: '#909399',
  headerBottomBorderColor: '#DFE1E6',
  headerLogoTextHoverColor: '#909399',
  headerHomeSplitLineColor: 'rgba(#ffffff, 0.4)',

  /** ===== ui4.0规范 ====== */
  /** 提示图标颜色 */
  infoIconColor: '#c0c4cc',
  /** 提示图标hover颜色 */
  infoIconHoverColor: '#b6bac2',
  /** 提示文本的颜色 */
  descriptionTextColor: '#c0c4cc',
  /** 箭头图标颜色 */
  arrowIconColor: '#48494d',
  /** 关闭图标颜色 */
  closeIconColor: '#787a80',
  /** 关闭图标hover颜色 */
  closeIconHoverColor: '#48494d',
  /** 实底风格关闭图标颜色 */
  closeIconFilledColor: '#c0c4cc',
  /** 实底风格关闭图标hover颜色 */
  closeIconFilledHoverColor: '#b6bac2',
  /** 取消按钮颜色 */
  cancelBtnColor: '#ebecf0',
  /** 取消按钮指向 */
  cancelBtnHoverColor: '#dee0e3',
  /** 列表鼠标悬停颜色 */
  itemHoverBgColor: '#f5f7fa',
  /** 背景色2 */
  lightGreyBgColor: '#f4f5f7',
  /** 白色透明24 */
  opcity24White: 'rgba(255,255,255,0.24)',
  /** 取消按钮disabled颜色 */
  iceWhite: '#F0F2F5',

  highlightKeywordColor: '#00CC7B',
  ...{ primaryColor: customAntdBase.primaryColor },
};
