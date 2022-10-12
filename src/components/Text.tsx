import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'small' | 'medium' | 'large',
  asChild?: boolean,
  children: ReactNode
}

export function Text({ size = 'medium', asChild, children }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-200 font-sans',
        {
          'text-xs': size === 'small',
          'text-sm': size === 'medium',
          'text-md': size === 'large',
        }
      )}
    >
      {children}
    </Comp>
  )
}