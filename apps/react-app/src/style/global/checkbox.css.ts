import { globalStyle } from '@vanilla-extract/css';

globalStyle('.ant-checkbox-inner.ant-checkbox-inner, .ant-tree-checkbox-inner.ant-tree-checkbox-inner', {
  borderColor: '#d2d3d6',
});

globalStyle(`.ant-checkbox-wrapper.ant-checkbox-wrapper`, {
  alignItems: 'center',
});

globalStyle(`.ant-checkbox-wrapper .ant-checkbox`, {
  top: '0',
});
