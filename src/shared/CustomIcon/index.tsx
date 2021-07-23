import styled, { css } from 'styled-components';
import { StyledThemePropsType } from '../../config/theme';
import { DefinedColors, DefinedIcons } from '../../types/index';
import Icons from '../icons';

export type CustomIconProps = {
    icon: DefinedIcons;
    iconColor: DefinedColors;
    isHovered?: boolean;
    pointer?: boolean;
    hoverColor?: DefinedColors;
    opacity?: number;
    width?: string;
    height?: string;
    margin?: string;
};

const height = css<CustomIconProps>`
    height: ${(props: CustomIconProps) => props.height}px;
`;

const width = css<CustomIconProps>`
    width: ${(props: CustomIconProps) => props.width}px;
    flex: 0 0 ${(props: CustomIconProps) => props.width}px;
`;

const margin = css<CustomIconProps>`
    margin: ${(props: CustomIconProps) => props.margin};
`;

const opacity = css<CustomIconProps>`
    opacity: ${(props: CustomIconProps) => props.opacity};
`;

const CustomIcon = styled.div<CustomIconProps>`
    display: inline-block;
    margin: 0 8px 0 0;
    height: 16px;
    width: 16px;
    flex: 0 0 16px;
    pointer-events: none;

    ${(props: CustomIconProps) => props.opacity && opacity};
    ${(props: CustomIconProps) => props.margin && margin};
    ${(props: CustomIconProps) => props.height && height};
    ${(props: CustomIconProps) => props.width && width};
    ${(props: CustomIconProps) => props.pointer && 'cursor: pointer'};
    background-color: ${(props: StyledThemePropsType & CustomIconProps) => {
        const colorOnHover = props.hoverColor
            ? props.theme.colors[props.hoverColor]
            : props.theme.colors.textOnDark;
        const defaultColor = props.theme.colors[props.iconColor];

        return props.isHovered ? colorOnHover : defaultColor;
    }};
    mask: url(${(props: CustomIconProps) => Icons[props.icon]}) no-repeat center;
    mask-size: contain;
`;

export default CustomIcon;
