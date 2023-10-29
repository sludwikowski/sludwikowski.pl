import React from 'react'
import type { SVGComponent } from '../../../types/SVGComponent'

interface LinkIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: SVGComponent
}

export default function LinkIconButton(props: LinkIconButtonProps) {
  return (
    <div className="-ml-2">
      <button
        type="button"
        {...props}
        className="text-md flex items-center rounded-md px-2 py-1 text-sm font-medium text-default hover:bg-emphasis hover:text-emphasis">
        <props.Icon className="h-4 w-4 text-subtle ltr:mr-2 rtl:ml-2" />
        {props.children}
      </button>
    </div>
  )
}
