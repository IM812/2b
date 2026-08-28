'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type LeadFormProps = {
  compact?: boolean
  onSuccess?: () => void
}

const labelClass = 'flex flex-col gap-2 text-xs font-bold uppercase tracking-widest'
const controlClass = 'min-h-12 rounded-none border-x-0 border-t-0 border-foreground/20 bg-transparent px-0 text-base shadow-none focus-visible:border-primary focus-visible:ring-0'

export function LeadForm({ compact = false, onSuccess }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle')
  const [error, setError] = useState('')

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
        <h3 className="mt-7 text-3xl font-bold">Заявка отправлена.</h3>
        <p className="mt-3 max-w-md text-primary-foreground/75">Свяжемся с вами и начнём с короткого разговора о задаче.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('rounded-[1.75rem] bg-secondary p-5 sm:p-7', !compact && 'md:p-10')}>
      <div className={cn('grid gap-6', !compact && 'sm:grid-cols-2')}>
        <label className={labelClass}>Имя
          <Input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Как к вам обращаться" className={controlClass} />
        </label>
        <label className={labelClass}>Телефон
          <Input name="phone" type="tel" required minLength={7} maxLength={30} autoComplete="tel" inputMode="tel" placeholder="+7 000 000-00-00" className={controlClass} />
        </label>
      </div>
      <label className={cn(labelClass, 'mt-6')}>Задача
        <Textarea name="message" rows={compact ? 3 : 4} required minLength={5} maxLength={1500} placeholder="Коротко опишите задачу" className={cn(controlClass, 'resize-y py-3')} />
      </label>
      <label className="sr-only" aria-hidden="true">Не заполняйте это поле
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="mt-6 flex flex-col gap-4 text-xs leading-relaxed text-muted-foreground">
        <label className="flex cursor-pointer items-start gap-3">
          <Checkbox name="consent" required aria-label="Согласие на обработку персональных данных" />
          <span>Я принимаю <Link href="/personal-data-consent" className="underline underline-offset-2">согласие на обработку персональных данных</Link> и <Link href="/privacy" className="underline underline-offset-2">политику конфиденциальности</Link>.</span>
        </label>
      </div>
      {error && <p className="mt-5 text-sm font-semibold text-destructive" role="alert">{error}</p>}
      <button type="submit" disabled={status === 'pending'} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        {status === 'pending' ? 'Отправляем…' : 'Отправить заявку'}
        {status !== 'pending' && <ArrowUpRight className="size-4" aria-hidden />}
      </button>
    </form>
  )
}
