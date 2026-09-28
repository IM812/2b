'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

const ORB = { x: 44.97, y: 11.03 }

function EmblemParts({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-ring`} x1="4" y1="40" x2="52" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="0.55" stopColor="var(--brand-violet)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--brand-violet)" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id={`${id}-orb`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform={`translate(${ORB.x - 1.2} ${ORB.y - 1.2}) scale(4.4)`}>
          <stop stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="0.35" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--brand-violet)" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform={`translate(${ORB.x} ${ORB.y}) scale(9)`}>
          <stop stopColor="var(--primary)" stopOpacity="0.45" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="brand-ring" cx="28" cy="28" r="24" stroke={`url(#${id}-ring)`} strokeWidth="2" strokeLinecap="round" pathLength={1} transform="rotate(-45 28 28)" />
      <g className="brand-orb">
        <g className="brand-orb-in">
          <circle cx={ORB.x} cy={ORB.y} r="9" fill={`url(#${id}-glow)`} />
          <circle cx={ORB.x} cy={ORB.y} r="3.9" fill={`url(#${id}-orb)`} />
        </g>
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
        textLength="29"
        lengthAdjust="spacingAndGlyphs"
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
  const withTagline = size === 'lg'
  return (
    <svg
      viewBox={withTagline ? '0 0 206 56' : '0 0 150 56'}
      fill="none"
      role="img"
      aria-label="2В Сервис — технологии, люди, результат"
      className={cn('group/logo w-auto shrink-0 overflow-visible', withTagline ? 'h-16' : 'h-10', className)}
    >
      <EmblemParts id={id} />
      <text
        x="66"
        y={withTagline ? 23 : 29}
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-manrope), sans-serif"
        fontWeight="700"
        fontSize={withTagline ? 23 : 22}
        letterSpacing="-0.6"
      >
        Сервис
      </text>
      {withTagline && (
        <text
          className="brand-tagline"
          x="67"
          y="42"
          dominantBaseline="central"
          fill="currentColor"
          fillOpacity="0.55"
          fontFamily="var(--font-manrope), sans-serif"
          fontWeight="600"
          fontSize="6.2"
          textLength="138"
          lengthAdjust="spacing"
        >
          ТЕХНОЛОГИИ / ЛЮДИ / РЕЗУЛЬТАТ
        </text>
      )}
    </svg>
  )
}
