import { ContactForm } from '@/components/contact-form'

export function ContactCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">Контакты</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Обсудим ваш проект
          </h2>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Расскажите о задаче — обследуем процессы, спроектируем решение и предложим план реализации
            корпоративной информационной системы.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
