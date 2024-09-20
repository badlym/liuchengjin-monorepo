import { globalStyle } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';
import { themeVars } from '../global.css';

globalStyle('.ant-message .anticon.anticon', {
  fontSize: '18px',
  verticalAlign: 'text-bottom',
});

globalStyle('.ant-message-custom-content', {
  minWidth: 360,
  minHeight: 48,
  borderRadius: commonVars.borderRadiusBase,
  padding: `${commonVars.padding12} ${commonVars.paddingXl}`,
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
});

globalStyle('.ant-message-warning', {
  background: colorVars.messageWarningBgColor,
  border: `1px solid ${colorVars.warningColor}`,
  color: colorVars.warningColor,
});

globalStyle('.ant-message-error', {
  background: colorVars.messageErrorBgColor,
  border: `1px solid ${colorVars.errorColor}`,
  color: colorVars.errorColor,
});

globalStyle('.ant-message-success', {
  background: colorVars.messageSuccessBgColor,
  border: `1px solid ${colorVars.successColor}`,
  color: colorVars.successColor,
});

globalStyle('.ant-message-info', {
  background: colorVars.messageInfoBgColor,
  border: `1px solid ${colorVars.linkColor}`,
  color: colorVars.linkColor,
});

globalStyle('.ant-message-info>.anticon.anticon', {
  color: colorVars.linkColor,
  marginRight: commonVars.marginMd,
});

globalStyle('.ant-alert-info > .ant-alert-content > .ant-alert-message', {
  color: colorVars.linkColor,
});
globalStyle('.ant-alert-warning > .ant-alert-content > .ant-alert-message', {
  color: colorVars.warningColor,
});

globalStyle(`.h5-message`, {});

globalStyle(`.h5-message span.anticon`, {
  display: 'none',
});

globalStyle(`.h5-message .ant-message-success`, {
  display: 'inline-block',
  minWidth: 'auto',
  minHeight: 'auto',
  color: themeVars.white,
  padding: '12px 16px',
  background: '#14161A',
  boxShadow: `0px 3px 6px 0px rgba(0,0,0,0.12)`,
  borderRadius: '10px',
  border: 'none',
  whiteSpace: 'pre-wrap',
  maxWidth: '300px',
  lineHeight: '20px',
  textAlign: 'center',
});
