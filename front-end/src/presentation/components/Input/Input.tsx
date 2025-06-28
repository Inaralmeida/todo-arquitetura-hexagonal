import React from "react";
import {
  ErrorMessage,
  InputContainer,
  InputWrapper,
  Label,
  StyledInput,
} from "./Input.style";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  label,
  type = "text",
  disabled = false,
  required = false,
  id,
  name,
  "aria-label": ariaLabel,
}) => {
  const inputId =
    id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <InputContainer hasError={hasError} disabled={disabled}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span aria-label="campo obrigatório"> *</span>}
        </Label>
      )}

      <InputWrapper>
        <StyledInput
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || label}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          hasError={hasError}
        />
      </InputWrapper>

      {hasError && (
        <ErrorMessage id={`${inputId}-error`} role="alert">
          {error}
        </ErrorMessage>
      )}
    </InputContainer>
  );
};
