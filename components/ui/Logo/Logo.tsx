import classNames from '@/lib/classNames'
import React from 'react'

export default function Logo({
  small,
  icon,
  inline = true,
  className,
  src = '/logo.png',
}: {
  small?: boolean
  icon?: boolean
  inline?: boolean
  className?: string
  src?: string
}) {
  return (
    <h3 className={classNames('logo', inline && 'inline', className)}>
      <strong>
        {icon ? (
          <img
            className="mx-auto w-9 dark:invert"
            alt="sludwikowski"
            title="sludwikowski"
            src={`${src}?type=icon`}
          />
        ) : (
          <img
            className={classNames(small ? 'h-32 w-auto' : 'h-32 w-auto', 'dark:invert')}
            alt="sludwikowski"
            title="sludwikowski"
            src={src}
          />
        )}
      </strong>
    </h3>
  )
}
