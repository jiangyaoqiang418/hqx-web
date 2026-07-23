import type { PageSeoInput } from '~/types/site'

export function usePageSeo(input: PageSeoInput) {
  const runtimeConfig = useRuntimeConfig()
  const canonical = new URL(input.path, runtimeConfig.public.siteUrl).toString()

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type || 'website',
    ogUrl: canonical,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
