export function hasTrailingSlash(path: string): boolean {
  return (
    typeof path === 'string' && (path?.charAt(path?.length - 1) === '/' || path?.charAt(path?.length - 1) === '\\')
  );
}

export function addTrailingSlash(path: string): string {
  return hasTrailingSlash(path) ? path : path + '/';
}

export function removeTrailingSlash(path: string): string {
  return hasTrailingSlash(path) ? path.slice(0, -1) : path;
}
