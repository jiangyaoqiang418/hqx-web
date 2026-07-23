import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    news: defineCollection({
      type: 'page',
      source: 'news/**/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        category: z.string(),
        cover: z.string().optional(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        department: z.string(),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        featured: z.boolean().default(false),
      }),
    }),
  },
})
