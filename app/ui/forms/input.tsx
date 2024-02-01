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
            `bg-transparent border-[2px] border-white border-opacity-20 rounded-3xl 
             text-white text-base h-full outline-none p-5 w-full placeholder:text-white`,
            className,
        )}
        >
        </input>
        {children}
    </>
  );
}