import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>(
  options?: {
    y?: number
    duration?: number
    delay?: number
    stagger?: number
    childSelector?: string
  }
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = options?.childSelector
      ? el.querySelectorAll<HTMLElement>(options.childSelector)
      : [el]

    gsap.fromTo(
      targets,
      { opacity: 0, y: options?.y ?? 30 },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 0.9,
        delay: options?.delay ?? 0,
        stagger: options?.stagger ?? 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    )

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return ref
}

export function useHeroReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    const eyebrow = el.querySelector('[data-hero="eyebrow"]')
    const lines   = el.querySelectorAll('[data-hero="line"]')
    const desc    = el.querySelector('[data-hero="desc"]')
    const cta     = el.querySelector('[data-hero="cta"]')

    if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)

    if (lines.length) {
      lines.forEach((line, i) => {
        const inner = line.querySelector('span')
        if (inner) {
          tl.fromTo(
            inner,
            { opacity: 0, yPercent: 110 },
            { opacity: 1, yPercent: 0, duration: 0.9, ease: 'cubic.out' },
            0.55 + i * 0.15
          )
        }
      })
    }

    if (desc) tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.1)
    if (cta)  tl.fromTo(cta,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.3)

    return () => { tl.kill() }
  }, [])

  return ref
}
