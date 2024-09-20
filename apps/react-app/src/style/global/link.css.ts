import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';

/** 强调链接，默认绿色，鼠标hover时加底线 */
export const primaryLink = style({
  color: colorVars.primaryColor,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
    color: colorVars.primaryColor,
  },
});

/** 次要链接，默认黑色，鼠标hover时绿色加底线 */
export const secondaryLink = style({
  color: colorVars.textColor,
  cursor: 'pointer',
  ':hover': {
    // textDecoration: 'underline',
    color: colorVars.primaryColor,
  },
});

/** 普通链接，默认黑色，鼠标hover时蓝色加底线 */
export const normalLink = style({
  color: colorVars.textColor,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
    color: colorVars.linkColor,
  },
});

/** 蓝色文字，鼠标hover时蓝色加底线 */
export const infoLink = style({
  selectors: {
    '&&': {
      color: colorVars.linkColor,
      cursor: 'pointer',
    },
    '&:hover': {
      textDecoration: 'underline',
      color: colorVars.linkColor,
    },
  },
});

globalStyle(`${normalLink} > .anticon`, {
  color: colorVars.textColor,
});

globalStyle(`${normalLink}:hover > .anticon`, {
  color: colorVars.linkColor,
  transition: 'color 0.3s',
});

globalStyle(`${normalLink} > :nth-child(n+2)`, {
  marginLeft: commonVars.marginXs,
});
