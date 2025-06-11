import { FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';
import { LinkToPage } from '@/utils';

const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

const PATH_TITLES: Record<string, string> = {
  '/': 'Currency Swap',
  '/about': 'About Us',
};

const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const title = PATH_TITLES[location.pathname] || 'Currency Swap';
    document.title = title;
  }, [location.pathname]);

  return (
    <TopBarAndSideBarLayout
      sidebarItems={SIDE_BAR_ITEMS}
      title={PATH_TITLES[location.pathname] || 'Currency Swap'}
      variant="sidebarAlwaysTemporary"
    >
      {children}
    </TopBarAndSideBarLayout>
  );
};

export default PublicLayout;
