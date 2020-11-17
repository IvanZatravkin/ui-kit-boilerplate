import type { ComponentType, MouseEvent, ReactNode } from "react";

import { Theme } from "../../../../themes/interface";

export type Interface = ComponentType<{
  onClick?: (e: MouseEvent) => void;
  children?: string | ReactNode;
  className?: string;
  type?: keyof Theme["actionColors"];
  disabled?: boolean;
  role?: string;
}>;
