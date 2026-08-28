'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const OPEN_QUIZ_EVENT = 'open-lead-quiz'
const steps = [
  { key: 'taskType', title: 'Какая задача стоит перед вами?', options: ['ИТ-аутсорсинг', 'Инфраструктура и ЦОД', 'Информационная безопасность', 'Корпоративные системы', 'Инженерные системы', 'Другое'] },
  { key: 'scale', title: 'Какой масштаб проекта?', options: ['Один офис', 'Несколько площадок', 'Федеральная инфраструктура', 'Нужно определить'] },
  { key: 'timeline', title: 'Когда нужно начать?', options: ['Как можно скорее', 'В течение месяца', 'В этом квартале', 'Изучаем варианты'] },
] as const

type Answers = { taskType: string; scale: string; timeline: string }

export function LeadQuiz() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({ taskType: '', scale: '', timeline: '' })
  const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const openQuiz = () => setOpen(true)
    window.addEventListener(OPEN_QUIZ_EVENT, openQuiz)
    return () => window.removeEventListener(OPEN_QUIZ_EVENT, openQuiz)
  }, [])

  const current = steps[step]
  function choose(value: string) {
    setAnswers((previous) => ({ ...previous, [current.key]: value }))
    window.setTimeout(() => setStep((value) => Math.min(value + 1, 3)), 180)
  }

  async function submit(formData: FormData) {
    setStatus('pending')
    setError('')
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        name: formData.get('name'), phone: formData.get('phone'), message: formData.get('message') || 'Запрос на подбор решения', website: formData.get('website'), consent: formData.get('consent') === 'on', source: 'quiz', ...answers,
      }) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Не удалось отправить заявку.')
      setStatus('success')
      sessionStorage.setItem('lead-form-sent', 'true')
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Не удалось отправить заявку.')
      setStatus('idle')
    }
  }

  if (!open) return null
  return <div className="fixed inset-0 z-[60] flex items-end justify-center bg-surface/80 backdrop-blur-sm sm:items-center sm:p-5" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
    <section key={step} className="quiz-panel max-h-[94dvh] w-full overflow-y-auto rounded-t-[2rem] bg-background p-5 shadow-2xl sm:max-w-2xl sm:rounded-[2rem] sm:p-8" role="dialog" aria-modal="true" aria-labelledby="quiz-title">
      <div className="flex items-start justify-between gap-5">
        <div><p className="eyebrow text-primary">Подбор решения · {Math.min(step + 1, 4)} / 4</p><h2 id="quiz-title" className="mt-3 max-w-xl text-balance text-2xl font-bold tracking-tight sm:text-4xl">{status === 'success' ? 'Спасибо. Картина уже яснее.' : step < 3 ? current.title : 'Куда отправить рекомендации?'}</h2></div>
        <button type="button" onClick={() => setOpen(false)} className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border" aria-label="Закрыть квиз"><X className="size-5" /></button>
      </div>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-primary transition-[width] duration-500" style={{ width: `${((Math.min(step, 3) + 1) / 4) * 100}%` }} /></div>
      {status === 'success' ? <div className="mt-8 rounded-[1.5rem] bg-primary p-7 text-primary-foreground"><Check className="size-8" /><p className="mt-6 text-lg leading-relaxed">Специалист свяжется с вами, уточнит детали и предложит следующий шаг.</p></div> : step < 3 ? <div className="mt-8 grid gap-3 sm:grid-cols-2">{current.options.map((option) => <button key={option} type="button" onClick={() => choose(option)} className="motion-card flex min-h-20 items-center justify-between gap-4 rounded-[1.25rem] border border-border bg-secondary px-5 py-4 text-left font-semibold hover:border-primary"><span>{option}</span><ArrowRight className="size-5 text-primary" /></button>)}</div> : <form action={submit} className="mt-7 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2"><label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">Имя<Input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Как к вам обращаться" /></label><label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">Телефон<Input name="phone" type="tel" required minLength={7} maxLength={30} autoComplete="tel" inputMode="tel" placeholder="+7 000 000-00-00" /></label></div>
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">Комментарий<Textarea name="message" rows={3} maxLength={1500} placeholder="Необязательно — добавьте важные детали" /></label>
        <input name="website" className="sr-only" tabIndex={-1} autoComplete="off" />
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground"><input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-primary" aria-label="Согласие на обработку персональных данных" /><span>Я даю <Link href="/personal-data-consent" className="underline underline-offset-2">согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен(а) с <Link href="/privacy" className="underline underline-offset-2">политикой обработки персональных данных</Link>.</span></label>
        {error && <p className="text-sm font-semibold text-destructive" role="alert">{error}</p>}
        <button disabled={status === 'pending'} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-foreground px-7 py-3 font-bold text-background disabled:opacity-60">{status === 'pending' ? 'Отправляем…' : 'Получить рекомендации'}<ArrowRight className="size-5" /></button>
      </form>}
      {step > 0 && status !== 'success' && <button type="button" onClick={() => setStep((value) => value - 1)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><ArrowLeft className="size-4" />Назад</button>}
    </section>
  </div>
}

export function QuizTrigger({ className = '', children = 'Подобрать решение' }: { className?: string; children?: React.ReactNode }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_QUIZ_EVENT))}>{children}</button>
}
