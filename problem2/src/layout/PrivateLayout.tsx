import { FunctionComponent, PropsWithChildren } from 'react';
import { LinkToPage } from '@/utils';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';

const TITLE_PRIVATE = '_TITLE_'; 

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

const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const title = TITLE_PRIVATE;
  document.title = title; 

  return (
    <TopBarAndSideBarLayout sidebarItems={SIDE_BAR_ITEMS} title={title} variant="sidebarPersistentOnDesktop">
      {children}
    </TopBarAndSideBarLayout>
  );
};

export default PrivateLayout;
