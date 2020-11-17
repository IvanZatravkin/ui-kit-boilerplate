import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import React, { createContext, useState } from "react";

import { dark } from "../themes";
import { Theme } from "../themes/interface";

const globalStyles = (theme: Theme) =>
  ({
    html: {
      color: theme.font.colors.main,
      background: "#000",
      fontSize: theme.font.sizes["500"],
    },
    body: {
      fontFamily: "'Open Sans', sans-serif",
    },
    "*": {
      boxSizing: "border-box",
    },
  } as const);

type CtxType = [Theme, (t: Theme) => void];

export const ThemeCtx = createContext<CtxType | null>(null);

export const Provider = React.memo(({ children }) => {
  const [theme, setTheme] = useState(dark);
  return (
    <ThemeCtx.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={{ ...theme, allColors: { ...theme.actionColors, ...theme.background.colors } }}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    </ThemeCtx.Provider>
  );
});
