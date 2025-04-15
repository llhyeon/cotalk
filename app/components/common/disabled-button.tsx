import { tm } from '@/app/utils/tm/tw-merge';

type DisabledButtonProps = {
  className?: string;
  children: string;
};

export default function DisabledButton({
  className = '',
  children,
}: DisabledButtonProps) {
  return (
    <button
      disabled
      type="button"
      className={tm(
        'w-full bg-gray-200 text-white py-[14px] rounded-lg min-w-[60px]',
        className
      )}
    >
      {children}
    </button>
  );
}
