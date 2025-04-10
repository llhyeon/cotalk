import { tm } from '@/app/utils/tm/tw-merge';
import Link from 'next/link';
import { SetStateAction } from 'react';

type ButtonProps = {
  className?: string;
  children?: string | React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | 'link';
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Button({
  className = '',
  type = 'button',
  href = '',
  children,
  onClick,
}: ButtonProps) {
  return type !== 'link' ? (
    <button
      onClick={onClick}
      type={type}
      className={tm(
        'w-full bg-primary text-white py-[14px] rounded-lg min-w-[100px] sm:text-xl sm:py-[24px]',
        className
      )}
    >
      {children}
    </button>
  ) : (
    <Link
      className={tm(
        'block text-center w-full bg-primary text-white py-[17.5px] rounded-lg min-w-[100px] sm:text-xl sm:py-[24px]',
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
