import { Reducer } from 'react';
import { AppStoreState, CurrentUser } from './config';

type SupportedPayload = undefined | boolean | CurrentUser;

export type AppStoreAction = {
  type: string;
  payload?: SupportedPayload;
};


const AppStoreReducer: Reducer<AppStoreState, AppStoreAction> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppStoreReducer;
