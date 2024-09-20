import { style, globalStyle } from '@vanilla-extract/css';

export const spinColumn = style({
  flex: 1,
  overflow: 'auto',
  height: '100%',
});

globalStyle(`${spinColumn} .ant-spin-container`, {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const spinInheritHt = style({
  height: '100%',
});

globalStyle(`${spinInheritHt} .ant-spin-container`, {
  height: '100%',
});
