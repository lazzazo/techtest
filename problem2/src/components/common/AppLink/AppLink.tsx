import { FunctionComponent, useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { APP_LINK_COLOR, APP_LINK_UNDERLINE } from '@/components/config';
import { EXTERNAL_LINK_PROPS } from './utils';

export interface AppLinkProps extends MuiLinkProps {
  activeClassName?: string;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
}

const AppLink: FunctionComponent<AppLinkProps> = ({
  activeClassName = 'active', 
  children,
  color = APP_LINK_COLOR,
  className: customClassName,
  underline = APP_LINK_UNDERLINE,
  to,
  href,
  openInNewTab, 
  ref,
  ...restOfProps
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const destination = to || href || ''; 

  const className = useMemo(
    () => [customClassName, destination == currentPath && activeClassName].filter(Boolean).join(' '),
    [customClassName, activeClassName, destination, currentPath]
  );

  const isExternal = useMemo(
    () =>
      destination.startsWith('http') ||
      destination.startsWith('//') ||
      destination.startsWith('mailto:') ||
      destination.startsWith('tel:'),
    [destination]
  );

  const propsToRender = {
    className,
    color,
    underline, 
    ...((openInNewTab || (isExternal && openInNewTab !== false)) && EXTERNAL_LINK_PROPS), 
    ...restOfProps,
  };

  return isExternal ? (
    <MuiLink ref={ref} href={destination} {...propsToRender}>
      {children}
    </MuiLink>
  ) : (
    <MuiLink ref={ref} component={RouterLink} to={destination} {...propsToRender}>
      {children}
    </MuiLink>
  );
};

export default AppLink;
