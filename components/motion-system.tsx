'use client'

import { useEffect } from 'react'

export function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    const constrained = reduceMotion || connection?.saveData === true

    root.dataset.motion = constrained ? 'reduced' : 'ready'
    if (constrained) return

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
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
  }, [])

  return null
}
