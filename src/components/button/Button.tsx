import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { SignIn } from 'phosphor-react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {

    const Component = asChild ? Slot : 'button';

    return (
        <Component
            className={clsx(
                'py-3 px-4 flex items-center justify-center gap-2 bg-violet-600 rounded font-semibold text-sm text-gray-100 w-full transition-colors hover:bg-violet-500 focus:ring-2 ring-violet-600',                
                className,
            )}
            {...props}
        >
            <SignIn size={24} />
            {children}

        </Component>
    );
}