'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const fieldClass = 'w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setPending(true); setTimeout(() => { setPending(false); setSubmitted(true) }, 600) }
  if (submitted) return <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-12"><Check className="size-10" /><h3 className="mt-8 text-3xl font-bold">Заявка отправлена.</h3><p className="mt-3 max-w-md text-primary-foreground/75">Свяжемся с вами и начнём с короткого разговора о задаче.</p></div>
  return <form onSubmit={handleSubmit} className="rounded-[2rem] bg-secondary p-6 md:p-10">
    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <label className="text-xs font-bold uppercase tracking-widest">Имя<input name="name" required autoComplete="name" placeholder="Как к вам обращаться" className={fieldClass}/></label>
      <label className="text-xs font-bold uppercase tracking-widest">Компания<input name="company" autoComplete="organization" placeholder="Название компании" className={fieldClass}/></label>
      <label className="text-xs font-bold uppercase tracking-widest">Email<input name="email" type="email" required autoComplete="email" placeholder="name@company.ru" className={fieldClass}/></label>
      <label className="text-xs font-bold uppercase tracking-widest">Телефон<input name="phone" type="tel" autoComplete="tel" placeholder="+7 000 000-00-00" className={fieldClass}/></label>
    </div>
    <label className="mt-8 block text-xs font-bold uppercase tracking-widest">Задача<textarea name="message" rows={4} required placeholder="Расскажите, что нужно сделать" className={fieldClass}/></label>
    <button type="submit" disabled={pending} className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60">{pending ? 'Отправка…' : 'Отправить заявку'}{!pending && <ArrowUpRight className="size-4" />}</button>
  </form>
}
