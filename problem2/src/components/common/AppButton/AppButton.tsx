import { ElementType, FunctionComponent, ReactNode, useMemo } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import AppIcon from '../AppIcon';
import AppLink from '../AppLink';
import { APP_BUTTON_VARIANT } from '@/components/config';
import { IconName } from '../AppIcon/config';

const MUI_BUTTON_COLORS = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];

const DEFAULT_SX_VALUES = {
  margin: 1, 
};

export interface AppButtonProps extends Omit<MuiButtonProps, 'color' | 'endIcon' | 'startIcon'> {
  color?: string; // Not only 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  endIcon?: IconName | ReactNode;
  startIcon?: IconName | ReactNode;
  // Missing props
  component?: ElementType; 
  to?: string;
  href?: string; 
  openInNewTab?: boolean; 
  underline?: 'none' | 'hover' | 'always'; 
}

const AppButton: FunctionComponent<AppButtonProps> = ({
  children,
  color: customColor = 'inherit',
  component: customComponent,
  endIcon,
  startIcon,
  sx: customSx,
  underline = 'none',
  variant = APP_BUTTON_VARIANT,
  ...restOfProps
}) => {
  const iconStart: ReactNode = useMemo(
    () =>
      !startIcon ? undefined : typeof startIcon === 'string' ? <AppIcon icon={startIcon as IconName} /> : startIcon,
    [startIcon]
  );

  const iconEnd: ReactNode = useMemo(
    () => (!endIcon ? undefined : typeof endIcon === 'string' ? <AppIcon icon={endIcon as IconName} /> : endIcon),
    [endIcon]
  );

  const isMuiColor = useMemo(() => MUI_BUTTON_COLORS.includes(customColor), [customColor]);

  const componentToRender =
    !customComponent && (restOfProps?.href || restOfProps?.to) ? AppLink : (customComponent ?? MuiButton);

  const colorForMuiButton = isMuiColor ? (customColor as MuiButtonProps['color']) : 'inherit';
  const sxToRender = {
    ...DEFAULT_SX_VALUES, // Default margin, padding, and so on
    ...(customSx ? customSx : {}), // Custom styles
    ...(isMuiColor ? {} : { color: customColor }), // If custom color is not MUI color, apply it as a text color
  };
  const propsToRender = {
    ...restOfProps,
    underline,
  };

  return (
    <MuiButton
      component={componentToRender}
      color={colorForMuiButton}
      endIcon={iconEnd}
      startIcon={iconStart}
      sx={sxToRender}
      variant={variant}
      {...propsToRender}
    >
      {children}
    </MuiButton>
  );
};

export default AppButton;
