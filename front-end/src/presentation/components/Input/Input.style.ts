import styled, { css } from "styled-components";

interface InputContainerProps {
  hasError: boolean;
  disabled?: boolean;
}

interface StyledInputProps {
  hasError: boolean;
  disabled?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.danger : theme.colors.gray[300]};
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.danger : theme.colors.primary};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.colors.danger : theme.colors.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.gray[100]};
    `}
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.danger};
  line-height: 1rem;
  margin-top: 0.25rem;
`;
