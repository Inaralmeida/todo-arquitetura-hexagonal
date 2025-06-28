import styled from "styled-components";

export const IconButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Tooltip = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1f2937;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 1000;
  margin-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: #1f2937;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const StyledIconButton = styled.button<{
  $variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "contained"
    | "outlined";
  $size?: "small" | "medium" | "large";
  $disabled?: boolean;
  $loading?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  text-decoration: none;
  position: relative;

  ${({ $size = "medium" }) => {
    switch ($size) {
      case "small":
        return `
          width: 32px;
          height: 32px;
          min-width: 32px;
          min-height: 32px;
        `;
      case "large":
        return `
          width: 48px;
          height: 48px;
          min-width: 48px;
          min-height: 48px;
        `;
      default:
        return `
          width: 40px;
          height: 40px;
          min-width: 40px;
          min-height: 40px;
        `;
    }
  }}

  ${({ $variant = "ghost" }) => {
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
      case "contained":
        return `
          background-color: #3b82f6;
          color: white;
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);

          &:hover:not(:disabled) {
            background-color: #2563eb;
            box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
            transform: translateY(-1px);
          }
        `;
      case "outlined":
        return `
          background-color: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;

          &:hover:not(:disabled) {
            background-color: #3b82f6;
            color: white;
            transform: translateY(-1px);
          }
        `;
      default: // ghost
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

  ${({ $disabled, $loading }) =>
    ($disabled || $loading) &&
    `
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;
