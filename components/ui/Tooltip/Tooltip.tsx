import classNames from '@/lib/classNames'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

export default function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  side = 'top',
  ...props
}: {
  children: React.ReactNode
  content: React.ReactNode
  delayDuration?: number
  open?: boolean
  defaultOpen?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  onOpenChange?: (open: boolean) => void
} & TooltipPrimitive.TooltipContentProps) {
  return (
    <TooltipPrimitive.Root
      delayDuration={delayDuration || 50}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          {...props}
          className={classNames(
            side === 'top' && '-mt-7',
            side === 'right' && 'ml-2',
            'relative z-50 rounded-md bg-inverted px-2 py-1 text-xs font-semibold text-inverted shadow-lg',
            props.className && `${props.className}`
          )}
          side={side}
          align="center">
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}
