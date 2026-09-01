'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type LeadFormProps = {
  compact?: boolean
  onSuccess?: () => void
  source?: 'form' | 'contact' | 'career'
  heading?: string
  messageLabel?: string
  messagePlaceholder?: string
  submitLabel?: string
}

const labelClass = 'flex flex-col gap-2 text-xs font-bold uppercase tracking-widest'
const controlClass = 'min-h-12 rounded-none border-x-0 border-t-0 border-foreground/20 bg-transparent px-0 font-sans text-base font-normal normal-case tracking-normal shadow-none focus-visible:border-primary focus-visible:ring-0'

export function LeadForm({ compact = false, onSuccess, source = 'form', heading, messageLabel = 'Задача', messagePlaceholder = 'Коротко опишите задачу', submitLabel = 'Отправить заявку' }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle')
  const [error, setError] = useState('')
  const [formStartedAt] = useState(() => Date.now())

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('pending')
    setError('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          message: data.get('message'),
          website: data.get('website'),
          consent: data.get('consent') === 'on',
          source,
          submittedAt: formStartedAt,
        }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Не удалось отправить заявку.')
      form.reset()
      setStatus('success')
      onSuccess?.()
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Не удалось отправить заявку.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('rounded-[1.75rem] bg-primary p-7 text-primary-foreground', !compact && 'md:p-12')} role="status">
        <Check className="size-9" aria-hidden />
        <h3 className="mt-7 text-[25px] font-bold">{source === 'career' ? 'Отклик отправлен' : 'Заявка отправлена'}</h3>
        <p className="mt-3 max-w-md text-primary-foreground/75">{source === 'career' ? 'Спасибо за знакомство. Вернемся, когда появится задача под ваш профиль.' : 'Свяжемся с вами и начнем с короткого разговора о задаче.'}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('rounded-[1.75rem] bg-secondary p-5 sm:p-7', !compact && 'md:p-10')}>
      {heading && <div className="mb-8"><p className="eyebrow text-primary">Форма обращения</p><h2 className="mt-3 text-balance text-3xl font-bold tracking-tight">{heading}</h2></div>}
      <div className={cn('grid gap-6', !compact && 'sm:grid-cols-2')}>
        <label className={labelClass}>Имя
          <Input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Как к вам обращаться" className={controlClass} />
        </label>
        <label className={labelClass}>Телефон
          <Input name="phone" type="tel" required minLength={11} maxLength={18} autoComplete="tel" inputMode="tel" placeholder="+7 000 000-00-00" pattern="(?:\+7|7|8)(?:(?: |\(|\)|-)*[0-9]){10}" title="Введите российский номер: +7 000 000-00-00" className={controlClass} />
        </label>
      </div>
      <label className={cn(labelClass, 'mt-6')}>{messageLabel}
        <Textarea name="message" rows={compact ? 3 : 4} required minLength={5} maxLength={1500} placeholder={messagePlaceholder} className={cn(controlClass, 'resize-y py-3')} />
      </label>
      <label className="sr-only" aria-hidden="true">Не заполняйте это поле
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="mt-6 flex flex-col gap-4 text-xs leading-relaxed text-muted-foreground">
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-primary" aria-label="Согласие на обработку персональных данных" />
          <span>Я даю <Link href="/personal-data-consent" className="underline underline-offset-2">согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен(а) с <Link href="/privacy" className="underline underline-offset-2">политикой обработки персональных данных</Link>.</span>
        </label>
      </div>
      {error && <p className="mt-5 text-sm font-semibold text-destructive" role="alert">{error}</p>}
      <button type="submit" disabled={status === 'pending'} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        {status === 'pending' ? 'Отправляем…' : submitLabel}
        {status !== 'pending' && <ArrowUpRight className="size-4" aria-hidden />}
      </button>
    </form>
  )
}
