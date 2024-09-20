import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../global.css';

// globalStyle('.ant-picker-date-panel .ant-picker-content .ant-picker-cell .ant-picker-cell-inner', {
//   borderRadius: '50%'
// });
// globalStyle('.ant-picker-date-panel .ant-picker-content .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner', {
//   borderRadius: '50%'
// });
// globalStyle('.ant-picker-date-panel .ant-picker-content .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner', {
//   borderRadius: '50%'
// });

globalStyle('.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner', {
  // borderRadius: '50%'
  color: themeVars.primaryColor,
});
globalStyle(
  `.ant-picker-date-panel .ant-picker-content .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before`,
  {
    borderColor: 'transparent',
  },
);

// globalStyle(
//   '.ant-picker-date-panel .ant-picker-content .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before',
//   {
//     borderColor: 'transparent',
//   },
// );

// globalStyle('.ant-picker-date-panel .ant-picker-content .ant-picker-cell .ant-picker-cell-inner', {
//   borderRadius: '50%'
// });

globalStyle(
  `.ant-picker.ant-picker:hover,
  .ant-picker.ant-picker-focused`,
  {
    borderColor: themeVars.primaryColor,
  },
);
