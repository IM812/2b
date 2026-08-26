import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Контакты — 2В Сервис',
  description: 'Свяжитесь с 2В Сервис для обсуждения проекта внедрения, интеграции или технической поддержки корпоративных информационных систем.',
}

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Обсудим ваш проект"
        description="Расскажите о задаче — мы вернемся с предложением по подходу, срокам и составу команды."
      />

      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</p>
              <a href="mailto:info@2v-service.ru" className="mt-1 block text-lg font-medium text-foreground">
                info@2v-service.ru
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Телефон</p>
              <a href="tel:+74957875615" className="mt-1 block text-lg font-medium text-foreground">
                +7 (495) 787-56-15
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Адрес</p>
              <p className="mt-1 text-lg font-medium text-foreground text-pretty">г. Москва, ул. 1-я Миусская, д. 20, стр. 5</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Техническая поддержка</p>
              <p className="mt-1 text-lg font-medium text-foreground">Круглосуточно, 24/7</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
