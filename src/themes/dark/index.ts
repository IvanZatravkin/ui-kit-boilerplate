import Color from "color";

import type { Theme } from "../interface";

const colorMixin = (diff: number) => (color: string) => Color(color).darken(diff).rgb().string();

const theme: Theme = {
  background: {
    colors: {
      bright: "#868996",
      contrast: "#3C4D72",
      dark: "#21232E",
      main: "#393D46",
    },
  },
  actionColors: {
    neutral: "#303030",
    confirm: "#479317",
    active: "#4F5464",
    disabled: "#636363",
    error: "#B00022",
    success: "#28A745",
    warning: "#F8B200",
  },
  get allColors() {
    return { ...this.actionColors, ...this.background.colors };
  },
  borders: {
    colors: {
      main: "#111",
    },
  },
  links: {
    colors: {
      main: "#e5ebec",
    },
  },
  colorMixing: {
    darken: (color, n) => Color(color).darken(n).hex(),
    active: colorMixin(1 / 4),
    hover: colorMixin(1 / 8),
    transparency: (color, depth) => Color(color).alpha(depth).rgb().string(),
  },
  font: {
    colors: {
      contrast: "#2A8ABD",
      highlight: "#86A9BC",
      main: "#E5EBEC",
      error: "#B00022",
      critical: "#FB3737",
    },
    shadows: { main: "0px 0px 3px rgba(0, 0, 0, 0.6)" },
    sizes: {
      100: "10px",
      200: "11px",
      300: "12px",
      400: "13px",
      500: "14px",
      600: "20px",
      700: "25px",
      800: "35px",
      900: "45px",
    },
    weights: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
  },
  grid: { step: (x) => x * 5 + "px" },
  transitions: { main: "transition: all 0.25s ease" },
};

export { theme as dark };
