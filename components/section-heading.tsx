import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <p
        className={cn(
          'font-mono text-xs uppercase tracking-[0.15em]',
          invert ? 'text-[oklch(0.45_0.19_253)]' : 'text-primary',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 max-w-2xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl',
          invert ? 'text-surface-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty text-base leading-relaxed',
            invert ? 'text-surface-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
