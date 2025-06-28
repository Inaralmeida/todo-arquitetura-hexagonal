import styled from "styled-components";

export const StyledButton = styled.button<{
  $variant?: "primary" | "secondary" | "danger" | "ghost";
  $size?: "small" | "medium" | "large";
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  text-decoration: none;
  border: none;
  position: relative;

  ${({ $size = "medium" }) => {
    switch ($size) {
      case "small":
        return `
          padding: 8px 16px;
          font-size: 12px;
        `;
      case "large":
        return `
          padding: 16px 32px;
          font-size: 16px;
        `;
      default:
        return `
          padding: 12px 24px;
          font-size: 14px;
        `;
    }
  }}

  ${({ $variant = "primary" }) => {
    switch ($variant) {
      case "primary":
        return `
          background-color: #3b82f6;
          color: white;

          &:hover:not(:disabled) {
            background-color: #2563eb;
          }
        `;
      case "secondary":
        return `
          background-color: transparent;
          color: #3b82f6;
          border: 1px solid #3b82f6;

          &:hover:not(:disabled) {
            background-color: #3b82f6;
            color: white;
          }
        `;
      case "danger":
        return `
          background-color: #ef4444;
          color: white;

          &:hover:not(:disabled) {
            background-color: #dc2626;
          }
        `;
      default:
        return `
          background-color: transparent;
          color: #6b7280;

          &:hover:not(:disabled) {
            background-color: #f3f4f6;
            color: #374151;
          }
        `;
    }
  }}

  ${({ $fullWidth }) =>
    $fullWidth &&
    `
    width: 100%;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
