import { tm } from '@/app/utils/tm/tw-merge';

type ButtonProps = {
  label?: string;
  className?: string;
};

export default function Button({
  label = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      className={tm(
        'w-full bg-primary text-white py-[17.5px] rounded-lg min-w-[100px] sm:text-xl sm:py-[24px]',
        className
      )}
    >
      {label}
    </button>
  );
}
