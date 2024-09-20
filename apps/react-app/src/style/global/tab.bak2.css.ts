import { globalStyle, style } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';

globalStyle(
  `.ant-tabs.ant-tabs-top.ant-tabs-card > .ant-tabs-nav,
  .ant-tabs.ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav`,
  {
    color: colorVars.lightTextColor,
  },
);

globalStyle(
  `.ant-tabs.ant-tabs-top.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs.ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab`,
  {
    backgroundColor: colorVars.btnTextHoverBg,
    color: colorVars.lightTextColor,
  },
);

globalStyle(
  `.ant-tabs.ant-tabs-top.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover,
  .ant-tabs.ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover`,
  {
    backgroundColor: colorVars.grayHoverBg,
    color: colorVars.lightTextColor,
  },
);
globalStyle(
  `.ant-tabs.ant-tabs-top.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs.ant-tabs-top.ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active`,
  {
    color: colorVars.primaryColor,
    backgroundColor: colorVars.white,
  },
);

const tabLeftCard = '.ant-tabs.ant-tabs-left.ant-tabs-card';
globalStyle(`${tabLeftCard} .ant-tabs-nav`, {
  padding: `0 ${commonVars.paddingLg}`,
});

globalStyle(`${tabLeftCard} .ant-tabs-nav .ant-tabs-tab`, {
  height: '32px',
  lineHeight: '32px',
  borderRadius: commonVars.borderRadiusBase,
  padding: `0 ${commonVars.padding12}`,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
});

globalStyle(`${tabLeftCard} .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab`, {
  marginTop: commonVars.marginXss,
});

globalStyle(`${tabLeftCard} .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):not(.ant-tabs-tab-disabled):hover`, {
  backgroundColor: colorVars.grayHoverBg,
  color: colorVars.textColor,
});

globalStyle(`${tabLeftCard} .ant-tabs-nav .ant-tabs-tab .ant-tabs-tab-btn`, {
  margin: '0 auto',
});

globalStyle(`${tabLeftCard} .ant-tabs-nav .ant-tabs-tab-active`, {
  backgroundColor: colorVars.primaryColor,
});

globalStyle(`${tabLeftCard} .ant-tabs-nav .ant-tabs-tab-active .ant-tabs-tab-btn`, {
  color: colorVars.white,
});

globalStyle(`${tabLeftCard} .ant-tabs-nav-more`, {
  display: 'none',
});

export const ghostTabCard = style({});

globalStyle(`${ghostTabCard}.ant-tabs-card.ant-tabs-top .ant-tabs-content`, {
  height: '120px',
  marginTop: '-10px',
});

globalStyle(`${ghostTabCard}.ant-tabs-card.ant-tabs-top .ant-tabs-content > .ant-tabs-tabpane`, {
  padding: '16px',
  background: '#fff',
});

globalStyle(`${ghostTabCard}.ant-tabs-card.ant-tabs-top > .ant-tabs-nav::before`, {
  display: 'none',
});

globalStyle(`${ghostTabCard}.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab`, {
  height: '32px',
  lineHeight: '32px',
  background: 'transparent',
  borderColor: 'transparent',
  padding: '4px 12px',
});

globalStyle(
  `${ghostTabCard}.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab:not(.ant-tabs-tab-active):hover`,
  {
    color: colorVars.textColor,
    background: colorVars.grayHoverBg,
  },
);

globalStyle(`${ghostTabCard}.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active`, {
  background: '#fff',
  borderColor: '#fff',
});
