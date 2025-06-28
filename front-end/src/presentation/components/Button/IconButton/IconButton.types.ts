import React from "react";

export interface IconButtonProps {
  icon: React.ReactNode;
  tooltip?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "contained"
    | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}
 