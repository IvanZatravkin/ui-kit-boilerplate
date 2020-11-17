import { Theme } from "../themes/interface";

export const color = ({ color = "main", theme }: { color?: keyof Theme["font"]["colors"]; theme: Theme }) => ({
  color: theme.font.colors[color],
});
