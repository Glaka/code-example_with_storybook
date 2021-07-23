import React, { ChangeEvent, useCallback } from "react";
import { Container, Wrapper, Input, HelpText, Label, LabelOptional } from "./elements";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string | number;
  type?: "text" | "number";
  disabled?: boolean;
  error?: boolean;
  helpText?: string;
  height?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  onChangeValue?(value: string): void;
  labelOptional?: boolean;
  size?: "s";
  min?: number;
};

const TextField = ({
  label,
  placeholder,
  helpText,
  error,
  disabled,
  type,
  value,
  onChange,
  onChangeValue,
  height,
  labelOptional,
  size,
  min,
}: TextFieldProps) => {
  const initialType = type ? type : "text";

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(evt);
      }
      if (onChangeValue) {
        onChangeValue(evt?.target?.value);
      }
    },
    [onChange, onChangeValue]
  );

  return (
    <Container>
      {label ? (
        <Label>
          {label}
          {labelOptional ? <LabelOptional>{" (optional)"}</LabelOptional> : null}
        </Label>
      ) : null}
      <Wrapper error={error} disabled={disabled} height={height} size={size}>
        <Input
          name={label}
          type={initialType}
          placeholder={placeholder ? placeholder : ""}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          min={min}
        />
      </Wrapper>
      {helpText && <HelpText error={error}>{helpText}</HelpText>}
    </Container>
  );
};

export default TextField;
