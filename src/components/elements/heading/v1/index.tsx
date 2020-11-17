import styled from "@emotion/styled";
import React from "react";

import { color } from "../../../../traits/color";
import { T } from "../../text/v1";
import { Interface } from "./interface";

const SIZES = {
  1: {
    fontSize: 900,
    fontWeight: 700,
    lineHeight: 9,
  },
  2: {
    fontSize: 800,
    fontWeight: 700,
    lineHeight: 7,
  },
  3: {
    fontSize: 700,
    fontWeight: 700,
    lineHeight: 5,
  },
  4: {
    fontSize: 600,
    fontWeight: 700,
    lineHeight: 4,
  },
  5: {
    fontSize: 600,
    fontWeight: 600,
    lineHeight: 4,
  },
  6: {
    fontSize: 600,
    fontWeight: 500,
    lineHeight: 4,
  },
} as const;

const Heading = (styled as StyledFixed)(({ level, ...rest }: Props<Interface>) => (
  <T {...SIZES[level]} role="heading" {...rest} />
))(color);

export { Heading as H };
