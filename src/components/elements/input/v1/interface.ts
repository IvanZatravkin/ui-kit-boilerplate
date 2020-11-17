import type { ComponentType, KeyboardEvent } from "react";

export type Interface = ComponentType<{
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: "text" | "password";
  className?: string;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}>;
