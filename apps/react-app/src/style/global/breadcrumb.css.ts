import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';

// 默认颜色
globalStyle(
  `.ant-breadcrumb .ant-breadcrumb-link,
  .ant-breadcrumb .ant-breadcrumb-link > a`,
  {
    color: colorVars.grayColor2,
  },
);

// 最后一个当前页面颜色
globalStyle(
  `.ant-breadcrumb li:last-child > .ant-breadcrumb-link,
  .ant-breadcrumb li:last-child > .ant-breadcrumb-link > a`,
  {
    color: colorVars.textColor,
  },
);

// a链接hover
globalStyle('.ant-breadcrumb .ant-breadcrumb-link > a:hover', {
  color: colorVars.linkColor,
  textDecoration: 'underline',
});
