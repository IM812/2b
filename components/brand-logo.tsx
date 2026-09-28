'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  size?: 'sm' | 'lg'
  withTagline?: boolean
}

export function BrandEmblem({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('brand-emblem shrink-0 overflow-visible', className)} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-ring`} x1="6" y1="10" x2="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="0.55" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id={`${id}-orb`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.5 11) scale(5.5)">
          <stop stopColor="var(--primary)" stopOpacity="0.45" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="27" stroke={`url(#${id}-ring)`} strokeWidth="2.4" />
      <g className="brand-orb">
        <circle cx="51.1" cy="12.9" r="7" fill={`url(#${id}-orb)`} />
        <circle cx="51.1" cy="12.9" r="4.2" fill="var(--primary)" />
      </g>
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-manrope), sans-serif"
        fontWeight="800"
        fontSize="23"
        letterSpacing="-1"
      >
        2B
      </text>
    </svg>
  )
}

export function BrandLogo({ className, size = 'sm', withTagline = false }: BrandLogoProps) {
  const large = size === 'lg'

  return (
    <span className={cn('group/logo inline-flex items-center', large ? 'gap-4' : 'gap-2.5', className)}>
      <BrandEmblem className={large ? 'size-16' : 'size-10'} />
      <span className="flex flex-col">
        <span className={cn('font-bold leading-none tracking-[-0.035em]', large ? 'text-3xl' : 'text-lg')}>Сервис</span>
        {withTagline && (
          <span className={cn('font-mono uppercase leading-none tracking-[0.18em] text-muted-foreground', large ? 'mt-2.5 text-[10px]' : 'mt-1.5 text-[8px]')}>
            Технологии / Люди / Результат
          </span>
        )}
      </span>
    </span>
  )
}
