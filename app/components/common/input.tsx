import { tm } from '@/app/utils/tm/tw-merge';
import { useId } from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  isLabelShow?: boolean;
};

export default function Input({
  label,
  isLabelShow = false,
  className = '',
  ...restProps
}: InputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-0.5 text-[14px]">
      <label htmlFor={id} className={tm('ml-2', !isLabelShow ? 'sr-only' : '')}>
        {label}
      </label>
      <input
        id={id}
        className={tm(
          'border border-primary rounded-lg w-full py-3.5 px-2.5 min-w-[150px] text-primary placeholder:text-primary/70',
          className
        )}
        type="text"
        {...restProps}
      />
    </div>
  );
}
