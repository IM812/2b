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
          'font-mono text-xs uppercase tracking-wider',
          invert ? 'text-accent' : 'text-accent',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl',
          invert ? 'text-background' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty text-base leading-relaxed',
            invert ? 'text-background/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
