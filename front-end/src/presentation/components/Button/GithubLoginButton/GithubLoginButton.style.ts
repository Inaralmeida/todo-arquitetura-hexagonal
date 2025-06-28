import styled from "styled-components";

export const GithubButtonContainer = styled.div`
  display: inline-block;
`;

export const GithubIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const StyledGithubButton = styled.button<{
  $variant?: "contained" | "outlined";
  $disabled?: boolean;
  $loading?: boolean;
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
  min-width: 200px;
  position: relative;

  ${({ $variant = "contained" }) => {
    switch ($variant) {
      case "contained":
        return `
          background-color: #24292e;
          color: white;
          box-shadow: 0 2px 4px rgba(36, 41, 46, 0.3);

          &:hover:not(:disabled) {
            background-color: #1f2428;
            box-shadow: 0 4px 8px rgba(36, 41, 46, 0.4);
            transform: translateY(-1px);
          }
        `;
      case "outlined":
        return `
          background-color: transparent;
          color: #24292e;
          border: 2px solid #24292e;

          &:hover:not(:disabled) {
            background-color: #24292e;
            color: white;
            transform: translateY(-1px);
          }
        `;
      default:
        return `
          background-color: #24292e;
          color: white;
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
    outline: 2px solid #0366d6;
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;
