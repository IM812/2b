'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function MotionSystem() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)')
    let observer: IntersectionObserver | undefined

    const revealImmediately = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
        element.dataset.visible = 'true'
      })
    }

    const initialize = () => {
      observer?.disconnect()

      if (reducedMotion.matches || reducedData.matches) {
        root.dataset.motion = 'reduced'
        revealImmediately()
        return
      }

      root.dataset.motion = 'ready'
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const element = entry.target as HTMLElement
            element.dataset.visible = 'true'
            observer?.unobserve(element)
          })
        },
        { rootMargin: '0px 0px -7% 0px', threshold: 0.08 },
      )

      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
        if (element.dataset.visible !== 'true') observer?.observe(element)
      })
    }

    const syncVisibility = () => {
      root.toggleAttribute('data-motion-paused', document.hidden)
    }

    initialize()
    syncVisibility()
    reducedMotion.addEventListener('change', initialize)
    reducedData.addEventListener('change', initialize)
    document.addEventListener('visibilitychange', syncVisibility)

    return () => {
      observer?.disconnect()
      reducedMotion.removeEventListener('change', initialize)
      reducedData.removeEventListener('change', initialize)
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [pathname])

  return null
}
