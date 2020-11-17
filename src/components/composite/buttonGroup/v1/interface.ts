import { ComponentType, ReactElement } from "react";

export type IButtonGroup = ComponentType<{
  rounded?: boolean;
  children: ReactElement | ReactElement[];
  className?: string;
}>;
