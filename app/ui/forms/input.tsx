import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}


export function Input({ children, className, ...rest }: InputProps) {
  return (
    <>
        <input
        {...rest}
        className={clsx(
            `peer block w-full rounded-md border border-gray-200 py-2 md:py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500`,
            className,
        )}
        >
        </input>
        {children}
    </>
  );
}