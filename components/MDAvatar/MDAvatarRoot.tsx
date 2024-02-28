/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Avatar from "@mui/material/Avatar";
import { styled, Theme } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState }: { theme?: Theme | any; ownerState: any }) => {
  const { palette, typography } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { gradients, transparent, white } = palette;
  // const { pxToRem, linearGradient } = functions;
  const { size: fontWeightRegular } = typography;

  const pxToRem = (value: number) => `${value / 16}rem`;

  const boxShadows = {
    none: "none",
    xs: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    sm: "0 2px 4px 0 rgba(0, 0, 0, 0.14)",
    md: "0 3px 4px 0 rgba(0, 0, 0, 0.14)",
    lg: "0 4px 5px 0 rgba(0, 0, 0, 0.14)",
    xl: "0 6px 10px 0 rgba(0, 0, 0, 0.14)",
    xxl: "0 8px 10px 0 rgba(0, 0, 0, 0.14)",
    inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  };

  const fontSize = {
    xs: pxToRem(12),
    sm: pxToRem(14),
    md: pxToRem(16),
  };

  // backgroundImage value
  const backgroundValue = white
    // bgColor === "transparent"
    //   ? transparent.main
    //   : linearGradient(gradients[bgColor].main, gradients[bgColor].state);

  // size value
  let sizeValue;

  switch (size) {
    case "xs":
      sizeValue = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: fontSize.xs,
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: fontSize.sm,
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem(58),
        height: pxToRem(58),
        fontSize: fontSize.sm,
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem(74),
        height: pxToRem(74),
        fontSize: fontSize.md,
      };
      break;
    case "xxl":
      sizeValue = {
        width: pxToRem(110),
        height: pxToRem(110),
        fontSize: fontSize.md,
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: fontSize.md,
      };
    }
  }

  return {
    background: backgroundValue,
    color: white,
    fontWeight: fontWeightRegular,
    boxShadow: boxShadows[shadow],
    ...sizeValue,
  };
});
