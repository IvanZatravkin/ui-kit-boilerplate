import { Theme } from "../themes/interface";

export const textAlign = ({
  textAlign = "left",
}: {
  textAlign?: "center" | "justify" | "left" | "right" | "start" | "end";
}) => ({
  textAlign,
});
