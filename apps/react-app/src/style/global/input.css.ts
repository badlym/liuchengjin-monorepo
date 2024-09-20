import { globalStyle } from '@vanilla-extract/css';
import { commonVars, varsConfig } from '../common.css';
import { colorVars } from '../theme.css';

globalStyle('.ant-input.ant-input:focus', {
  borderColor: colorVars.primaryColor,
  boxShadow: 'none'
});

/** 带输入字数提示的textarea样式 */
globalStyle('.ant-input-textarea-show-count', {
  position: 'relative',
});

globalStyle('.ant-input-textarea-show-count > textarea.ant-input', {
  paddingBottom: commonVars.paddingXl,
  borderBottomWidth: 0,
  height: `calc(100% - 20px)`,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

globalStyle('.ant-input-textarea-show-count:has(>:not(.ant-input-borderless))::after', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  lineHeight: 1,
  paddingBottom: commonVars.paddingMd,
  textAlign: 'right',
  background: colorVars.inputBg,
  border: commonVars.border,
  borderTopWidth: 0,
  borderRadius: commonVars.controlBorderRadius,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  color: colorVars.grayColor2,
  padding: '0 10px 10px 0',
});

globalStyle('.ant-input-textarea-show-count:hover textarea', {
  borderColor: colorVars.inputHoverBorderColor,
});

globalStyle('.ant-input-textarea-show-count:has(>:not(.ant-input-borderless)):hover::after', {
  borderColor: colorVars.inputHoverBorderColor,
});

globalStyle('.ant-input-textarea-show-count:focus-within textarea', {
  borderColor: '#3ade97',
  boxShadow: 'none',
});

globalStyle('.ant-input-textarea-show-count:has(>:not(.ant-input-borderless)):focus-within::after', {
  borderColor: '#3ade97',
  boxShadow: 'none',
});

globalStyle('body textarea', {
  resize: 'none',
});

// globalStyle('.ant-input-group-addon');

// 补充表单下样式
globalStyle('.ant-input-textarea-show-count.ant-input-textarea-in-form-item::after', {
  marginBottom: '-20px !important',
});

globalStyle('.ant-input-textarea-show-count.ant-input-textarea-in-form-item.ant-input-textarea-status-error::after', {
  borderColor: colorVars.errorColor,
});

globalStyle(
  '.ant-input-textarea-show-count.ant-input-textarea-in-form-item.ant-input-textarea-status-error:has(>:not(.ant-input-borderless)):focus-within::after',
  {
    boxShadow: '0 2px 0 2px rgb(245 90 59 / 20%)',
  },
);

// /** 基本尺寸 */
// globalStyle('.ant-input.ant-input,.ant-input-affix-wrapper.ant-input-affix-wrapper', {
//   minHeight: commonVars.heightBase,
// });

// /** small尺寸 */
// globalStyle('.ant-input.ant-input-sm,.ant-input-affix-wrapper.ant-input-affix-wrapper-sm', {
//   minHeight: commonVars.heightSm,
// });

// /** large尺寸 */
// globalStyle('.ant-input.ant-input-lg,.ant-input-affix-wrapper.ant-input-affix-wrapper-lg', {
//   minHeight: commonVars.heightLg,
// });

globalStyle('.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-textarea-with-clear-btn)>.ant-input', {
  minHeight: 0,
  padding: 0,
});

globalStyle('.ant-input.ant-input-suffix > *:not(:last-child)', {
  marginRight: 6,
});

globalStyle(`textarea.ant-input.ant-input`, {
  transition: 'all 0.3s, height 0s,padding 0s',
});

globalStyle(`.ant-input-affix-wrapper.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover, .ant-input-affix-wrapper.ant-input-affix-wrapper-focused`, {
  borderColor: colorVars.primaryColor,
  boxShadow: 'none'
});
