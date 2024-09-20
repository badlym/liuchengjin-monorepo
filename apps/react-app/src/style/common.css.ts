import { createGlobalTheme } from '@vanilla-extract/css';
import { baseVars as base } from './antd-base-vars.css';
import { colorVars } from './theme.css';

/** 全局变量（非颜色）定义 */
export const varsConfig = {
  ...base,

  /** 系统header区高度：64px */
  headerHeight: '64px',

  // 字体
  /** 字体 */
  fontFamily:
    '"SourceHanSansCN-Normal-Alphabetic", "Roboto-Regular", "Microsoft YaHei", "SimSun", "Helvetica Neue", Helvetica, Arial, sans-serif;',
  /** 正常字体：400 */
  fontWeightNormal: '400',
  /** 加粗字体：700 */
  fontWeightBold: '700',

  /** 标题字号：24px，待补充应用场景 */
  h1Size: '24px',
  /** 标题字号：20px，待补充应用场景 */
  h2Size: '20px',
  /** 标题字号：18px，待补充应用场景 */
  h3Size: '18px',
  /** 标题字号：16px，待补充应用场景 */
  h4Size: '16px',
  /** 标题字号：14px，待补充应用场景 */
  h5Size: '14px',
  /** 标题字号：12px，待补充应用场景 */
  h6Size: '12px',

  /** 块级元素边框 */
  border: `1px solid ${colorVars.borderColorBase}`,
  /** 最小宽度: 1250px */
  minWidth: '1250px',
  /** 最大宽度 */
  maxWidth: '2048px',

  /** -------- 自定义变量 -------- */
  iconBtnPadding: base.paddingXs,
  iconBtnSmallPadding: base.paddingXss,
  contentTitleHeight: '60px',
  scrollbarThumbWidth: '8px',

  /** 服务购买蒙层的zIndex：8888 */
  serviceMaskZIndex: '8888',
  /** 导航栏的弹出窗口的zIndex：8889 */
  headerPopZIndex: '9001',
  headerSubMenuZIndex: '9000',

  paginationAlign: 'center',
};

export const commonVars = createGlobalTheme(':root', varsConfig);
