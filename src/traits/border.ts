import { Theme } from "../themes/interface";

export const border = ({
  border = 0,
  borderColor = "main",
  borderRadius = 0,
  theme,
}: {
  border?: number;
  borderColor?: keyof Theme["borders"]["colors"];
  borderRadius?: number;
  theme: Theme;
}) => ({
  border: `${border}px solid ${theme.borders.colors[borderColor]}`,
  borderRadius,
});
