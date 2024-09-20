import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';
import { themeVars } from '../global.css';

globalStyle('.ant-radio-group-outline>.ant-radio-button-wrapper', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  width: '118px',
  color: colorVars.textColor,
});
globalStyle('.ant-radio-group-outline .ant-radio-button-checked:before', {
  content: '',
  position: 'absolute',
  width: '10px',
  height: '5px',
  background: 'transparent',
  bottom: '4px',
  right: '0px',
  border: '2px solid white',
  borderTop: 'none',
  borderRight: 'none',
  transform: 'rotate(-50deg)',
  zIndex: '9',
});
globalStyle('.ant-radio-group-outline .ant-radio-button-checked:after', {
  content: '',
  display: 'block',
  position: 'absolute',
  right: '0',
  bottom: '0',
  width: '0',
  height: '0',
  borderRight: `18px solid ${colorVars.successColor}`,
  borderTop: '15px solid transparent',
});

globalStyle('.ant-radio-group-outline>.ant-radio-button-wrapper.ant-radio-button-wrapper-checked', {
  borderWidth: 2,
});

globalStyle('.ant-radio-group.ant-radio-group-solid', {
  border: commonVars.border,
  borderRadius: commonVars.borderRadiusBase,
  height: '32px',
});

globalStyle('.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper', {
  borderWidth: 0,
  margin: '2px',
  height: '26.4px',
  lineHeight: '26.4px',
  borderRadius: commonVars.borderRadiusBase,
  padding: '0 6.2px',
  color: colorVars.lightTextColor,
});

globalStyle('.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper span.anticon', {
  color: colorVars.iconButtonColor,
});

globalStyle('.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper:hover', {
  backgroundColor: colorVars.itemHoverBg,
  // color: colorVars.radioButtonColor,
});

globalStyle('.ant-radio-group-solid>.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)', {
  color: themeVars.white,
});

globalStyle(
  '.ant-radio-group-solid>.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) span.anticon',
  {
    color: themeVars.white,
  },
);

globalStyle('.ant-radio-group-solid>.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover', {
  color: colorVars.white,
  backgroundColor: colorVars.primaryColor,
  borderColor: colorVars.primaryColor,
});

globalStyle(
  '.ant-radio-group-solid>.ant-radio-button-wrapper-checked.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)',
  {
    borderWidth: 0,
    borderRadius: commonVars.borderRadiusBase,
  },
);

globalStyle(
  '.ant-radio-group-solid>.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before, .ant-radio-group-solid>.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before, .ant-radio-group-solid>.ant-radio-button-wrapper:not(:first-child)::before',
  {
    backgroundColor: 'transparent',
  },
);

globalStyle(`.ant-radio-group-solid:has(.ant-radio-button-wrapper-disabled)`, {
  backgroundColor: '#EFF2F5',
  color: '#C0C4CC',
});

globalStyle(
  `.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper-disabled,
  .ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper-disabled:hover`,
  {
    backgroundColor: 'transparent',
    color: '#C0C4CC',
  },
);

globalStyle('.ant-radio-group .anticon', {
  // verticalAlign: 'middle',
});

export const grayRadioButton = style({});

globalStyle(`.ant-radio-button-wrapper${grayRadioButton}`, {
  backgroundColor: '#f0f2f5',
  color: '#d8dce5',
});

export const defaultRadioButton = style({
  selectors: {
    '&&': {
      border: 'none',
    },
  },
});

globalStyle(`${defaultRadioButton}.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper`, {
  height: 32,
  margin: 0,
  padding: '0 9px',
  lineHeight: '30px',
  borderWidth: '1px',
  borderLeftWidth: 0,
  borderRadius: 0,
});

globalStyle(
  `${defaultRadioButton}.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper:first-child`,
  {
    borderLeft: '1px solid #dfe1e5',
    borderRadius: '4px 0 0 4px',
  },
);

globalStyle(
  `${defaultRadioButton}.ant-radio-group-solid>.ant-radio-button-wrapper.ant-radio-button-wrapper:last-child`,
  {
    borderRadius: '0 4px 4px 0',
  },
);

/** 非选中及不可用的hover */
globalStyle(
  `${defaultRadioButton}.ant-radio-group-solid>.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked):not(.ant-radio-button-wrapper-disabled):hover`,
  {
    background: themeVars.white,
    color: themeVars.primaryColor,
  },
);
