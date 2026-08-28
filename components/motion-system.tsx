'use client'

import { useEffect } from 'react'

export function MotionSystem() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) {
      document.documentElement.dataset.motion = 'reduced'
      return
    }

    document.documentElement.dataset.motion = 'ready'
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        ;(entry.target as HTMLElement).dataset.visible = 'true'
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return null
}
