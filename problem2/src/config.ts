import {
  getCurrentEnvironment,
} from '@/utils/environment';

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; 

export const IS_DEBUG = import.meta.env.VITE_DEBUG === 'true'; 

export const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL; 

export const IS_FAKE_LOGIN = import.meta.env.VITE_FAKE_LOGIN === 'true'; 
