import { globalStyle, style } from "@vanilla-extract/css";

export const deleteConfirm = style({

});

globalStyle(`${deleteConfirm} .ant-popover-inner-content`, {
  padding: '16px 20px',
});

globalStyle(`${deleteConfirm} .ant-popover-message`, {
  padding: '2px 0 20px',
});

globalStyle(`${deleteConfirm} .ant-btn.ant-btn-sm`, {
  minWidth: 68,
  height: 32
});

