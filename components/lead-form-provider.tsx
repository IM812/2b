'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { LeadForm } from '@/components/lead-form'

export const OPEN_LEAD_FORM_EVENT = 'open-lead-form'

export function LeadFormProvider() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const openForm = () => setOpen(true)
    window.addEventListener(OPEN_LEAD_FORM_EVENT, openForm)

    const dismissed = sessionStorage.getItem('lead-popup-dismissed') === 'true'
    const sent = sessionStorage.getItem('lead-form-sent') === 'true'
    const timer = !dismissed && !sent ? window.setTimeout(() => setOpen(true), 35_000) : undefined

    return () => {
      window.removeEventListener(OPEN_LEAD_FORM_EVENT, openForm)
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  function close() {
    sessionStorage.setItem('lead-popup-dismissed', 'true')
    setOpen(false)
  }

  function success() {
    sessionStorage.setItem('lead-form-sent', 'true')
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-surface/75 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section className="max-h-[92dvh] w-full overflow-y-auto rounded-t-[2rem] bg-background p-4 shadow-2xl sm:max-w-xl sm:rounded-[2rem] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="lead-form-title" onKeyDown={(event) => event.key === 'Escape' && close()}>
        <div className="mb-4 flex items-start justify-between gap-4 px-1 pt-1 sm:mb-6">
          <div>
            <p className="eyebrow text-primary">Обсудить задачу</p>
            <h2 id="lead-form-title" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Начнём с короткого разговора.</h2>
          </div>
          <button ref={closeButtonRef} type="button" onClick={close} className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border" aria-label="Закрыть форму"><X className="size-5" /></button>
        </div>
        <LeadForm compact onSuccess={success} />
      </section>
    </div>
  )
}

export function openLeadForm() {
  window.dispatchEvent(new Event(OPEN_LEAD_FORM_EVENT))
}
