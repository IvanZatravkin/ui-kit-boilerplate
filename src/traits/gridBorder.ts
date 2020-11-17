import { Theme } from "../themes/interface";

export const gridBorder = ({
  border = 0,
  borderLeft = border,
  borderRight = border,
  borderBottom = border,
  borderTop = border,
  borderColor = "main",
  theme,
}: {
  border?: number;
  borderLeft?: number;
  borderRight?: number;
  borderBottom?: number;
  borderTop?: number;
  borderColor?: keyof Theme["borders"]["colors"];
  theme: Theme;
}) => ({
  boxShadow: `
    ${borderRight}px 0 0 0 ${theme.borders.colors[borderColor]}, 
    0 ${borderBottom}px 0 0 ${theme.borders.colors[borderColor]}, 
    ${borderRight}px ${borderBottom}px 0 0 ${theme.borders.colors[borderColor]},
    ${borderLeft}px 0 0 0 ${theme.borders.colors[borderColor]} inset, 
    0 ${borderTop}px 0 0 ${theme.borders.colors[borderColor]} inset
  `,
  border: "none",
});
