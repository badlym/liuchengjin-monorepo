import { globalStyle } from "@vanilla-extract/css";

globalStyle('.blue .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before', {
  order: 2
});

globalStyle('.blue .ant-form-item-label > label::after', {
  order: 3
});