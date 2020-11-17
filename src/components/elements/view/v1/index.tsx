/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

import { alignItems } from "../../../../traits/alignItems";
import { cursor } from "../../../../traits/cursor";
import { height } from "../../../../traits/height";
import { justifyContent } from "../../../../traits/justifyContent";
import { overflow } from "../../../../traits/overflow";
import { padding } from "../../../../traits/padding";
import { transition } from "../../../../traits/transition";

type IProps = {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  role?: string;
};

// @ts-ignore
export const View = styled(({ css, children, className, onClick, role }: IProps) => (
  <div className={className} css={css} children={children} onClick={onClick} role={role} />
))(cursor, overflow, padding, transition, { display: "flex" }, justifyContent, alignItems, height);
