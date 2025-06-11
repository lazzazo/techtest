import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export function useIsMobile(downBreakpoint: Breakpoint | number = 'sm') {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(downBreakpoint));
}

export function useIsWideScreen() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
}
