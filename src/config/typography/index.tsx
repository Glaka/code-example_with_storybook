import styled, { css } from "styled-components";
import { StyledThemePropsType, TypographyKeyType } from "../../config/theme";

const buildTypographyStyle = (typographyKey: TypographyKeyType) => {
  return css`
    font-weight: ${(props: StyledThemePropsType) => props.theme.typography[typographyKey].fontWeight};
    font-size: ${(props: StyledThemePropsType) => props.theme.typography[typographyKey].fontSize};
    line-height: ${(props: StyledThemePropsType) => props.theme.typography[typographyKey].lineHeight};
    color: ${(props: StyledThemePropsType) => props.theme.typography[typographyKey].color};
  `;
};

export const H1Style = buildTypographyStyle("h1");
export const H2Style = buildTypographyStyle("h2");
export const H3Style = buildTypographyStyle("h3");
export const H4Style = buildTypographyStyle("h4");
export const H5Style = buildTypographyStyle("h5");
export const BodyStyle = buildTypographyStyle("body");
export const BodySmallStyle = buildTypographyStyle("bodySmall");
export const LabelStyle = buildTypographyStyle("label");
export const CaptionStyle = buildTypographyStyle("caption");

export const H1 = styled.div`
  ${H1Style}
`;
export const H2 = styled.div`
  ${H2Style}
`;
export const H3 = styled.div`
  ${H3Style}
`;
export const H4 = styled.div`
  ${H4Style}
`;
export const H5 = styled.div`
  ${H5Style}
`;
export const Body = styled.div`
  ${BodyStyle}
`;
export const BodySmall = styled.div`
  ${BodySmallStyle}
`;
export const Label = styled.div`
  ${LabelStyle}
`;
export const Caption = styled.div`
  ${CaptionStyle}
`;

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  Body,
  BodySmall,
  Label,
  Caption,
};
