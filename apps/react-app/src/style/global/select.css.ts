import { style, globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../global.css';

globalStyle('.ant-select.ant-select-single.ant-select-open .ant-select-selection-item', {
  color: themeVars.textColor,
});

globalStyle('.ant-select.ant-select-single.ant-select-open .ant-select-selection-item', {
  color: themeVars.textColor,
});

globalStyle(`.ant-select-dropdown .ant-select-item-empty`, {
  padding: '0',
});

globalStyle(`.ant-select-item-empty .ant-empty`, {
  margin: '0',
  paddingRight: '10px',
});

globalStyle(`.ant-select-item-empty .ant-empty .ant-empty-image`, {
  height: 'auto',
});

globalStyle(`.ant-select-item-empty .ant-empty .ant-empty-image img`, {
  width: '100%',
  height: 'auto',
});
// globalStyle('.ant-select-focused:not(.ant-select-open):not(.ant-select-disabled) ', {
//   border: '1px solid red',
// });

globalStyle(
  `.ant-select-focused:not(.ant-select-disabled):not(.ant-select-open).ant-select:not(.ant-select-customize-input):not(hover) .ant-select-selector`,
  {
    borderColor: themeVars.borderColorBase,
    boxShadow: 'none',
  },
);

globalStyle(`.ant-select:not(.ant-select-disabled):hover .ant-select-selector.ant-select-selector, .ant-select.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector`, {
  borderColor: themeVars.primaryColor,
  boxShadow: 'none',
});

export const ghostSelect = style({});

globalStyle(`${ghostSelect}.ant-select:not(.ant-select-customize-input) .ant-select-selector`, {
  background: '#E1FAF0',
  borderWidth: 0,
});

globalStyle(
  `${ghostSelect}.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector,
  ${ghostSelect}.ant-select:not(.ant-select-disabled):hover .ant-select-selector
  `,
  {
    borderWidth: 0,
    boxShadow: 'none',
  },
);

globalStyle(
  `${ghostSelect}.ant-select.ant-select-single.ant-select-open .ant-select-selection-item,
  ${ghostSelect}.ant-select .ant-select-arrow`,
  {
    color: '#00CC7B',
  },
);
