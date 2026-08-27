import { cn } from '@/lib/utils'

/**
 * Фирменный графический мотив компании: линия «пульса» инфраструктуры,
 * которая не прерывается. Используется как сигнатурный элемент вместо
 * декоративной графики или стоковых фото.
 */
export function SignalPulse({ className, tone = 'ink' }: { className?: string; tone?: 'ink' | 'light' }) {
  return (
    <svg
      viewBox="0 0 480 64"
      fill="none"
      className={cn('w-full', className)}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M0 32 H150 L168 32 L180 10 L196 54 L210 32 L226 32 L238 20 L250 32 H480"
        stroke={tone === 'ink' ? 'var(--primary)' : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={240}
        strokeDasharray="240"
        style={{ animation: 'pulse-draw 1.6s cubic-bezier(.22,1,.36,1) .15s both' }}
      />
    </svg>
  )
}
