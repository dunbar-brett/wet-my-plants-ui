import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `flex h-10 w-full mt-10 justify-center items-center rounded-3xl bg-plant-green px-4
        text-sm font-medium text-white transition-colors hover:bg-plant-green-dark
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-plant-green active:bg-plant-green-dark
        aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        className,
      )}
    >
      {children}
    </button>
  );
}