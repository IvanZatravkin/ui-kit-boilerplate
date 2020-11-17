import styled from "@emotion/styled";
import React, { useState } from "react";

import { Theme } from "../../../../themes/interface";
import type { Interface } from "./interface";

const rest = ({ theme }: { theme: Theme }) => ({
  padding: "5px",
  width: "100%",
  border: "none",
  resize: "none",
  fontSize: theme.font.sizes["500"],
  "&:focus": {
    outline: `1px solid ${theme.actionColors.active}`,
  },
});

export const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  return { value, onChange: setValue };
};

export const Input: Interface = (styled as StyledFixed)(({ onChange, type = "text", ...rest }: Props<Interface>) => (
  <input type={type} onChange={(e) => onChange(e.currentTarget.value)} {...rest} />
))(rest);
