export const IS_SERVER = typeof window === 'undefined';
export const IS_BROWSER = typeof window !== 'undefined' && typeof window?.document !== 'undefined';
export const IS_WEBWORKER =
  typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope';

export function envGet(
  name: string,
  isRequired = false,
  defaultValue: string | undefined = undefined
): string | undefined {
  let variable = import.meta.env[name]; 

  if (typeof variable === 'undefined') {
    if (isRequired) {
      throw new Error(`Missing process.env.${name} variable`);
    }
    variable = defaultValue;
  }
  return variable;
}

export function envRequired(passProcessDotEnvDotValueNameHere: string | undefined): string {
  if (typeof passProcessDotEnvDotValueNameHere === 'undefined') {
    throw new Error('Missing .env variable!');
  }
  return passProcessDotEnvDotValueNameHere;
}

export function getCurrentVersion(): string {
  return import.meta.env.VITE_VERSION ?? import.meta.env.npm_package_version ?? 'latest';
}

export function getCurrentEnvironment(): string {
  return import.meta.env.VITE_ENV ?? import.meta.env.NODE_ENV ?? 'development';
}
