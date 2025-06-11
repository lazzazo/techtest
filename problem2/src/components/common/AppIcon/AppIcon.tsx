import { ComponentType, FunctionComponent, SVGAttributes } from 'react';
import { APP_ICON_SIZE } from '@/components/config';
import { IconName, ICONS } from './config';

/**
 * Props of the AppIcon component, also can be used for SVG icons
 */
export interface AppIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  icon: IconName;
  size?: string | number;
  title?: string;
}
const AppIcon: FunctionComponent<AppIconProps> = ({ color, icon, size = APP_ICON_SIZE, style, ...restOfProps }) => {
  let ComponentToRender: ComponentType = ICONS[icon];
  if (!ComponentToRender) {
    console.warn(`AppIcon: icon "${icon}" not found!`);
    ComponentToRender = ICONS.default; 
  }

  const propsToRender = {
    height: size,
    color,
    fill: color && 'currentColor', 
    size,
    style: { ...style, color },
    width: size,
    ...restOfProps,
  };

  return <ComponentToRender data-icon={icon} {...propsToRender} />;
};

export default AppIcon;
