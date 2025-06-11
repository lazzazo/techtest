import { ComponentType, createContext, Dispatch, FunctionComponent, useContext } from 'react';
import { AppStoreAction } from './AppStoreReducer';
import { AppStoreState, INITIAL_APP_STORE_STATE } from './config';

export type AppContextReturningType = [AppStoreState, Dispatch<AppStoreAction>];
export const AppStoreContext = createContext<AppContextReturningType>([INITIAL_APP_STORE_STATE, () => null]);

export const useAppStore = (): AppContextReturningType => useContext(AppStoreContext);

interface WithAppStoreProps {
  store: AppContextReturningType;
}
export const withAppStore =
  (Component: ComponentType<WithAppStoreProps>): FunctionComponent =>
  (props) => {
    return <Component {...props} store={useAppStore()} />;
  };
