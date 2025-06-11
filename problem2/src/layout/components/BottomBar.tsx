import { FunctionComponent, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { LinkToPage } from '@/utils';
import { AppIcon } from '@/components';

interface Props {
  items: Array<LinkToPage>;
}

const BottomBar: FunctionComponent<Props> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigationChange = useCallback(
    (_event: unknown, newValue: string) => {
      navigate(newValue);
    },
    [navigate]
  );

  return (
    <BottomNavigation
      value={location.pathname} 
      showLabels 
      onChange={onNavigationChange}
    >
      {items.map(({ title, path, icon }) => (
        <BottomNavigationAction
          key={`${title}-${path}`}
          label={title}
          value={path}
          icon={icon && <AppIcon icon={icon} />}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomBar;
