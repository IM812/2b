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

      // Content is visible by default; only elements below the fold are explicitly queued (data-visible="false"),
      // so anything the observer misses can never stay hidden.
      const viewportBottom = window.innerHeight
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
        if (element.dataset.visible === 'true') return
        const { top } = element.getBoundingClientRect()
        element.dataset.visible = top < viewportBottom ? 'true' : 'false'
      })

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
        { rootMargin: '0px 0px -5% 0px', threshold: 0 },
      )

      document.querySelectorAll<HTMLElement>('[data-reveal][data-visible="false"]').forEach((element) => {
        observer?.observe(element)
      })
    }

    // Fast scrolling can skip IntersectionObserver callbacks; never leave content above the fold hidden.
    let scrollFrame = 0
    const revealPassed = () => {
      scrollFrame = 0
      const viewportBottom = window.innerHeight
      document.querySelectorAll<HTMLElement>('[data-reveal][data-visible="false"]').forEach((element) => {
        if (element.getBoundingClientRect().top < viewportBottom) {
          element.dataset.visible = 'true'
          observer?.unobserve(element)
        }
      })
    }
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(revealPassed)
    }
    const fallbackTimer = window.setTimeout(revealPassed, 1500)

    const syncVisibility = () => {
      root.toggleAttribute('data-motion-paused', document.hidden)
    }

    initialize()
    syncVisibility()
    reducedMotion.addEventListener('change', initialize)
    reducedData.addEventListener('change', initialize)
    document.addEventListener('visibilitychange', syncVisibility)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(fallbackTimer)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      reducedMotion.removeEventListener('change', initialize)
      reducedData.removeEventListener('change', initialize)
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [pathname])

  return null
}
