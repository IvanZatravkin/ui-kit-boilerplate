import { Theme } from "../themes/interface";

export const fontSize = ({ fontSize = 500, theme }: { fontSize?: keyof Theme["font"]["sizes"]; theme: Theme }) => ({
  fontSize: theme.font.sizes[fontSize],
});
