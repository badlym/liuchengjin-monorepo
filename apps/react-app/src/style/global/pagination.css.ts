import { globalStyle, style } from '@vanilla-extract/css';
import { colorVars } from '../theme.css';

// 分页居中
globalStyle('.ant-pagination', {
  textAlign: 'center',
});
globalStyle('.ant-table-pagination.ant-pagination', {
  justifyContent: 'center',
});

// 当前页背景样式
globalStyle('.ant-pagination > .ant-pagination-item-active', {
  background: colorVars.primaryColor,
});

// 非当前页样式
globalStyle('.ant-pagination > .ant-pagination-item > a', {
  color: colorVars.lightTextColor,
});

// 当前页字体颜色
globalStyle(
  '.ant-pagination > .ant-pagination-item-active > a, .ant-pagination > .ant-pagination-item-active:hover > a',
  {
    color: colorVars.white,
  },
);

// 鼠标hover时样式
globalStyle(
  '.ant-pagination > .ant-pagination-item:not(.ant-pagination-item-active):hover, .ant-pagination > li:not(.ant-pagination-disabled) > .ant-pagination-item-link:hover',
  {
    background: colorVars.itemHoverBg,
    borderColor: colorVars.borderColorBase,
    color: colorVars.lightTextColor,
  },
);

globalStyle('.ant-pagination > .ant-pagination-item:not(.ant-pagination-item-active):hover > a', {
  color: colorVars.lightTextColor,
});

globalStyle(
  '.ant-pagination > .ant-pagination-disabled > .ant-pagination-item-link,.ant-pagination > .ant-pagination-disabled:hover > .ant-pagination-item-link',
  {
    background: colorVars.disabledBg,
    color: colorVars.disabledColor,
    borderColor: colorVars.disabledBg,
  },
);

export const hideLastPage = style({});

globalStyle(`${hideLastPage} > .ant-pagination-jump-next + .ant-pagination-item`, {
  display: 'none',
});

globalStyle('.ant-pagination-jump-prev:hover,.ant-pagination-jump-next:hover', {
  backgroundColor: colorVars.itemHoverBg,
});

globalStyle(
  `.ant-pagination-jump-prev.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon,
   .ant-pagination-jump-next.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon`,
  {
    color: colorVars.lightTextColor,
  },
);

globalStyle(`.ant-pagination-options>.ant-select`, {
  color: colorVars.lightTextColor,
});
