import { style } from '@vanilla-extract/css';

export const scrollbar = style({
  selectors: {
    /* 用于Chrome和Safari浏览器的滚动条样式 */
    '&::-webkit-scrollbar': {
      width: '8px' /* 设置滚动条宽度 */,
    },
    /* 滚动条中间滑块的样式 */
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '8px' /* 设置滑块的圆角大小 */,
      backgroundColor: 'rgba(0, 0, 0, 0.1)' /* 设置滑块的背景颜色 */,
      // backgroundColor: '#409efe' /* 设置滑块的背景颜色 */,
      // boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2)' /* 添加滑块的投影效果 */,
      // border: '2px solid #f4f5f7',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)' /* 设置滑块的背景颜色 */,
    },
    /* 滚动条轨道的样式 */
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
      // backgroundColor: '#f1f1f1' /* 设置轨道背景颜色 */,
      borderRadius: '8px' /* 设置轨道的圆角大小 */,
      // boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.2)' /* 添加轨道的投影效果 */,
    },
  },
});

export const thinScrollBar = style({
  selectors: {
    /* 用于Chrome和Safari浏览器的滚动条样式 */
    '&::-webkit-scrollbar': {
      width: `6px` /* 设置滚动条宽度 */,
    },
    /* 滚动条中间滑块的样式 */
    '&::-webkit-scrollbar-thumb': {
      borderRadius: `6px` /* 设置滑块的圆角大小 */,
      backgroundColor: 'rgba(0, 0, 0, 0.2)' /* 设置滑块的背景颜色 */,
      // boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2)' /* 添加滑块的投影效果 */,
      // border: '2px solid #f4f5f7',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)' /* 设置滑块的背景颜色 */,
    },
    /* 滚动条轨道的样式 */
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
      // backgroundColor: '#f1f1f1' /* 设置轨道背景颜色 */,
      borderRadius: `3px` /* 设置轨道的圆角大小 */,
      // boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.2)' /* 添加轨道的投影效果 */,
    },
  },
});

export const hiddenBar = style({
  selectors: {
    /* 用于Chrome和Safari浏览器的滚动条样式 */
    '&::-webkit-scrollbar': {
      width: `0` /* 设置滚动条宽度 */,
    },
  },
});
