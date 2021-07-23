import React, { ChangeEvent, useState, useCallback } from 'react';
import { Label } from '../../config/typography';
import { Wrapper, Input, IconButton, HelpText } from './elements';

type PasswordFieldProps = {
    label?: string;
    placeholder: string;
    value?: string | number;
    disabled?: boolean;
    error?: boolean;
    initialVisibility: boolean;
    helpText?: string;
    onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const PasswordField = ({
    label,
    placeholder,
    helpText,
    error,
    disabled,
    value,
    onChange,
    initialVisibility,
}: PasswordFieldProps) => {
    /**
     * Used for managing input's type and showing different icons.
     */
    const [visibility, setVisibility] = useState(initialVisibility);

    const handleClick = useCallback(() => setVisibility(!visibility), [
        visibility,
    ]);

    const type = visibility ? 'text' : 'password';

    return (
        <>
            <Label>{label}</Label>
            <Wrapper error={error} disabled={disabled}>
                <Input
                    name={label}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                />
                <IconButton changeState={handleClick} visibility={visibility} />
            </Wrapper>
            {helpText && <HelpText error={error}>{helpText}</HelpText>}
        </>
    );
};

export default PasswordField;
