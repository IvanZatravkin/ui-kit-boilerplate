/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

import { background } from "../../../../traits/background";
import { gridBorder } from "../../../../traits/gridBorder";
import { margin } from "../../../../traits/margin";
import { opacity } from "../../../../traits/opacity";
import { width } from "../../../../traits/width";
import { ScreenSizeWrapper, useScreenWidth } from "../../../conditionals/ScreenSize/v1";
import { View } from "../../../elements/view/v1";

const Base = (styled as StyledFixed)(View)({ flexFlow: "column" }, background, opacity, width, margin, gridBorder);

type ChildrenOfType<T> = React.ReactElement<T> | React.ReactElement<T>[];
const Row = (styled as StyledFixed)(
  ({
    children,
    breakpoint = 0,
    ...props
  }: Props<typeof View> & {
    children: ChildrenOfType<{ span?: number; minDisplayWidth?: number }>;
    breakpoint?: number;
  }) => {
    const width = useScreenWidth();
    let totalSpan = 0;
    React.Children.forEach(
      children,
      ({ props: { minDisplayWidth = 0, span = 1 } } = { props: {} } as any) =>
        (totalSpan += width > minDisplayWidth ? span : 0)
    );
    return (
      <View
        {...props}
        children={React.Children.map(children, (c) =>
          React.cloneElement(c, {
            ...c.props,
            span: breakpoint && width < breakpoint ? 1 : (c.props.span ?? 1) / totalSpan,
          })
        )}
        css={{ flexFlow: width > breakpoint ? "row" : "column" }}
      />
    );
  }
)(background, gridBorder, margin);

const flexColumn = ({ span = 1 }: { span?: number }) => ({
  flexGrow: span,
  flexBasis: 100 * span + "%",
  flexFlow: "column",
  minWidth: 100 * span + "%",
  maxWidth: 100 * span + "%",
  width: 100 * span + "%",
  overflow: "hidden",
});

const Col = (styled as StyledFixed)(ScreenSizeWrapper(View))(background, flexColumn, gridBorder);

const Grid: typeof Base & { Col: typeof Col; Row: typeof Row } = Base as any;
(Grid as any).Row = Row;
(Grid as any).Col = Col;

export { Grid };
