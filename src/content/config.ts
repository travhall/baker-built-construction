// @/content/config.ts

import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string().min(1, "Title is required"),
    date: z.date(),
    categories: z.array(z.object({
      name: z.string().min(1, "Category name is required")
    })).min(1, "At least one category is required"),
    images: z.array(z.object({
      src: z.string().url("Must be a valid URL"),
      caption: z.string().optional(),
      featured: z.boolean().optional(),
    })).min(1, "At least one image is required"),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'project': projectCollection,
};

export const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];