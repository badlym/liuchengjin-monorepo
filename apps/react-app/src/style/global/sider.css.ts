import { style, globalStyle, CSSProperties } from '@vanilla-extract/css';
import { themeVars } from '../global.css';

export const defaultSider = style({
  boxShadow: `1px 0px 8px 0px rgba(0,0,0,0.08)`,
});

const base: CSSProperties = {
  top: 'calc((100% - 72px) / 2)',
  width: 24,
  height: 72,
  background: themeVars.white,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  color: themeVars.textColorSecondary,
};

globalStyle(`${defaultSider} .ant-layout-sider-zero-width-trigger.ant-layout-sider-zero-width-trigger-left`, {
  ...base,
  right: -24,
  borderRadius: `0px 10px 10px 0px`,
  boxShadow: `3px 0px 8px 0px rgba(0,0,0,0.04)`,
});

globalStyle(`${defaultSider} .ant-layout-sider-zero-width-trigger.ant-layout-sider-zero-width-trigger-right`, {
  ...base,
  left: -24,
  borderRadius: `10px 0px 0px 10px`,
  boxShadow: `-3px 0px 8px 0px rgba(0,0,0,0.04)`,
});
