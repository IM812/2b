import Image from 'next/image'
import { INDUSTRIES } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Industries() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/industries-photo.png"
          alt="Промышленное производство с автоматизированными линиями"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Отрасли" title="С кем мы работаем" />

        <div className="mt-12 grid gap-px overflow-hidden bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div key={industry.title} className="bg-background/60 p-6 backdrop-blur-sm">
              <h3 className="font-heading text-base font-medium leading-snug text-foreground">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
