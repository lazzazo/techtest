export interface CurrentUser {
  displayName: string;
  avatarUrl?: string;
  userId?: string;
}

export interface AppStoreState {
  isAuthenticated: boolean;
  currentUser?: CurrentUser | undefined;
}

export const INITIAL_APP_STORE_STATE: AppStoreState = {
  isAuthenticated: false, 
};
