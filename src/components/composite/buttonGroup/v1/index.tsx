import styled from "@emotion/styled";
import * as React from "react";
import { Theme } from "../../../../themes/interface";
import { Button as ButtonBase } from "../../../elements/button/v1";
import { Box } from "../../../layout/box/v1";
import { IButtonGroup } from "./interface";

const buttonGroupStyle = ({ rounded = true, theme }: { theme: Theme; rounded?: boolean }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  borderRadius: rounded && "10px",
  overflow: "hidden",
});

const Base: IButtonGroup = styled(({ className, children }: Props<IButtonGroup>) => {
  return (
    <Box className={className}>
      {Array.isArray(children)
        ? [...children.slice(0, -1), React.cloneElement(children.slice(-1)[0], { isLast: true })]
        : children}
    </Box>
  );
})(buttonGroupStyle);

const commonItemsStyle = ({ theme, isLast = false }: { theme: Theme; isLast?: boolean }) => ({
  borderRadius: 0,
  borderWidth: 0,
  paddingRight: theme.grid.step(5),
  paddingLeft: theme.grid.step(5),
  borderRight: !isLast && `1px solid black`,
});

const Button = (styled as StyledFixed)(ButtonBase)(
  {
    width: "100%",
  },
  commonItemsStyle
);

const ButtonGroup: typeof Base & { Button: typeof Button } = Base as any;
(ButtonGroup as any).Button = Button;

export { ButtonGroup };
