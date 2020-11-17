import { Theme } from "../themes/interface";

export const margin = ({
  m,
  mL,
  mT,
  mR,
  mB,
  theme,
}: {
  m?: number | "auto";
  mL?: number | "auto";
  mT?: number | "auto";
  mR?: number | "auto";
  mB?: number | "auto";
  theme: Theme;
}) => ({
  margin: typeof m == "number" ? theme.grid.step(m) : m,
  marginLeft: typeof mL == "number" ? theme.grid.step(mL) : mL,
  marginRight: typeof mR == "number" ? theme.grid.step(mR) : mR,
  marginTop: typeof mT == "number" ? theme.grid.step(mT) : mT,
  marginBottom: typeof mB == "number" ? theme.grid.step(mB) : mB,
});
