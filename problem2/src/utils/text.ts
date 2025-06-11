export const CHARS_NUMERIC = '0123456789';
export const CHARS_ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
export const CHARS_ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const CHARS_ALPHA_NUMERIC = CHARS_NUMERIC + CHARS_ALPHA_LOWER + CHARS_ALPHA_UPPER;

export function randomText(length: number, allowedChars = CHARS_ALPHA_NUMERIC) {
  let result = '';
  const charLength = allowedChars.length;
  let counter = 0;
  while (counter < length) {
    result += allowedChars.charAt(Math.floor(Math.random() * charLength));
    counter += 1;
  }
  return result;
}

export function compareTexts(a: string | null | undefined, b: string | null | undefined) {
  if (a === undefined || a === null || a === '') {
    return b === undefined || b === null || b === '';
  }
  return a === b;
}

export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.substring(1);

export const capitalizeAllWords = (s: string): string => s.split(' ').map(capitalize).join(' ');

export function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color;
}
