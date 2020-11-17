export const position = ({
  position = "relative",
  left = "auto",
  right = "auto",
  top = "auto",
  bottom = "auto",
  zIndex,
}: {
  position?: "relative" | "absolute";
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  zIndex?: number;
}) => ({
  position,
  left,
  right,
  top,
  bottom,
  zIndex,
});
