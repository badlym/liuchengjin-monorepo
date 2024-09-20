const base = {
  // vertical paddings
  /** paddingSize: 24px，待补充应用场景 */
  paddingXxl: '24px',
  /** paddingSize: 18px，待补充应用场景 */
  padding18: '18px',
  /** paddingSize: 20px，待补充应用场景 */
  paddingXl: '20px',
  /** paddingSize: 16px，待补充应用场景 */
  paddingLg: '16px',
  /** paddingSize:: 12px，待补充应用场景 */
  padding12: '12px',
  /** paddingSize:: 10px，待补充应用场景 */
  paddingMd: '10px',
  /** paddingSize:: 8px，待补充应用场景 */
  paddingSm: '8px',
  /** paddingSize:: 6px，待补充应用场景 */
  paddingXs: '6px',
  /** paddingSize:: 4px，待补充应用场景 */
  paddingXss: '4px',

  // vertical margins
  /** marginSize: 24px，待补充应用场景 */
  marginXxl: '24px',
  /** marginSize: 20px，待补充应用场景 */
  marginXl: '20px',
  /** marginSize: 16px，待补充应用场景 */
  marginLg: '16px',
  /** marginSize: 12px，待补充应用场景 */
  margin12: '12px',
  /** marginSize: 10px，待补充应用场景 */
  marginMd: '10px',
  /** marginSize: 8px，待补充应用场景 */
  marginSm: '8px',
  /** marginSize: 6px，待补充应用场景 */
  marginXs: '6px',
  /** marginSize: 4px，待补充应用场景 */
  marginXss: '4px',

  // 圆角
  /** 普通的圆角：4px，待补充应用场景 */
  borderRadiusBase: '4px',
  /** 小圆角：2px，待补充应用场景 */
  borderRadiusSm: '2px',

  /** 默认字号：14px，应用场景：用于大多数文字，特别应用于大段文字，段落小标题等 */
  fontSizeBase: '14px',
  /** 大字号：16px，应用场景：用于辅助性文字，如模块名称，详情页分类标题等 */
  fontSizeLg: '16px',
  /** 小字号：12px，应用场景：用于提示性文字，如次要备注提示信息、提示小标题等 */
  fontSizeSm: '12px',
  /** 超大号字：18px，应用场景：用在一些较为重要的文字或标题，如报告名称、公司、代理机构名称、弹框、下拉标题、数量等 */
  fontSizeXl: '18px',
  /** 特大号：22px，应用场景：用在少数重要标题，如页面大标题、分类名称等 */
  fontSizeXxl: '22px',

  // 高度
  /** 高度56px */
  heightXl: '56px',
  /** 高度：40px，待补充应用场景  */
  heightLg: '40px',
  /** 高度：32px，待补充应用场景 */
  heightBase: '32px',
  /** 高度：24px，待补充应用场景 */
  heightSm: '24px',

  /** 单选框focus时的shadow */
  radioButtonFocusShadow: 'none',
};

export const baseVars = {
  ...base,
  /** 输入框、日期选择框的圆角 */
  controlBorderRadius: base.borderRadiusBase,

  checkboxSize: base.fontSizeBase,

  tableBorderRadiusBase: '0', // 没有圆角
  tablePaddingVertical: base.paddingMd,
  boxShadowBase: '0px 5px 8px 0px rgba(0,0,0,0.14), 0px -2px 3px 0px rgba(0,0,0,0.08)',

  // input
  InputHeightBase: '32px',
  /** [antd] input左右padding */
  inputPaddingHorizontalBase: '10px',
  /** [antd] input左右padding */
  inputPaddingHorizontalSm: '10px',

  // message
  messageNoticeContentPadding: '0',
  messageNoticeContentBg: 'transparent',

  // 弹窗
  modalHeaderBorderWidth: '0',
  modalHeaderPadding: `${base.paddingXl} ${base.paddingXl} ${base.paddingXl}`,
  modalHeaderTitleFontSize: '18px',
  modalBodyPadding: `0 ${base.paddingXl} ${base.paddingXl}`,
  modalFooterBorderWidth: '0',
  modalConfirmBodyPadding: base.paddingXl,
  modalConfirmTitleFontSize: base.fontSizeXl,

  // 复选框
  // checkboxBorderRadius: base.borderRadiusBase,
  checkboxBorderRadius: '3px',
  /** 按钮 */
  btnFontSizeSm: base.fontSizeSm,

  btnPaddingHorizontalBase: '26px',
  btnHeightBase: base.heightBase,
  cardHeadFontSizeSm: base.fontSizeSm,
  // tag
  tagLineHeight: '18px',

  tabsCardGutter: base.marginSm,

  /** 树组件 */
  treeTitleHeight: '20px',

  /** List组件空状态的paddinng */
  listEmptyTextPadding: `80px ${base.marginMd} 50px`,
  /** popover组件 */
  popoverArrowWidth: '0',
  /** 统计数字字体大小 */
  statisticContentFontSize: '18px',
  /** ant-message 层级 */
  zindexMessage: '9999',
};
