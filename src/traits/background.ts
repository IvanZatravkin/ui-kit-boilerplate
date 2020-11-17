import { Theme } from "../themes/interface";

export const background = ({
  bg,
  theme,
  interactive = false,
}: {
  bg?: keyof Theme["allColors"];
  theme: Theme;
  interactive?: boolean;
}) => ({
  background: bg ? theme.allColors[bg] : "transparent",
  ...(interactive
    ? {
        "&:hover": {
          background: bg ? theme.colorMixing.hover(theme.allColors[bg]) : "transparent",
        },
        "&:active": {
          background: bg ? theme.colorMixing.active(theme.allColors[bg]) : "transparent",
        },
      }
    : {}),
});
