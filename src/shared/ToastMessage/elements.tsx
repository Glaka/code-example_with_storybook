import styled, { css } from "styled-components";
import { StyledThemePropsType } from "../../../config/theme";
import { HexToRgba } from "../../helpers";
import { DefinedColors } from "../../types/index";
import { BodyStyle, H5Style } from "../../typography";
import { media } from "styled-bootstrap-grid";
import { SIDEBAR_LARGE, SIDEBAR_SMALL } from "../../layout/Sidebar/consts";

type ToastContentProps = {
  backgroundColor: DefinedColors;
  opacity: number;
  showList?: boolean;
};

export const ToastContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToastMessageWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const ToastContent = styled.div<ToastContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px 12px 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  ${({ theme, showList }: StyledThemePropsType & ToastContentProps) => {
    return showList
      ? css`
          border-bottom-right-radius: unset;
          border-bottom-left-radius: unset;
        `
      : css`
          border-radius: ${theme.sizes.halfBase};
        `;
  }};
  ${(props: StyledThemePropsType & ToastContentProps) => {
    return css`
      background-color: ${HexToRgba(props.theme.colors[props.backgroundColor], props.opacity)};
    `;
  }};
  pointer-events: none;
`;

const ToastText = styled.div`
  ${BodyStyle};
  color: ${(props: StyledThemePropsType) => props.theme.colors.textOnDark};
`;

type ToastButtonProps = {
  backgroundColor: DefinedColors;
};

const ToastButton = styled.button<ToastButtonProps>`
  ${H5Style};
  color: ${(props: StyledThemePropsType) => props.theme.colors.textOnDark};
  background-color: transparent;
  outline: none;
  border: none;
  margin: 0 0 0 16px;
  cursor: pointer;
`;

type ToastWrapperProps = {
  position?: "full" | "sidebar";
};

const ToastWrapper = styled.div<ToastWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  padding-left: ${SIDEBAR_SMALL}px;

  ${media.lg`
    padding-left: ${SIDEBAR_LARGE}px;
  `};

  ${({ position }: ToastWrapperProps) => {
    if (position === "sidebar") {
      return css`
        right: 0;
        position: absolute;
        bottom: 16px;
        width: 360px;
        padding-left: 0;
        @media (min-width: 1024px) {
          padding-left: 0;
        }
      `;
    }
  }}
`;

export { ToastContent, ToastText, ToastButton, ToastWrapper };
