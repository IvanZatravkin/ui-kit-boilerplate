import styled from "@emotion/styled";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../button/v1";
import type { Interface } from "./interface";

export const Link: Interface = styled(({ className, to, children }: Props<Interface>) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => navigate(to), [to]);
  if (typeof children === "function") {
    return children(onClick);
  }
  return (
    <Button role="link" onClick={onClick} className={className}>
      {children}
    </Button>
  );
})();
