import styled, { css } from 'styled-components';
import { ChangeEvent } from 'react';
import { BodySmallStyle, BodyStyle, LabelStyle } from '../../config/typography';
import { StyledThemePropsType } from '../../config/theme';

const Container = styled.div`
    width: 100%;
`;

type WrapperProps = {
    children: any;
    error?: boolean;
    disabled?: boolean;
    height?: string;
    size?: 's';
};

const Wrapper = styled.div<WrapperProps & StyledThemePropsType>`
    display: flex;
    align-items: center;
    width: 100%;
    height: ${(props: WrapperProps) => (props.height ? props.height : '40px')};
    padding: ${(props: WrapperProps) =>
        props.size === 's' ? '0 8px' : '0 16px'};
    margin: ${(props: StyledThemePropsType) => props.theme.sizes.halfBase} 0;
    border-radius: ${(props: StyledThemePropsType) =>
        props.theme.sizes.halfBase};
    background: ${(props: StyledThemePropsType) =>
        props.theme.colors.backgroundPaper};
    border: 1px solid
        ${(props: StyledThemePropsType) => props.theme.colors.neutralMedium};

    &:hover {
        border: 1px solid
            ${(props: StyledThemePropsType) => props.theme.colors.secondary};
    }

    &:focus-within {
        border: 1px solid
            ${(props: StyledThemePropsType) => props.theme.colors.primary};
    }

    ${(props: WrapperProps & StyledThemePropsType) => {
        if (props.error) {
            return css`
                border: 1px solid ${props.theme.colors.error};
            `;
        }
        if (props.disabled) {
            return css`
                background: ${props.theme.colors.background};
                border: 1px solid ${props.theme.colors.neutralMedium};
            `;
        }
    }}
`;

type InputProps = {
    placeholder?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export const InputStyles = css`
    ${BodyStyle};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textPrimary};
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    padding: 0;
    text-overflow: ellipsis;
`;

const Input = styled.input<InputProps & StyledThemePropsType>`
    ${({ theme, disabled }) => css`
        ${InputStyles};
        color: ${disabled
            ? theme.colors.textSecondary
            : theme.colors.textPrimary};
    `}
`;

type HelpTextProps = {
    error?: boolean;
    children: string;
};

const HelpTextError = css<StyledThemePropsType>`
    color: ${(props: StyledThemePropsType) => props.theme.colors.error};
`;

const HelpText = styled.div<HelpTextProps & StyledThemePropsType>`
    ${BodySmallStyle};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textSecondary};

    ${(props: HelpTextProps & StyledThemePropsType) => {
        if (props.error) {
            return HelpTextError;
        }
    }};
`;

const Label = styled.div`
    ${LabelStyle};
    display: flex;
    align-items: flex-end;
`;

const LabelOptional = styled.div`
    ${LabelStyle};
    color: ${(props: StyledThemePropsType) => props.theme.colors.textSecondary};
    margin-left: 4px;
`;

export { Container, Wrapper, Input, HelpText, Label, LabelOptional };
