import { jsx } from "@emotion/core";
/** @jsx jsx */
import React, { useEffect, useState } from "react";

import type { Interface } from "./interface";
const subs = new Map<(w: number) => void, (w: number) => void>();
const listener = (e: UIEvent) => subs.forEach((s) => s(window?.outerWidth || Infinity));
window?.addEventListener("resize", listener);

export const useScreenWidth = () => {
  const [width, setWidth] = useState(window?.outerWidth || Infinity);
  useEffect(() => {
    const listener = (w: number) => setWidth(w);
    subs.set(listener, listener);
    return () => void subs.delete(listener);
  }, []);
  return width;
};

export const ScreenSize: Interface = React.memo(({ children, minDisplayWidth }) => {
  const screenWidth = useScreenWidth();
  if (screenWidth < minDisplayWidth) {
    return null;
  }
  return <React.Fragment>{children}</React.Fragment>;
});

export const ScreenSizeWrapper = <Props extends {}>(Component: React.ComponentType<Props>) =>
  React.memo(({ minDisplayWidth, ...props }: Props & { minDisplayWidth?: number }) =>
    minDisplayWidth ? (
      <ScreenSize minDisplayWidth={minDisplayWidth}>
        <Component {...(props as Props)} />
      </ScreenSize>
    ) : (
      <Component {...(props as Props)} />
    )
  );
