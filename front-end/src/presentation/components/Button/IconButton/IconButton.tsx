import { useState } from "react";
import {
  IconButtonContainer,
  IconWrapper,
  StyledIconButton,
  Tooltip,
} from "./IconButton.style";
import { IconButtonProps } from "./IconButton.types";

export const IconButton = ({
  icon,
  tooltip,
  variant = "ghost",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
}: IconButtonProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    if (tooltip && !disabled && !loading) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (tooltip) {
      setIsTooltipVisible(false);
    }
  };

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const canShowTooltip = tooltip && !disabled && !loading;

  return (
    <IconButtonContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledIconButton
        $variant={variant}
        $size={size}
        $disabled={disabled}
        $loading={loading}
        disabled={disabled || loading}
        onClick={handleClick}
        type={type}
        className={className}
        aria-label={ariaLabel || tooltip}
        aria-describedby={ariaDescribedBy}
      >
        <IconWrapper>{icon}</IconWrapper>
      </StyledIconButton>
      {canShowTooltip && isTooltipVisible && (
        <Tooltip $isVisible={true}>{tooltip}</Tooltip>
      )}
    </IconButtonContainer>
  );
};

export default IconButton;
