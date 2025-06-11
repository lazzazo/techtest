import { IconName } from '../components/common/AppIcon/config';

export type ObjectPropByName<T = unknown> = Record<string, T>;

export type LinkToPage = {
  icon?: IconName;
  path?: string; 
  title?: string; 
  subtitle?: string;
};
