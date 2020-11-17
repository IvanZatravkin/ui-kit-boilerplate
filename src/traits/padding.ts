import { Theme } from "../themes/interface";

export const padding = ({
  p,
  pT,
  pB,
  pR,
  pL,
  theme,
}: {
  p?: number;
  pT?: number;
  pB?: number;
  pR?: number;
  pL?: number;
  theme: Theme;
}) => ({
  padding: p ? theme.grid.step(p) : undefined,
  paddingLeft: typeof pL === "number" ? theme.grid.step(pL) : undefined,
  paddingRight: typeof pR === "number" ? theme.grid.step(pR) : undefined,
  paddingTop: typeof pT === "number" ? theme.grid.step(pT) : undefined,
  paddingBottom: typeof pB === "number" ? theme.grid.step(pB) : undefined,
});
