import { cn } from '@/lib/utils'

export function SignalPulse({ className }: { className?: string; tone?: 'ink' | 'light' }) {
  return (
    <div className={cn('route-grid relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface', className)} aria-label="Схема управляемой ИТ-инфраструктуры">
      <svg viewBox="0 0 640 420" className="absolute inset-0 size-full" role="img" aria-label="Связи пользователей, серверов и систем мониторинга">
        <path className="route-line" d="M74 104 C180 104 180 210 290 210 S430 92 566 92" fill="none" stroke="var(--primary)" strokeWidth="2" />
        <path className="route-line" d="M74 324 C190 324 188 210 290 210 S438 326 570 326" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <path d="M290 210 C380 210 438 210 570 210" fill="none" stroke="color-mix(in oklab,var(--surface-foreground) 28%,transparent)" strokeWidth="1" />
        {[[74,104],[74,324],[290,210],[566,92],[570,210],[570,326]].map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={i === 2 ? 13 : 8} fill={i === 1 || i === 5 ? 'var(--accent)' : 'var(--primary)'} className={i === 2 ? 'pulse-node' : undefined} />
            <circle cx={x} cy={y} r={i === 2 ? 24 : 15} fill="none" stroke="color-mix(in oklab,var(--surface-foreground) 24%,transparent)" />
          </g>
        ))}
      </svg>
      <div className="absolute left-5 top-5 rounded-full bg-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em] text-white/70">Единый контур управления</div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-[10px] text-white/50">
        <span>Пользователи</span><span className="text-center">Мониторинг 24/7</span><span className="text-right">Enterprise-системы</span>
      </div>
    </div>
  )
}
