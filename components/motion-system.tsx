'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function MotionSystem() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const mobile = window.matchMedia('(max-width: 767px)').matches
    const lowPower = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4
    const constrained = reduceMotion || connection?.saveData === true || (mobile && lowPower)

    root.dataset.motion = constrained ? 'reduced' : 'ready'
    if (constrained) return

    const authoredTargets = Array.from(document.querySelectorAll<HTMLElement>('main [data-reveal]'))
    if (!mobile && authoredTargets.length === 0) {
      document.querySelectorAll<HTMLElement>('main section > div > *').forEach((target) => {
        if (!target.closest('[data-reveal]')) target.dataset.reveal = target.matches('article, a') ? 'scale' : 'default'
      })
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>('main [data-reveal]'))
    targets.forEach((target, index) => {
      if (!target.style.getPropertyValue('--reveal-order')) {
        target.style.setProperty('--reveal-order', String(index % 6))
      }
    })

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const target = entry.target as HTMLElement
        target.dataset.visible = 'true'
        observer.unobserve(target)
      }
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.12 })

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        target.dataset.visible = 'true'
        return
      }
      observer.observe(target)
    })
    return () => observer.disconnect()
  }, [pathname])

  return null
}
