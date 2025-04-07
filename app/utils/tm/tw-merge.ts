import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function _twMerge(...classValue: ClassValue[]) {
  return twMerge(clsx(...classValue));
}

export const tm = _twMerge;
