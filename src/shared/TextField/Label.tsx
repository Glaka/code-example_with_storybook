import styled from "styled-components";
import { LabelStyle } from "../../typography/index";
import { DefaultFlexStyles } from "../../styles/index";

const LabelWithMargin = styled.div`
  ${LabelStyle};
  ${DefaultFlexStyles};
  justify-content: flex-start;
  margin-bottom: 4px;
`;

export const LabelWithLeftMargin = styled(LabelWithMargin)`
  margin-left: 18px;
`;

export const LabelOptional = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.textSecondary};
    margin-left: 5px;
  `}
`;

export default LabelWithMargin;
