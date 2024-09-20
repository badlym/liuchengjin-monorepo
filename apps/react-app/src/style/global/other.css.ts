import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';

// globalStyle('ul', {
//   listStyle: 'none',
//   padding: 0,
// });
globalStyle('.root', {
  height: '100%',
  width: '100%',
});

globalStyle('pre', {
  fontFamily: commonVars.fontFamily,
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const flexRight = style({
  marginLeft: 'auto',
});

export const noWrap = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const fontSizeSm = style({
  fontSize: commonVars.fontSizeSm,
});

export const contentContainer = style({
  padding: commonVars.paddingXl,
});

export const highlight = style({
  color: colorVars.highlightKeywordColor,
  fontStyle: 'normal'
});

export const description = style({
  color: colorVars.lightTextColor,
});

export const grayTip = style({
  color: colorVars.grayColor2,
  fontWeight: 'normal'
});

export const disabled = style({
  color: colorVars.disabledColor,
});

// export const color = colors;
export const successIcon = style({
  selectors: {
    '&&': {
      color: colorVars.primaryColor,
      marginRight: 10,
    }
  }
});

export const errorIcon = style({
  selectors: {
    '&&': {
      color: colorVars.errorColor,
      marginRight: 10,
    }
  }
});

export const alignR = style({
  textAlign: 'right',
});