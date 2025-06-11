import { FunctionComponent, useMemo, PropsWithChildren } from 'react';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { CssBaseline } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useDarkMode } from '@/hooks';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

const COLOR_SCHEME_SELECTOR = 'class';

function getThemeForLightAndDarkMode() {
  const themeForLightAndDarkWithCssVariables = createTheme({
    typography: {
      fontFamily: '"Inter", sans-serif',
    },
    colorSchemes: {
      dark: DARK_THEME,
      light: LIGHT_THEME,
    },
    cssVariables: {
      colorSchemeSelector: COLOR_SCHEME_SELECTOR,
    },
  });
  const responsiveTheme = responsiveFontSizes(themeForLightAndDarkWithCssVariables);
  return responsiveTheme;
}


const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { muiMode } = useDarkMode();

  const dualModeTheme = useMemo(() => getThemeForLightAndDarkMode(), []);

  return (
    <MuiThemeProvider
      noSsr
      theme={dualModeTheme}
      defaultMode={muiMode}
    >
      <InitColorSchemeScript attribute={COLOR_SCHEME_SELECTOR} defaultMode={muiMode} />
      <CssBaseline
        enableColorScheme
      />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
