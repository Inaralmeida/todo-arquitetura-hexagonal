import { IconButtonProps } from "../IconButton/IconButton.types";

export interface ActionButtonProps extends Omit<IconButtonProps, "icon"> {
  onAction?: () => void;
}
