import { FunctionComponent, PropsWithChildren, useReducer } from 'react';
import { AppStoreState, INITIAL_APP_STORE_STATE } from './config';
import { AppContextReturningType, AppStoreContext } from './AppStore';
import AppStoreReducer from './AppStoreReducer';

const AppStoreProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {

  const initialState: AppStoreState = {
    ...INITIAL_APP_STORE_STATE,
  };
  const value: AppContextReturningType = useReducer(AppStoreReducer, initialState);

  return <AppStoreContext value={value}>{children}</AppStoreContext>;
};

export default AppStoreProvider;
