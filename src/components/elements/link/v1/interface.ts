import type { ComponentType, ReactNode } from "react";

export type Interface = ComponentType<{
  children: string | ReactNode | ((onClick: () => void) => ReactNode);
  className?: string;
  to: string;
}>;
