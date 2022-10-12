import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'small' | 'medium' | 'large',
  asChild?: boolean,
  children: ReactNode
}

export function Heading({ size = 'medium', asChild, children }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'text-gray-200 font-bold font-sans',
        {
          'text-lg': size === 'small',
          'text-xl': size === 'medium',
          'text-2xl': size === 'large',
        }
      )}
    >
      {children}
    </Comp>
  )
}