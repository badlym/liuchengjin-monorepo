import { commonVars } from '@/style/common.css'
import { colorVars } from '@/style/theme.css'
import { globalStyle } from '@vanilla-extract/css'

/** tag checkable */
globalStyle('.ant-tag.ant-tag-checkable', {
  height: '24px',
  lineHeight: '22px',
  borderRadius: '3px',
  backgroundColor: colorVars.greyBackgroundColor,
  color: colorVars.tagCheckableBackColor,
  border: commonVars.border,
  userSelect: 'none',
})

globalStyle('.ant-tag.ant-tag-checkable-checked', {
  height: '24px',
  lineHeight: '22px',
  borderRadius: '3px',
  color: colorVars.textColor,
  borderColor: colorVars.primaryColor,
  backgroundColor: colorVars.successColorDeprecatedBg,
})

globalStyle('.ant-tag.ant-tag-checkable:not(.ant-tag-checkable-checked):hover', {
  color: colorVars.tagCheckableBackColor,
})

globalStyle('.ant-tag.ant-tag-checkable:active', {
  backgroundColor: colorVars.greyBackgroundColor,
})

globalStyle('.ant-tag>.anticon-close.ant-tag-close-icon', {
  fontSize: '10px',
})
