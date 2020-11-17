import styled from "@emotion/styled";
import React from "react";

import { Theme } from "../../../../themes/interface";
import { Box } from "../../../layout/box/v1";
import type { Interface } from "./interface";

export const Button: Interface = styled(
  ({ type = "neutral", disabled = false, onClick, className, children, role = "button" }: Props<Interface>) => (
    <Box
      p={2}
      onClick={disabled ? undefined : onClick}
      className={className}
      bg={type}
      interactive={disabled ? undefined : true}
      role={role}
    >
      {children}
    </Box>
  )
)(
  {
    width: "100%",
    justifyContent: "center",
    borderRadius: "3px",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
  },
  ({ disabled = false, type = "neutral", theme }: Props<Interface> & { theme: Theme }) =>
    disabled ? { background: theme.colorMixing.active(theme.allColors[type]) } : {}
);
