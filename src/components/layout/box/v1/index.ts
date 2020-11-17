import styled from "@emotion/styled";

import { alignItems } from "../../../../traits/alignItems";
import { background } from "../../../../traits/background";
import { border } from "../../../../traits/border";
import { flexDirection } from "../../../../traits/flexDirection";
import { margin } from "../../../../traits/margin";
import { position } from "../../../../traits/position";
import { textAlign } from "../../../../traits/textAlign";
import { width } from "../../../../traits/width";
import { View } from "../../../elements/view/v1";

export const Box = styled(View)(flexDirection, position, background, alignItems, border, margin, width, textAlign);
