import type { Ref } from 'vue'

export function usePageEntrance(container: Ref<HTMLElement | null>) {
  let cleanup: (() => void) | undefined

  onMounted(async () => {
    if (!container.value) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const { gsap } = await import('gsap')
    const route = useRoute()
    const storageKey = `page-entered:${route.path}`
    const visited = window.sessionStorage.getItem(storageKey) === 'true'
    const context = gsap.context(() => {
      if (visited) {
        gsap.fromTo(container.value, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        return
      }

      gsap.fromTo(
        '[data-entrance]',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: 'power3.out',
        },
      )
      window.sessionStorage.setItem(storageKey, 'true')
    }, container.value)

    cleanup = () => context.revert()
  })

  onBeforeUnmount(() => cleanup?.())
}
