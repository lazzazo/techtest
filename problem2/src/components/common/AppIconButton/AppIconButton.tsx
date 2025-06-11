import { ElementType, FunctionComponent, useMemo } from 'react';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import { alpha } from '@mui/material';
import { AppIcon, AppLink } from '@/components';
import { IconName } from '../AppIcon/config';
import { AppIconProps } from '../AppIcon/AppIcon';
import { MUI_ICON_BUTTON_COLORS } from './utils';

export interface AppIconButtonProps extends Omit<MuiIconButtonProps, 'color'> {
  color?: string; 
  icon: IconName;
  iconProps?: Partial<AppIconProps>;
  component?: ElementType; 
  to?: string; 
  href?: string; 
  openInNewTab?: boolean; 
  tooltipProps?: Partial<MuiTooltipProps>;
}

const AppIconButton: FunctionComponent<AppIconButtonProps> = ({
  color = 'default',
  component,
  children,
  disabled,
  icon,
  iconProps,
  sx,
  title,
  tooltipProps,
  ...restOfProps
}) => {
  const componentToRender =
    !component && (restOfProps?.href || restOfProps?.to)
      ? AppLink 
      : (component ?? MuiIconButton); 

  const isMuiColor = useMemo(() => MUI_ICON_BUTTON_COLORS.includes(color), [color]);

  const iconButtonToRender = useMemo(() => {
    const colorToRender = isMuiColor ? (color as MuiIconButtonProps['color']) : 'default';
    const sxToRender = {
      ...sx,
      ...(!isMuiColor && {
        color: color,
        ':hover': {
          backgroundColor: alpha(color, 0.04),
        },
      }),
    };
    return (
      <MuiIconButton
        component={componentToRender}
        color={colorToRender}
        disabled={disabled}
        sx={sxToRender}
        {...restOfProps}
      >
        <AppIcon icon={icon} {...iconProps} />
        {children}
      </MuiIconButton>
    );
  }, [color, componentToRender, children, disabled, icon, isMuiColor, sx, iconProps, restOfProps]);

  return title && !disabled ? (
    <MuiTooltip title={title} {...tooltipProps}>
      {iconButtonToRender}
    </MuiTooltip>
  ) : (
    iconButtonToRender
  );
};

export default AppIconButton;
