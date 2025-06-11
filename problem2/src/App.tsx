import { ErrorBoundary } from '@/components';
import Routes from '@/routes';
import StoreProvider from '@/store';
import { ThemeProvider } from '@/theme';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const MainApp = () => {
  const queryClient = new QueryClient()

  return (
    <ErrorBoundary name="App">
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </StoreProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default MainApp;
