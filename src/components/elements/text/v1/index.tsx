import styled from "@emotion/styled";
import React from "react";

import { color } from "../../../../traits/color";
import { fontSize } from "../../../../traits/fontSize";
import { fontWeight } from "../../../../traits/fontWeight";
import { lineHeight } from "../../../../traits/lineHeight";
import { opacity } from "../../../../traits/opacity";
import { whiteSpace } from "../../../../traits/whiteSpace";
import { Interface } from "./interface";

const Text = (styled as StyledFixed)(({ onClick, className, children, role }: Props<Interface>) => (
  <span onClick={onClick} className={className} role={role}>
    {children}
  </span>
))(color, fontSize, opacity, fontWeight, lineHeight, whiteSpace);

export { Text as T };
