import { style } from "@vanilla-extract/css";
import { commonVars } from "../common.css";

/** 标题 */
const title = style({
  fontWeight: commonVars.fontWeightBold,
});

/** 大尺寸标题，字号：20px */
export const titleLg = style([title, {
  fontSize: '20px'
}]);

/** 大尺寸标题，字号：16px */
export const titleMd = style([title, {
  fontSize: '16px'
}]);

export const titleSm = style([title, {
  fontSize: '14px'
}]);