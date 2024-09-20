import { globalStyle } from '@vanilla-extract/css';
import { commonVars } from '../common.css';
import { colorVars } from '../theme.css';

globalStyle(
  '.ant-modal-footer>.ant-btn-default:not(:disabled),.ant-modal-confirm-btns>.ant-btn-default:not(:disabled)',
  {
    background: colorVars.btnGrayBg,
    color: colorVars.btnGrayColor,
    borderColor: colorVars.btnGrayBg,
  },
);

globalStyle(
  '.ant-modal-footer>.ant-btn-default:not(:disabled):hover, .ant-modal-confirm-btns>.ant-btn-default:not(:disabled):hover',
  {
    background: colorVars.btnGrayHoverBg,
    color: colorVars.btnGrayColor,
    borderColor: colorVars.btnGrayHoverBg,
  },
);
globalStyle('.ant-modal-close.ant-modal-close', {
  top: '10px',
  right: '7px',
});

globalStyle('.ant-modal-footer.ant-modal-footer', {
  padding: `0 ${commonVars.paddingXl} ${commonVars.paddingXl}`,
});

globalStyle('.ant-modal-confirm-body>.ant-modal-confirm-content.ant-modal-confirm-content', {
  marginTop: commonVars.paddingXl,
});

globalStyle('.ant-modal-confirm .ant-modal-confirm-btns.ant-modal-confirm-btns', {
  marginTop: commonVars.paddingXl,
});

globalStyle(`.ant-modal-footer > .ant-btn + .ant-btn:not(.ant-dropdown-trigger)`, {
  marginLeft: commonVars.marginMd,
});
