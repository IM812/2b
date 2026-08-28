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
    const targets = Array.from(document.querySelectorAll<HTMLElement>('main [data-reveal]'))
    targets.forEach((target) => delete target.dataset.visible)
    if (constrained) {
      targets.forEach((target) => { target.dataset.visible = 'true' })
      return
    }
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
    const fallback = window.setTimeout(() => {
      targets.forEach((target) => { target.dataset.visible = 'true' })
    }, 1_800)
    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
