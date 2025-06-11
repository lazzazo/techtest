import { FunctionComponent, useCallback, MouseEvent } from 'react';
import { Stack, Divider, Drawer, DrawerProps, FormControlLabel, Switch, Tooltip, Typography } from '@mui/material';
import { LinkToPage } from '@/utils';
import { useDarkMode, useIsMobile } from '@/hooks';
import { SIDE_BAR_WIDTH, TOP_BAR_DESKTOP_HEIGHT } from '../config';
import SideBarNavList from './SideBarNavList';
import AppSubIcon from '@/components/common/AppSubIcon';

export interface SideBarProps extends Pick<DrawerProps, 'anchor' | 'className' | 'open' | 'variant' | 'onClose'> {
  items: Array<LinkToPage>;
}

const SideBar: FunctionComponent<SideBarProps> = ({ anchor, open, variant, items, onClose, ...restOfProps }) => {
  const isMobile = useIsMobile();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const isRenderedAsDrawer = variant === 'temporary';

  const closeSideBarAfterAnyClick = useCallback(
    (event: MouseEvent) => {
      if (variant === 'temporary' && typeof onClose === 'function') {
        onClose(event, 'backdropClick');
      }
    },
    [variant, onClose]
  );

  return (
    <Drawer
      aria-modal={isRenderedAsDrawer}
      anchor={anchor}
      open={open}
      variant={variant}
      closeAfterTransition={isRenderedAsDrawer}
      PaperProps={{
        sx: {
          width: SIDE_BAR_WIDTH,
          marginTop: isMobile ? 0 : isRenderedAsDrawer ? 0 : TOP_BAR_DESKTOP_HEIGHT,
          height: isMobile ? '100%' : isRenderedAsDrawer ? '100%' : `calc(100% - ${TOP_BAR_DESKTOP_HEIGHT})`,
        },
      }}
      onClose={onClose}
    >
      <Stack
        sx={{
          height: '100%',
          padding: 2,
        }}
        {...restOfProps}
        onClick={closeSideBarAfterAnyClick}
      >
        <Stack alignItems="center" minHeight="fit-content" marginBottom={2} {...restOfProps}>
          <AppSubIcon icon="ETH" size={45} />
          <Typography sx={{ mt: 1 }} variant="h6">
            Currency Swap
          </Typography>
        </Stack>

        <Divider />

        <SideBarNavList items={items} showIcons />

        <Divider />

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Tooltip title={isDarkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}>
            <FormControlLabel
              label={!isDarkMode ? 'Light mode' : 'Dark mode'}
              control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
            />
          </Tooltip>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
