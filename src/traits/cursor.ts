export const cursor = ({
  interactive,
  cursor = interactive ? "pointer" : "inherit",
}: {
  cursor?: "pointer" | "inherit" | "grab" | "grabbing" | "move";
  interactive?: boolean;
}) => ({
  cursor,
});
