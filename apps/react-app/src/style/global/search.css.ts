import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';
import { themeVars } from '../global.css';

export const search = style({
  padding: '4px 10px',
  height: '30px',
  boxSizing: 'border-box',

  selectors: {
    '&::placeholder': {
      color: '#A8ABB3',
    },
    // '&.ant-input-affix-wrapper:focus, &.ant-input-affix-wrapper-focused': {
    //   boxShadow: 'none',
    // },
  },
});

globalStyle(`${search} .ant-input`, {
  backgroundColor: 'transparent',
});

globalStyle(`${search} .ant-input-prefix`, {
  marginRight: '9px',
});

export const searchIcon = style({
  fontSize: '16px',
  color: themeVars.iconButtonColor,
});

export const searchCloseIcon = style({
  cursor: 'pointer',
  fontSize: '10px',
  color: themeVars.iconGreyColor,
});

export const searchGray = style({
  background: themeVars.greyBackgroundColor,
  borderColor: themeVars.greyBackgroundColor,
  selectors: {
    '&.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover': {
      borderColor: themeVars.greyBackgroundColor,
    },
    '&.ant-input-affix-wrapper:focus, &.ant-input-affix-wrapper-focused': {
      boxShadow: 'none',
    },
  },
});

globalStyle(`${searchGray} ${searchIcon}`, {
  color: themeVars.iconGrayColor,
});
