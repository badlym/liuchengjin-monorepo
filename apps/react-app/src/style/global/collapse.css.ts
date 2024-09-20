import { globalStyle } from '@vanilla-extract/css';
import { commonVars } from '../common.css';

/** 折叠面板左侧展开折叠按钮的样式 */
globalStyle(
  '.ant-collapse.ant-collapse-icon-position-start > .ant-collapse-item > .ant-collapse-header.ant-collapse-header',
  {
    alignItems: 'center',
    paddingBottom: 0,
  },
);
globalStyle('.ant-collapse-icon-position-start .ant-collapse-expand-icon', {
  color: '#E1E1E6',
  borderRadius: '50%',
  background: '#4B4B4D',
  textAlign: 'center',
  marginRight: commonVars.marginXs,
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px',
});

globalStyle(
  `.ant-collapse.ant-collapse-icon-position-start > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow.ant-collapse-arrow`,
  {
    fontSize: '10px',
    marginRight: 0,
  },
);

globalStyle('.ant-collapse > .ant-collapse-item > .ant-collapse-header .anticon.ant-collapse-arrow', {
  fontSize: '12px',
});

// globalStyle('.ant-collapse-expand-icon::before', {
//   content: '',
//   position: 'absolute',
//   width: 14,
//   height: 14,
//   borderRadius: '50%',
//   marginTop: 4,
//   marginLeft: -1,
//   background: '#4B4B4D'
// });
