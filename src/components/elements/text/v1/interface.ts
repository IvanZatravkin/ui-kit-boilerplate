import type { ComponentType, ReactNode } from "react";

export type Interface = ComponentType<{
  onClick?: () => void;
  children: string | undefined | number | ReactNode;
  className?: string;
  role?: string;
}>;
