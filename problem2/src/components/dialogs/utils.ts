import { useTheme } from '@mui/material';
import { useIsWideScreen } from '@/hooks';

export function useDialogMinWidth() {
  const theme = useTheme();
  const onWideScreen = useIsWideScreen();
  const paperMinWidth = onWideScreen ? theme.breakpoints.values.md / 2 : theme.breakpoints.values.sm / 2;
  return paperMinWidth;
}
