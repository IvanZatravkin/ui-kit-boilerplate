import { Theme } from "../themes/interface";

export const lineHeight = ({ lineHeight = 4, theme }: { lineHeight?: number; theme: Theme }) => ({
  lineHeight: theme.grid.step(lineHeight),
});
