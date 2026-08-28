'use client'

export type SceneVariant = 'services' | 'projects' | 'technologies' | 'about' | 'clients' | 'competencies' | 'careers' | 'contacts'

const scenes: Record<SceneVariant, { label: string; code: string; paths: string[]; nodes: [number, number, string][] }> = {
  services: { label: 'Сервисный контур', code: 'SVC / 08', paths: ['M40 236 C170 214 202 98 350 118 S548 212 760 72', 'M350 118 C420 62 508 52 640 128'], nodes: [[40,236,'01'],[350,118,'04'],[640,128,'07'],[760,72,'08']] },
  projects: { label: 'Реализованные маршруты', code: 'PRJ / 05', paths: ['M48 230 C160 212 188 78 326 104 S492 226 738 68'], nodes: [[48,230,'МОСКВА'],[326,104,'02'],[502,166,'04'],[738,68,'05']] },
  technologies: { label: 'Технологический стек', code: 'TECH / L4', paths: ['M56 218 L220 218 L294 152 L452 152 L526 88 L754 88', 'M220 218 L294 278 L590 278 L666 206 L770 206'], nodes: [[56,218,'L1'],[294,152,'L2'],[526,88,'L3'],[666,206,'L4']] },
  about: { label: 'География присутствия', code: 'RU / 24×7', paths: ['M52 174 C164 64 266 84 344 142 S526 238 754 92', 'M344 142 C410 104 466 90 554 110'], nodes: [[52,174,'MSK'],[344,142,'ЦФО'],[554,110,'РФ'],[754,92,'24×7']] },
  clients: { label: 'Клиентская сеть', code: 'B2B / CORE', paths: ['M388 156 C250 58 98 96 50 218', 'M388 156 C514 38 686 60 768 136', 'M388 156 C510 274 654 274 748 222'], nodes: [[50,218,'01'],[388,156,'CORE'],[768,136,'07'],[748,222,'12']] },
  competencies: { label: 'Дополнительные контуры', code: 'EXT / 06', paths: ['M180 164 C180 58 600 58 600 164 C600 270 180 270 180 164', 'M254 164 C254 108 526 108 526 164 C526 220 254 220 254 164'], nodes: [[180,164,'01'],[390,66,'03'],[600,164,'05'],[390,262,'06']] },
  careers: { label: 'Маршрут развития', code: 'TEAM / NEXT', paths: ['M48 248 C168 248 192 188 280 188 S394 116 486 116 S610 58 760 58'], nodes: [[48,248,'START'],[280,188,'GROW'],[486,116,'LEAD'],[760,58,'NEXT']] },
  contacts: { label: 'Точка связи', code: 'MSK / ONLINE', paths: ['M34 84 C180 76 244 150 380 156 S586 224 778 88', 'M36 248 C184 260 240 184 380 156'], nodes: [[34,84,'IN'],[36,248,'IN'],[380,156,'МОСКВА'],[778,88,'ONLINE']] },
}

export function PageNetworkScene({ variant }: { variant: SceneVariant }) {
  const scene = scenes[variant]
  return (
    <div className="page-network-scene pointer-events-none absolute inset-0" aria-hidden="true">
      <svg viewBox="0 0 820 330" className="h-full w-full" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <pattern id={`grid-${variant}`} width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="currentColor" strokeWidth=".7" /></pattern>
          <linearGradient id={`fade-${variant}`} x1="0" x2="1"><stop offset="0" stopColor="currentColor" stopOpacity="0" /><stop offset=".28" stopColor="currentColor" stopOpacity=".7" /><stop offset="1" stopColor="currentColor" stopOpacity="1" /></linearGradient>
        </defs>
        <rect width="820" height="330" fill={`url(#grid-${variant})`} className="text-white/[.055]" />
        <g fill="none" stroke={`url(#fade-${variant})`} strokeWidth="1.35" className="text-primary/75">
          {scene.paths.map((path, index) => <path key={path} d={path} className="network-route" style={{ animationDelay: `${index * 900}ms` }} />)}
        </g>
        {scene.nodes.map(([x,y,label], index) => (
          <g key={`${x}-${y}`} className="network-node" style={{ animationDelay: `${index * 240}ms` }}>
            <circle cx={x} cy={y} r="17" fill="none" stroke="currentColor" strokeOpacity=".22" />
            <circle cx={x} cy={y} r="4" className="fill-primary" />
            <circle cx={x} cy={y} r="7" fill="none" className="stroke-primary network-pulse" />
            <text x={x + 14} y={y - 13} fill="currentColor" className="text-[8px] font-mono tracking-[.18em] text-white/40">{label}</text>
          </g>
        ))}
        <text x="782" y="302" textAnchor="end" fill="currentColor" className="text-[8px] font-mono tracking-[.2em] text-white/25">{scene.code}</text>
      </svg>
      <div className="absolute bottom-7 right-7 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-white/30 md:flex"><span className="size-1.5 rounded-full bg-primary" />{scene.label}</div>
    </div>
  )
}
