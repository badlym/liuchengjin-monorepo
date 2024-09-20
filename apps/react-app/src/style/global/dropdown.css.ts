import { globalStyle } from '@vanilla-extract/css';
import { commonVars, varsConfig } from '../common.css';
import { colorVars } from '../theme.css';

globalStyle('ul.ant-dropdown-menu', {
  padding: `${commonVars.paddingXs} ${commonVars.paddingMd}`,
  // border: commonVars.border,
});

globalStyle('.ant-dropdown-menu-item:hover, .ant-dropdown-menu-item.ant-dropdown-menu-active', {
  background: colorVars.selectItemSelectedBg,
  borderRadius: commonVars.borderRadiusBase,
});

/** 在子导航显示状态下，父级导航为鼠标hover效果 */
globalStyle('.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-open > .ant-dropdown-menu-submenu-title', {
  background: colorVars.itemHoverBg,
  borderRadius: commonVars.borderRadiusBase,
});

globalStyle('.ant-select-dropdown', {
  border: commonVars.border,
});

globalStyle('.ant-select-dropdown .rc-virtual-list .rc-virtual-list-holder-inner', {
  paddingRight: commonVars.paddingMd,
});

globalStyle(`.ant-select-dropdown .rc-virtual-list>.rc-virtual-list-scrollbar.rc-virtual-list-scrollbar-show`, {
  display: 'block!important',
});

globalStyle(`.ant-select-dropdown .rc-virtual-list>.rc-virtual-list-scrollbar>.rc-virtual-list-scrollbar-thumb`, {
  marginRight: '2px',
  width: '6px!important',
  background: 'rgba(0,0,0,0.3)!important',
});

globalStyle('.ant-select-dropdown:not(.ant-cascader-dropdown)', {
  padding: `${commonVars.paddingXs} 0px ${commonVars.paddingXs} ${commonVars.paddingMd}`,
});

globalStyle('.ant-cascader-menu.ant-cascader-menu', {
  padding: `${commonVars.paddingXs} ${commonVars.paddingMd}`,
});

globalStyle(
  '.ant-select-dropdown:not(.ant-cascader-dropdown) .ant-select-item,.ant-cascader-menu .ant-cascader-menu-item',
  {
    borderRadius: commonVars.borderRadiusBase,
  },
);

globalStyle(
  '.ant-select-dropdown:not(.ant-cascader-dropdown) .ant-select-item:hover,.ant-cascader-menu .ant-cascader-menu-item:hover, .ant-cascader-menu .ant-cascader-menu-item:not(.ant-cascader-menu-item-disabled):hover',
  {
    backgroundColor: colorVars.itemHoverBg,
  },
);

// 被选中样式
globalStyle('.ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled)', {
  color: colorVars.primaryColor,
});

// 修改箭头的样式 让箭头趋于直角
globalStyle('.ant-select.ant-select-show-arrow>.ant-select-arrow:has(.anticon.anticon-down)', {
  transform: 'scaleX(1.1) scaleY(0.8)',
});

globalStyle('.ant-select.ant-select-show-arrow>.ant-select-arrow>.anticon.anticon-down', {
  transition: 'transform cubic-bezier(.4,0,.2,1) 0.15s',
});

globalStyle('.ant-select.ant-select-show-arrow.ant-select-open>.ant-select-arrow>.anticon.anticon-down', {
  transform: 'rotate(180deg)',
});

/** 下拉箭头 icon 样式 */
globalStyle('.ant-select .ant-select-arrow', {
  color: colorVars.arrowIconColor,
});

/** 清除 icon 样式 */
globalStyle('.ant-select .ant-select-clear', {
  color: colorVars.closeIconFilledColor,
  borderRadius: '100%',
});

globalStyle('.ant-select .ant-select-clear:hover', {
  color: colorVars.closeIconFilledHoverColor,
});

globalStyle('.ant-select.ant-select-borderless .ant-select-selector:hover', {
  backgroundColor: `${colorVars.itemHoverBg}!important`,
});

/** cascader 级联选择下拉框样式 */
const cascaderMenus = '.ant-select-dropdown .ant-cascader-menus';

// globalStyle(`${cascaderMenus}`, {});

globalStyle(
  `${cascaderMenus} .ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon, .ant-cascader-menu-item-loading-icon`,
  {
    display: 'none',
  },
);

// 级联被选中
globalStyle(
  `${cascaderMenus} .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled), .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover`,
  {
    // color: colorVars.primaryColor,
    background: colorVars.itemHoverBg,
    fontWeight: 'normal',
  },
);

globalStyle(`${cascaderMenus}>ul:last-child .ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled)`, {
  color: colorVars.primaryColor,
  background: 'transparent',
});

globalStyle(`${cascaderMenus} .ant-cascader-menu`, {
  minWidth: '160px',
  position: 'relative',
  borderRight: 'none',
  paddingTop: varsConfig.paddingMd,
  paddingBottom: varsConfig.paddingMd,
});

globalStyle(`${cascaderMenus} .ant-cascader-menu::before`, {
  content: ' ',
  borderRight: `1px solid #f0f0f0`,
  // background: '#f0f0f0',
  position: 'absolute',
  width: '0px',
  right: 0,
  top: '10px',
  height: 'calc(100% - 20px)',
});
