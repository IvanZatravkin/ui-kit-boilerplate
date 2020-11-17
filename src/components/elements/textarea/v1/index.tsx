/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { Theme } from "../../../../themes/interface";
import type { Interface, SizesType } from "./interface";

export const useTextArea = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  return { value, onChange: setValue };
};

const HEIGHT_MAP: { [key in SizesType]: string } = {
  xs: "50px",
  m: "140px",
  l: "200px",
  xl: "300px",
};

const size = ({ size = "m" }: { size?: SizesType }) => ({ height: HEIGHT_MAP[size] });
const rest = ({ theme }: { theme: Theme }) => ({
  padding: "5px",
  width: "100%",
  border: "none",
  fontSize: theme.font.sizes["500"],
  resize: "none",
  "&:focus": {
    outline: `1px solid ${theme.actionColors.active}`,
  },
});

export const TextArea: Interface = (styled as StyledFixed)(({ size = "m", onChange, ...rest }: Props<Interface>) => (
  <textarea onChange={(e) => onChange(e.target.value)} {...rest} />
))(size, rest);
