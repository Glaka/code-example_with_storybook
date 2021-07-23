import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { StyledThemePropsType } from '../../config/theme';
import { BodySmallStyle, H4Style, H5Style } from '../../config/typography';
import { DefinedIcons, DefinedColors } from '../../types';
import CustomIcon from '../CustomIcon';

export type ButtonVariantType =
    | 'primary'
    | 'outlined'
    | 'text'
    | 'approve'
    | 'reject';

export type ButtonProps = {
    size?: 'm' | 'l' | 's';
    variant?: ButtonVariantType;
    disabled?: boolean;
    isLoading?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    children: string | Element | ReactNode;
    onClick?(args?: any): void;
    icon?: DefinedIcons;
    margin?: string;
    className?: string;
    iconColor?: DefinedColors;
};

const SizeS = css`
    ${BodySmallStyle};
    min-height: 24px;
    padding: 0 8px;
`;

const SizeM = css`
    ${H5Style};
    min-height: 32px;
    padding: 0 16px;
`;

const SizeL = css`
    ${H4Style};
    min-height: 40px;
    padding: 0 16px;
`;

const fullWidthStyled = css`
    width: 100%;
`;

const VariantPrimary = css`
    background: ${(props: StyledThemePropsType) => props.theme.colors.primary};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textOnDark};
    border-color: ${(props: StyledThemePropsType) =>
        props.theme.colors.primary};
    border-width: 1px;
    border-style: solid;

    &:hover {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.primaryDark};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.primaryDark};
    }

    &:active {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.infoDark};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.infoDark};
    }
`;

const VariantOutlined = css`
    background: ${(props: StyledThemePropsType) =>
        props.theme.colors.backgroundPaper};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textPrimary};
    border-color: ${(props: StyledThemePropsType) =>
        props.theme.colors.neutralLight};
    border-width: 1px;
    border-style: solid;

    &:hover {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.background};
    }

    &:active {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.neutralLight};
    }
`;

export const VariantText = css`
    background: transparent;
    color: ${(props: StyledThemePropsType) => props.theme.colors.textPrimary};
    border-color: transparent;
    border-width: 1px;
    border-style: solid;

    &:hover {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.background};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.background};
    }

    &:active {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.neutralLight};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.neutralLight};
    }

    &:focus {
        outline: none;
    }
`;

const VariantApprove = css`
    background: ${(props: StyledThemePropsType) => props.theme.colors.success};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textOnDark};
    border-color: ${(props: StyledThemePropsType) =>
        props.theme.colors.success};
    border-width: 1px;
    border-style: solid;

    &:hover {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.successDark};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.successDark};
    }

    &:active {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.successDark};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.successDark};
    }
`;

const VariantReject = css`
    background: ${(props: StyledThemePropsType) => props.theme.colors.error};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textOnDark};
    border-color: ${(props: StyledThemePropsType) => props.theme.colors.error};
    border-width: 1px;
    border-style: solid;

    &:hover {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.errorDark};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.errorDark};
    }

    &:active {
        background: ${(props: StyledThemePropsType) =>
            props.theme.colors.errorDark};
        border-color: ${(props: StyledThemePropsType) =>
            props.theme.colors.errorDark};
    }
`;

const DisabledPrimary = css`
    background: ${({ theme }: StyledThemePropsType) =>
        theme.colors.neutralLight};
    border-color: ${({ theme }: StyledThemePropsType) =>
        theme.colors.neutralLight};
    color: ${({ theme }: StyledThemePropsType) => theme.colors.textDisabled};
    pointer-events: none;
`;

const DisabledOutlined = css`
    background: ${({ theme }: StyledThemePropsType) =>
        theme.colors.backgroundPaper};
    border-color: ${({ theme }: StyledThemePropsType) =>
        theme.colors.neutralLight};
    color: ${({ theme }: StyledThemePropsType) => theme.colors.textDisabled};
    pointer-events: none;
`;

const DisabledText = css`
    color: ${({ theme }: StyledThemePropsType) => theme.colors.textDisabled};
    pointer-events: none;
`;

type LoadingSpinnerProps = {
    width?: string;
    height?: string;
};

const LoadingSpinner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: ${(props: LoadingSpinnerProps) => props.height && '16px'};
    width: ${(props: LoadingSpinnerProps) => props.width && '16px'};
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

const ButtonElement = styled.button<ButtonProps & StyledThemePropsType>`
    outline: none;
    border-radius: ${(props: StyledThemePropsType) =>
        props.theme.sizes.halfBase};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    ${(props: ButtonProps & StyledThemePropsType) => {
        switch (props.size) {
            case 'l':
                return SizeL;
            case 'm':
                return SizeM;
            case 's':
                return SizeS;
        }
    }};
    ${(props: ButtonProps & StyledThemePropsType) => {
        switch (props.variant) {
            case 'primary':
                return VariantPrimary;
            case 'outlined':
                return VariantOutlined;
            case 'text':
                return VariantText;
            case 'approve':
                return VariantApprove;
            case 'reject':
                return VariantReject;
            default:
                return VariantPrimary;
        }
    }};
    ${(props: ButtonProps & StyledThemePropsType) => {
        if (!props.disabled) return;

        switch (props.variant) {
            case 'primary':
                return DisabledPrimary;
            case 'outlined':
                return DisabledOutlined;
            case 'text':
                return DisabledText;
            default:
                return DisabledPrimary;
        }
    }};
    ${(props: ButtonProps & StyledThemePropsType) =>
        props.fullWidth && fullWidthStyled};
    ${({ isLoading }: ButtonProps) => isLoading && 'color: transparent;'}
`;

const Button: FC<ButtonProps> = ({
    size = 'm',
    variant = 'primary',
    disabled,
    children,
    fullWidth,
    onClick,
    type,
    icon,
    margin,
    className,
    isLoading = false,
    iconColor,
}) => {
    const defaultIconColor = disabled
        ? 'textDisabled'
        : variant === 'primary'
        ? 'textOnDark'
        : 'primary';

    return (
        <ButtonElement
            style={{ margin }}
            size={size}
            variant={variant}
            disabled={disabled}
            fullWidth={fullWidth}
            onClick={isLoading ? undefined : onClick}
            type={type}
            className={className}
            isLoading={isLoading}
        >
            {icon && size !== 's' ? (
                <CustomIcon
                    icon={icon}
                    iconColor={iconColor || defaultIconColor}
                    height="16"
                    width="16"
                />
            ) : null}
            {children}
            {isLoading ? (
                <LoadingSpinner height="16" width="16">
                    <CustomIcon
                        icon={'spinner'}
                        iconColor={'backgroundPaper'}
                        height="16"
                        width="16"
                        margin="0"
                    />
                </LoadingSpinner>
            ) : null}
        </ButtonElement>
    );
};

export default Button;
