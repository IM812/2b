'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  const gradientId = useId().replace(/:/g, '')

  return (
    <span className={cn('brand-mark inline-flex shrink-0 text-primary', className)} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradientId} x1="7" y1="5" x2="41" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="currentColor" />
            <stop offset="1" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        <path d="M9 13.5C9 9.91 11.91 7 15.5 7H30c5.52 0 10 4.48 10 10 0 3.07-1.38 5.82-3.56 7.65C39.2 26.32 41 29.35 41 32.8 41 37.88 36.88 42 31.8 42H9v-7.5l18.2-12.18A5.1 5.1 0 0 0 29.46 18c0-2.76-2.24-5-5-5H9v.5Z" fill={`url(#${gradientId})`} />
        <path d="M20 27.15V35h10.35a3.93 3.93 0 0 0 0-7.85H20Z" fill="var(--background)" />
        <path d="M9 34.5h11V42H9z" fill="currentColor" opacity=".55" />
      </svg>
    </span>
  )
}
