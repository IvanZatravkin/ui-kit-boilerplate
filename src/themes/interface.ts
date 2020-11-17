type weighted = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export interface Theme {
  font: {
    sizes: weighted;
    colors: {
      main: string;
      contrast: string;
      highlight: string;
      error: string;
      critical: string;
    };
    shadows: {
      main: string;
    };
    weights: weighted;
  };
  background: {
    colors: {
      main: string;
      contrast: string;
      bright: string;
      dark: string;
    };
  };
  borders: {
    colors: {
      main: string;
    };
  };
  links: {
    colors: {
      main: string;
    };
  };
  actionColors: {
    neutral: string;
    warning: string;
    success: string;
    error: string;
    disabled: string;
    confirm: string;
    active: string;
  };
  allColors: this["actionColors"] & this["background"]["colors"];
  colorMixing: {
    darken: (color: string, n: number) => string;
    hover: (color: string) => string;
    active: (color: string) => string;
    transparency: (color: string, depth: number) => string;
  };
  transitions: {
    main: string;
  };
  grid: {
    step: (x: number) => string;
  };
}
