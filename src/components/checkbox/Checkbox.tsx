import * as CheckboxPrimitve from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitve.CheckboxIndicatorProps {

}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitve.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
            <CheckboxPrimitve.Indicator asChild>
                <Check weight="bold" className="h-5 w-5 text-violet-600"/>
            </CheckboxPrimitve.Indicator>
        </CheckboxPrimitve.Root>
    );
}