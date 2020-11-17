import { ComponentType, ReactNode } from "react";

export type Interface = ComponentType<{
  onClick?: () => void;
  children: string | undefined | number | ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}>;
