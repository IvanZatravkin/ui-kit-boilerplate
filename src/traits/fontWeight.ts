import { Theme } from "../themes/interface";

export const fontWeight = ({
  fontWeight = 500,
  theme,
}: {
  fontWeight?: keyof Theme["font"]["weights"];
  theme: Theme;
}) => ({
  fontWeight: theme.font.weights[fontWeight],
});
