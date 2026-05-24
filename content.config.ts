import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  thumbnail: z.string().optional(),
  youtube: z.string().optional(),
  draft: z.boolean().default(false),
})

export default defineContentConfig({
  collections: {
    works: defineCollection({
      type: 'page',
      source: 'works/**/*.md',
      schema: baseSchema,
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: baseSchema,
    }),
  },
})
