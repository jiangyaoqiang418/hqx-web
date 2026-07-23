<script setup lang="ts">
import { siteConfig } from '~/config/site'

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

useSeoMeta({
  titleTemplate: title => (title ? `${title} | ${siteConfig.shortName}` : siteConfig.name),
  description: siteConfig.description,
  ogSiteName: siteConfig.name,
  ogLocale: 'zh_CN',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            'name': siteConfig.name,
            'url': siteUrl,
            'logo': `${siteUrl}/images/brand/logo.png`,
            'email': siteConfig.contact.businessEmail,
            'telephone': siteConfig.contact.phone,
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            'name': siteConfig.name,
            'url': siteUrl,
            'inLanguage': 'zh-CN',
            'publisher': { '@id': `${siteUrl}/#organization` },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
