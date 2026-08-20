'use client'

import { cn } from '@/lib/utils'

const nodes = [
  { label: 'ERP', x: '12%', y: '22%' },
  { label: 'ECM', x: '44%', y: '12%' },
  { label: 'API', x: '75%', y: '28%' },
  { label: 'DATA', x: '22%', y: '68%' },
  { label: 'CORE', x: '52%', y: '52%', core: true },
  { label: 'BI', x: '82%', y: '72%' },
]

export function SystemVisual({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div
      className={cn(
        'relative min-h-[22rem] overflow-hidden border font-mono',
        light ? 'border-surface-foreground/16 bg-surface text-surface-foreground' : 'border-foreground/14 bg-card text-foreground',
        className,
      )}
      aria-label="Схема интеграции корпоративных систем"
      role="img"
    >
      <div className="system-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] opacity-50">
        <span>Architecture / 02</span>
        <span>Operational</span>
      </div>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M12 22 L52 52 L75 28 M22 68 L52 52 L82 72 M44 12 L52 52" fill="none" stroke="currentColor" strokeOpacity=".28" strokeWidth=".35" vectorEffect="non-scaling-stroke" />
        <path className="system-flow" d="M12 22 L52 52 L82 72" fill="none" stroke="currentColor" strokeOpacity=".8" strokeWidth=".7" vectorEffect="non-scaling-stroke" />
      </svg>
      {nodes.map((node) => (
        <div
          key={node.label}
          className={cn(
            'absolute -translate-x-1/2 -translate-y-1/2 border px-2.5 py-2 text-[9px] tracking-[0.14em]',
            node.core ? 'border-primary bg-primary text-primary-foreground' : light ? 'border-surface-foreground/30 bg-surface' : 'border-foreground/25 bg-card',
          )}
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 flex justify-between border-t border-current/15 pt-3 text-[9px] uppercase tracking-[0.14em] opacity-55">
        <span>6 systems</span><span>99.95% SLA</span><span>24 / 7</span>
      </div>
    </div>
  )
}
