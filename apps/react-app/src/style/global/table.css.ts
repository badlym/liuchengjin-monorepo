import { style, globalStyle } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';

// 表格第一列padding-left：20px 仅在列表不为空的情况下
globalStyle(
  `
.ant-table:not(.ant-table-empty) .ant-table-thead > tr > th:first-child,
.ant-table:not(.ant-table-empty) .ant-table-tbody > tr > td:first-child,
.ant-table.ant-table-small:not(.ant-table-empty) .ant-table-tbody > tr > td:first-child,
.ant-table.ant-table-small:not(.ant-table-empty) .ant-table-thead > tr > th:first-child`,
  {
    paddingLeft: commonVars.paddingXl,
    // paddingRight: '0',
  },
);

globalStyle(
  `
  .ant-table:not(.ant-table-empty) tr th.ant-table-selection-column,
  .ant-table:not(.ant-table-empty) tr td.ant-table-selection-column`,
  {
    textAlign: 'right',
    paddingLeft: commonVars.paddingXl,
    paddingRight: '0',
  },
);

// 复选框列设置最小宽度为50，因为表格第一列设置paddingleft为20后，默认宽度32太小了，导致复选框显示不全
globalStyle('.ant-table .ant-table-selection-col', {
  // minWidth: 50,
});

// 表格中没有数据时，不显示最下面的边框
globalStyle('.ant-table-empty .ant-table-tbody > tr > td', {
  borderBottomWidth: 0,
});

// UI要求：表格有横向滚动条时，不显示右侧边框阴影
globalStyle('.ant-table.ant-table-ping-right:not(.ant-table-has-fix-right) > .ant-table-container::after', {
  boxShadow: 'none',
});

// UI要求：表格有横向滚动条时，左侧固定栏显示边框阴影
globalStyle(
  '.ant-table-ping-right .ant-table-cell-fix-left-first::after,.ant-table-ping-right .ant-table-cell-fix-left-last::after',
  {
    boxShadow: `inset 10px 0 8px -8px ${colorVars.boxShadowBase}`,
  },
);

export const ghostTable = style({
  // fontSize: '13px',
});

globalStyle(`${ghostTable} .ant-table`, {
  background: 'transparent',
  borderColor: 'transparent',
});

globalStyle(`${ghostTable} .ant-table-tbody > tr > td`, {
  borderColor: 'transparent',
});

globalStyle(
  `${ghostTable} .ant-table-tbody > tr.ant-table-row:hover > td,
  ${ghostTable} .ant-table-tbody > tr > td.ant-table-cell-row-hover`,
  {
    background: 'transparent',
    borderColor: 'transparent',
  },
);

globalStyle(
  `${ghostTable} .ant-table-thead > tr > th,
  ${ghostTable} .ant-table-tbody > tr > td,
  ${ghostTable}  .ant-table tfoot > tr > th,
  ${ghostTable}  .ant-table tfoot > tr > td`,
  {
    padding: '10px 10px',
  },
);

// globalStyle(
//   `${ghostTable} .ant-table-thead > tr > th,
//   ${ghostTable} .ant-table-tbody > tr > td,
//   ${ghostTable} .ant-table tfoot > tr > th,
//   ${ghostTable} .ant-table tfoot > tr > td`,
//   {
//     padding: '10px 15px',
//   },
// );
// 有排序按钮时，鼠标移入不变更颜色
globalStyle(
  `.ant-table .ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover,
  .ant-table .ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-right:hover,
  .ant-table .ant-table-thead th.ant-table-column-has-sorters:hover`,
  {
    background: colorVars.tableHeaderBg,
  },
);

export const tableHeaderBold = style({});

globalStyle(`${tableHeaderBold} thead.ant-table-thead th.ant-table-cell`, {
  fontWeight: 'bold',
});
