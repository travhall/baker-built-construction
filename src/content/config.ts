import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    categories: z.array(z.object({ name: z.string() })),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
      featured: z.boolean().optional(),
    })),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'project': projectCollection,
};