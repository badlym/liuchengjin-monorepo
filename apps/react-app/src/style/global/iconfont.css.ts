import { style } from '@vanilla-extract/css';
import { colorVars } from '../theme.css';

export const defaultIcon = style({
  selectors: {
    '&&': {
      /** 面性图标，#525866 */
      color: colorVars.iconButtonColor,
    },
  },
});

export const grayIcon = style({
  selectors: {
    '&&': {
      color: colorVars.iconButtonColor,
    },
  },
});

export const infoIcon = style({
  selectors: {
    '&&': {
      color: colorVars.infoIconColor,
    },
    '&:hover': {
      color: colorVars.infoIconHoverColor,
    },
  },
});

export const primaryIcon = style({
  selectors: {
    '&&': {
      color: colorVars.primaryColor,
    },
  },
});

export const warnIcon = style({
  selectors: {
    '&&': {
      color: colorVars.warningColor,
    },
  },
});

export const errorIcon = style({
  selectors: {
    '&&': {
      color: colorVars.errorColor,
    },
  },
});

export const arrowIcon = style({
  selectors: {
    '&&': {
      color: colorVars.arrowIconColor,
    },
  },
});

export const closeIcon = style({
  selectors: {
    '&&': {
      color: colorVars.closeIconColor,
    },
    '&:hover': {
      color: colorVars.closeIconHoverColor,
    },
  },
});

export const closeIconFilled = style({
  selectors: {
    '&&': {
      color: colorVars.closeIconFilledColor,
    },
    '&:hover': {
      color: colorVars.closeIconFilledHoverColor,
    },
  },
});
