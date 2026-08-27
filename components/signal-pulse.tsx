import { cn } from '@/lib/utils'

const nodes = [
  { x: 12, y: 27, label: 'Рабочие места', tone: 'primary' },
  { x: 25, y: 72, label: 'Service desk', tone: 'accent' },
  { x: 49, y: 46, label: '2В Control', tone: 'core' },
  { x: 72, y: 21, label: 'ЦОД', tone: 'primary' },
  { x: 85, y: 51, label: 'ERP / СЭД', tone: 'accent' },
  { x: 72, y: 78, label: 'Cloud', tone: 'primary' },
]

export function SignalPulse({ className }: { className?: string; tone?: 'ink' | 'light' }) {
  return (
    <div className={cn('route-grid relative min-h-[25rem] overflow-hidden rounded-[2rem] bg-surface text-surface-foreground', className)} aria-label="Схема управляемой ИТ-инфраструктуры">
      <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
        <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em]">Инфраструктура в реальном времени</span>
        <span className="flex items-center gap-2 text-xs text-white/55"><i className="signal-dot" />Все системы работают</span>
      </div>
      <svg viewBox="0 0 760 440" className="absolute inset-0 size-full" aria-hidden="true">
        <path className="route-line" d="M92 119 C180 119 250 202 372 202 S510 92 548 92" fill="none" stroke="var(--primary)" strokeWidth="2" />
        <path className="route-line" d="M190 315 C250 315 292 202 372 202 S512 342 548 342" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <path className="route-line route-line-delay" d="M372 202 C490 202 570 224 646 224" fill="none" stroke="white" strokeOpacity=".35" strokeWidth="1.5" />
        <circle cx="372" cy="202" r="74" fill="var(--primary)" fillOpacity=".14" className="pulse-halo" />
        <circle cx="372" cy="202" r="42" fill="var(--primary)" />
        <text x="372" y="199" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">2В</text>
        <text x="372" y="216" textAnchor="middle" fill="white" fillOpacity=".65" fontSize="8">CONTROL</text>
      </svg>
      {nodes.filter((node) => node.tone !== 'core').map((node) => (
        <div key={node.label} className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
          <span className={cn('mx-auto block size-3 rounded-full ring-8 ring-white/5', node.tone === 'accent' ? 'bg-accent' : 'bg-primary')} />
          <span className="mt-3 block whitespace-nowrap text-center text-[10px] font-semibold text-white/55">{node.label}</span>
        </div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-[10px] text-white/45">
        <span>1 000+ серверов</span><span className="text-center">24/7 контроль</span><span className="text-right">15 мин реакция</span>
      </div>
    </div>
  )
}
