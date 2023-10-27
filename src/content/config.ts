import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image()
        .refine((img) => img.width >= 300, {
          message: "Cover image must be at least 300 pixels wide!",
        })
        .optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
