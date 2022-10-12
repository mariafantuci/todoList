import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}

export function Checkbox ({ }: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root className="min-w-[24px] w-6 h-6 p-0.5 border border-blue rounded-full checkbox_task">
            <CheckboxPrimitive.Indicator asChild >
                <Check weight='bold' className='w-5 h-5 text-gray-100' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}