import { style, globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../global.css';

/** 修复tooltip嵌套时
 * https://alidocs.dingtalk.com/i/nodes/gvNG4YZ7JnebKz9EU24NrpO3V2LD0oRE?utm_scene=team_space&iframeQuery=anchorId%3Duu_lynts0dh0p7odlpex5je
 */
globalStyle('.ant-tooltip.ant-tooltip', {
  width: 'max-content'
});

globalStyle('.ant-tooltip-inner.ant-tooltip-inner', {
  backgroundColor: themeVars.white,
  color: themeVars.textColor,
});

/** 有些情况会出现箭头下方与内容之间又一条黑线 把箭头上移遮住黑线 */
globalStyle(`.ant-tooltip-placement-top .ant-tooltip-arrow.ant-tooltip-arrow`, {
  transform: `translateY(95%) translateX(-50%)`,
});

export const drak = style({});

globalStyle(`${drak}.ant-tooltip .ant-tooltip-arrow-content::before`, {
  background: themeVars.textColor,
});

globalStyle(`${drak}.ant-tooltip .ant-tooltip-inner.ant-tooltip-inner`, {
  color: themeVars.white,
  backgroundColor: themeVars.textColor,
});
