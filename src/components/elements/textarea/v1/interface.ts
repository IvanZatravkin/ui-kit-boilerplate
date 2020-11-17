import type { ComponentType, KeyboardEvent } from "react";

export type SizesType = "xs" | "m" | "l" | "xl";

export type Interface = ComponentType<{
  onChange: (val: string) => void;
  value: string;
  size?: SizesType;
  className?: string;
  onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}>;
