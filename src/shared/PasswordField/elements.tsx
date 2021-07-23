import styled from "styled-components";
import { IconButton } from "./IconButton";
import { Wrapper, Input, HelpText } from "../TextField/elements";

// ICON
type ImgProps = {
  src: "image/svg+xml";
  alt: string;
};

const Icon = styled.img<ImgProps>`
  width: 14px;
  height: 14px;
`;

// EXPORT
export { Wrapper, Input, Icon, IconButton, HelpText };
