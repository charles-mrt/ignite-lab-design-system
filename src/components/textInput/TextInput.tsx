import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { useState } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full  ease-in duration-200 focus-within:ring-2 focus-within:text-gray-100 ring-violet-600 text-gray-400">
            {props.children}
        </div>
    );
}
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 ">
            {props.children}
        </Slot>
    );
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            {...props}
        />
    );
}
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}