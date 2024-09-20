import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';
import { themeVars, vars } from '../global.css';
import { thinScrollBar } from '../global/scroll.css';

export const popMenu = style({
  selectors: {
    '&.ant-menu-inline': {
      borderRightWidth: 0,
    },
  },
});

globalStyle(`${popMenu}.ant-menu-inline > .ant-menu-item.ant-menu-item`, {
  height: 32,
  lineHeight: 32,
  marginBottom: 0,
  borderRadius: commonVars.borderRadiusBase,
  paddingLeft: commonVars.paddingMd,
  paddingRight: commonVars.paddingMd,
});

globalStyle(`${popMenu}.ant-menu-inline > .ant-menu-item:hover`, {
  backgroundColor: colorVars.itemHoverBg,
  color: colorVars.textColor,
});
globalStyle(`${popMenu}.ant-menu-inline > .ant-menu-item:hover a`, {
  color: colorVars.textColor,
});

globalStyle(`.ant-menu.ant-menu-sub.ant-menu-inline`, {
  backgroundColor: 'transparent',
});

// 卡片式menu
export const cardMenu = style({
  color: colorVars.textColor,
  height: '100%',
});

// title左侧图标大小
globalStyle(`${cardMenu} .ant-menu-submenu-title .ant-menu-item-icon`, {
  fontSize: commonVars.fontSizeLg,
});

// 背景颜色
globalStyle(`${cardMenu}.ant-menu`, {
  background: 'transparent',
});

// borderRight
globalStyle(`${cardMenu}.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left`, {
  borderRight: 'none',
});
// globalStyle(
//   `${cardMenu}.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
//   ${cardMenu}.ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content`,
//   {
//     // marginLeft: commonVars.marginMd,
//   },
// );
// ${cardMenu}.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,
globalStyle(
  `
  ${cardMenu}.ant-menu-inline > .ant-menu-item,
  ${cardMenu} .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  ${cardMenu} .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title`,
  {
    height: '24px',
    lineHeight: '24px',
  },
);

globalStyle(`${cardMenu}.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content`, {
  paddingLeft: commonVars.paddingMd,
  fontSize: commonVars.fontSizeSm,
});

globalStyle(
  `${cardMenu}.ant-menu-inline.ant-menu-root .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title > .ant-menu-title-content`,
  {
    paddingLeft: commonVars.paddingMd,
  },
);

// 被选中的颜色
globalStyle(`${cardMenu} .ant-menu-submenu-selected`, {
  color: colorVars.textColor,
});

// 菜单hover颜色
globalStyle(
  `${cardMenu}.ant-menu-light .ant-menu-item:hover,
  ${cardMenu}.ant-menu-light .ant-menu-item-active,
  ${cardMenu}.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  ${cardMenu}.ant-menu-light .ant-menu-submenu-active,
  ${cardMenu}.ant-menu-light .ant-menu-submenu-title:hover`,
  {
    color: colorVars.textColor,
  },
);

// 菜单 title hover arrow颜色
globalStyle(
  `${cardMenu} .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon,
  ${cardMenu} .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow`,
  {
    color: colorVars.iconButtonColor,
  },
);

// 被选中菜单的背景颜色
globalStyle(`${cardMenu} .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected`, {
  backgroundColor: 'transparent',
});

// 被选中菜单内容背景
globalStyle(`${cardMenu} .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected > .ant-menu-title-content`, {
  color: colorVars.white,
  backgroundColor: colorVars.primaryColor,
  borderRadius: commonVars.borderRadiusBase,
});

// 子菜单hover颜色
globalStyle(`${cardMenu}.ant-menu-light .ant-menu-item:not(.ant-menu-item-selected):hover > .ant-menu-title-content`, {
  backgroundColor: colorVars.grayHoverBg,
  borderRadius: commonVars.borderRadiusBase,
});

// 右侧active样式
globalStyle(
  `${cardMenu} .ant-menu-vertical .ant-menu-item::after,
  ${cardMenu} .ant-menu-vertical-left .ant-menu-item::after,
  ${cardMenu} .ant-menu-vertical-right .ant-menu-item::after,
  ${cardMenu} .ant-menu-inline .ant-menu-item::after`,
  {
    borderRightColor: 'transparent',
  },
);

globalStyle(
  `${cardMenu} .ant-menu-item:active,
  ${cardMenu} .ant-menu-submenu-title:active`,
  {
    backgroundColor: 'transparent',
  },
);

export const fillMenu = style([
  thinScrollBar,
  {
    selectors: {
      '&&': {
        height: '100%',
        borderRightWidth: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
      },
    },
  },
]);

globalStyle(`${fillMenu}.ant-menu-inline.ant-menu-root .ant-menu-item`, {
  transition: 'none',
});

/** title hover效果 */
globalStyle(
  `${fillMenu}.ant-menu-light .ant-menu-item:hover,
  ${fillMenu}.ant-menu-light .ant-menu-item-active,
  ${fillMenu}.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  ${fillMenu}.ant-menu-light .ant-menu-submenu-active,
  ${fillMenu}.ant-menu-light .ant-menu-submenu-title:hover`,
  {
    color: themeVars.textColor,
    backgroundColor: 'transparent',
  },
);

globalStyle(
  `${fillMenu} .ant-menu-item:active,
  ${fillMenu} .ant-menu-submenu-title:active`,
  {
    background: 'transparent',
  },
);

/** content hover效果 */
globalStyle(
  `${fillMenu}.ant-menu .ant-menu-item .ant-menu-title-content,
  ${fillMenu}.ant-menu .ant-menu-item-active .ant-menu-title-content,
  ${fillMenu}.ant-menu .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open .ant-menu-title-content,
  ${fillMenu}.ant-menu .ant-menu-submenu-active .ant-menu-title-content,
  ${fillMenu}.ant-menu .ant-menu-submenu-title .ant-menu-title-content`,
  {
    color: themeVars.textColor,
    transition: 'background 0.15s',
  },
);

/** content 非收起 hover效果 */
globalStyle(
  `${fillMenu}.ant-menu:not(.ant-menu-inline-collapsed) .ant-menu-item:hover:not(.ant-menu-item-selected) .ant-menu-title-content,
  ${fillMenu}.ant-menu:not(.ant-menu-inline-collapsed) .ant-menu-item-active .ant-menu-title-content,
  ${fillMenu}.ant-menu:not(.ant-menu-inline-collapsed) .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open .ant-menu-title-content,
  ${fillMenu}.ant-menu:not(.ant-menu-inline-collapsed) .ant-menu-submenu-active .ant-menu-title-content,
  ${fillMenu}.ant-menu:not(.ant-menu-inline-collapsed) .ant-menu-submenu-title:hover .ant-menu-title-content`,
  {
    backgroundColor: themeVars.itemHoverBg,
  },
);

/** title 默认 */
globalStyle(
  `${fillMenu}.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
  ${fillMenu}.ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content`,
  {
    display: 'block',
    height: '36px',
    lineHeight: '36px',
    padding: '0 12px',
    borderRadius: vars.borderRadiusBase,
  },
);
/** title 被选中 */
globalStyle(`${fillMenu}.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected`, {
  backgroundColor: 'transparent',
});

/** title 后面竖线 */
globalStyle(
  `${fillMenu}.ant-menu-inline .ant-menu-selected::after,
  ${fillMenu}.ant-menu-inline .ant-menu-item-selected::after`,
  {
    opacity: 0,
  },
);
/** content 被选中 */
globalStyle(`${fillMenu}.ant-menu:not(.ant-menu-inline-collapsed) .ant-menu-item-selected > .ant-menu-title-content`, {
  color: themeVars.white,
  background: themeVars.primaryColor,
  boxShadow: `0px 5px 8px 0px rgba(20,204,131,0.14)`,
});

globalStyle(
  `${fillMenu}.ant-menu-inline .ant-menu-item:not(:last-child),
  ${fillMenu}.ant-menu-vertical .ant-menu-item:not(:last-child),
  ${fillMenu}.ant-menu-vertical-left .ant-menu-item:not(:last-child),
  ${fillMenu}.ant-menu-vertical-right .ant-menu-item:not(:last-child)`,
  {
    marginBottom: '10px',
    marginTop: '10px',
  },
);

globalStyle(`${fillMenu}.ant-menu-inline .ant-menu-item`, {
  marginBottom: '10px',
  marginTop: '10px',
});

/** 折叠时 title样式 */
globalStyle(
  `${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title`,
  {
    padding: '0 calc(50% - 36px /2)',
  },
);

/** 折叠时 icon样式 */
globalStyle(
  `${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item > .ant-menu-title-content > .anticon,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item > .ant-menu-title-content > .anticon,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title > .ant-menu-title-content > .anticon,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title > .ant-menu-title-content > .anticon,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed > .ant-menu-item > .ant-menu-title-content > a > .anticon`,
  {
    width: '36px',
    height: '36px',
    borderRadius: vars.borderRadiusBase,
  },
);

/** 折叠被选中时 icon样式 */
globalStyle(
  `${fillMenu}.ant-menu.ant-menu-inline-collapsed:not(.ant-menu-horizontal) .ant-menu-item-selected > .ant-menu-title-content > .anticon,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed:not(.ant-menu-horizontal) .ant-menu-item-selected > .ant-menu-title-content > a > .anticon`,
  {
    color: themeVars.white,
    backgroundColor: themeVars.primaryColor,
  },
);

/** 折叠 hover icon样式 */
globalStyle(
  `${fillMenu}.ant-menu.ant-menu-inline-collapsed:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected) > .ant-menu-title-content:hover > .anticon,
  ${fillMenu}.ant-menu.ant-menu-inline-collapsed:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected) > .ant-menu-title-content:hover > a > .anticon`,
  {
    backgroundColor: themeVars.itemHoverBg,
  },
);

globalStyle(
  `${fillMenu}.ant-menu-inline,
  ${fillMenu}.ant-menu-vertical,
  ${fillMenu}.ant-menu-vertical-left`,
  {
    borderRightColor: 'transparent',
  },
);

globalStyle(
  `${fillMenu} .ant-menu-item .anticon,
  ${fillMenu} .ant-menu-item .anticon + span`,
  {
    transition: 'none',
  },
);

globalStyle(`${fillMenu} .ant-menu-item:not(.ant-menu-item-selected) > .ant-menu-title-content > .anticon`, {
  color: themeVars.iconButtonColor,
});

/** 折叠时tooltip样式 */
globalStyle(`.ant-menu-inline-collapsed-tooltip .ant-tooltip-arrow-content::before`, {
  background: themeVars.textColor,
});

globalStyle(`.ant-tooltip.ant-menu-inline-collapsed-tooltip.ant-tooltip-placement-right`, {
  paddingLeft: '6px',
});

globalStyle(`.ant-menu-inline-collapsed-tooltip .ant-tooltip-inner.ant-tooltip-inner`, {
  color: themeVars.white,
  backgroundColor: themeVars.textColor,
});

globalStyle(
  `.ant-menu-inline-collapsed-tooltip .ant-tooltip-inner > .anticon,
.ant-menu-inline-collapsed-tooltip .ant-tooltip-inner > a > .anticon`,
  {
    display: 'none',
  },
);
globalStyle(
  `.ant-menu-vertical .ant-menu-submenu,
  .ant-menu-vertical-left .ant-menu-submenu,
  .ant-menu-vertical-right .ant-menu-submenu,
  .ant-menu-inline .ant-menu-submenu`,
  {
    margin: '0 1px',
  },
);
