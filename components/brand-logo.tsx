'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

function EmblemParts({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-ring`} x1="4" y1="48" x2="52" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--brand-violet)" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.97 11.03) scale(7)">
          <stop stopColor="var(--brand-violet)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--brand-violet)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="28" cy="28" r="24" stroke={`url(#${id}-ring)`} strokeWidth="1.6" />
      <g className="brand-orb">
        <circle cx="44.97" cy="11.03" r="7" fill={`url(#${id}-glow)`} />
        <circle cx="44.97" cy="11.03" r="3.4" fill={`url(#${id}-ring)`} />
      </g>
      <text
        x="28"
        y="29"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-manrope), sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="-0.8"
      >
        2В
      </text>
    </>
  )
}

export function BrandEmblem({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 56 56" fill="none" className={cn('shrink-0 overflow-visible', className)} aria-hidden="true">
      <EmblemParts id={id} />
    </svg>
  )
}

export function BrandLogo({ className, size = 'sm' }: { className?: string; size?: 'sm' | 'lg' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      viewBox="0 0 150 56"
      fill="none"
      role="img"
      aria-label="2В Сервис"
      className={cn('group/logo w-auto shrink-0 overflow-visible', size === 'lg' ? 'h-14' : 'h-10', className)}
    >
      <EmblemParts id={id} />
      <text
        x="64"
        y="29"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-manrope), sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="-0.7"
      >
        Сервис
      </text>
    </svg>
  )
}
