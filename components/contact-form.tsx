'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    // Placeholder submission — wire up to a backend/email service when available.
    setTimeout(() => {
      setPending(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 bg-secondary p-8">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-lg font-medium text-foreground">Заявка отправлена</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Спасибо! Мы свяжемся с вами в ближайшее время для обсуждения проекта.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-secondary p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Компания
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Задача проекта
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center gap-1.5 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? 'Отправка…' : 'Отправить заявку'}
        {!pending && <ArrowUpRight className="size-4" aria-hidden="true" />}
      </button>
    </form>
  )
}
