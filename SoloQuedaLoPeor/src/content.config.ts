import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contentBase = './src/SOLOQUEDALOPEOR';
const contentPattern = ['**/*.{md,mdx}', '!**/plantillas/**', '!**/.trash/**', '!**/.obsidian/**'];

const normalizedImageField = z.any().nullable().optional().transform((val) => {
  if (Array.isArray(val)) {
    return val[0] || null;
  }

  if (typeof val === 'string') {
    return val;
  }

  return null;
});

const normalizedDescriptionField = z.union([z.string(), z.null(), z.undefined()]).optional().transform((val) => {
  if (typeof val === 'string' && val.trim() !== '') {
    return val;
  }

  return 'No description provided';
});

// Define schema for blog posts
const postsCollection = defineCollection({
  loader: glob({ pattern: contentPattern, base: `${contentBase}/posts` }),
  schema: z.object({
    title: z.string().default('Untitled Post'),
    description: normalizedDescriptionField,
    excerpt: z.union([z.string(), z.null(), z.undefined()]).optional(),
    metadata: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).partial().optional(),
    date: z.union([z.coerce.date(), z.null(), z.undefined()]).optional(),
    publishDate: z.union([z.coerce.date(), z.null(), z.undefined()]).optional(),
    updateDate: z.union([z.coerce.date(), z.null(), z.undefined()]).optional(),
    tags: z.array(z.string()).nullable().optional(),
    draft: z.boolean().optional(),
    image: normalizedImageField,
    imageOG: z.boolean().optional(),
    imageAlt: z.string().nullable().optional(),
    hideCoverImage: z.boolean().optional(),
    hideTOC: z.boolean().optional(),
    showTOC: z.boolean().optional(),
    targetKeyword: z.string().nullable().optional(),
    author: z.string().nullable().optional(),
    noIndex: z.boolean().optional(),
    category: z.string().nullable().optional(),
    gpxMap: z.boolean().optional(),
  }).transform((data) => ({
    ...data,
    description:
      data.description ||
      data.excerpt ||
      data.metadata?.description ||
      'No description provided',
    date: data.date || data.publishDate || data.updateDate || new Date(),
  })),
});

// Define schema for static pages
const pagesCollection = defineCollection({
  loader: glob({ pattern: contentPattern, base: `${contentBase}/pages` }),
  schema: z.object({
    title: z.string().default('Untitled Page'),
    description: normalizedDescriptionField,
    draft: z.boolean().optional(),
    lastModified: z.coerce.date().optional(),
    image: normalizedImageField,
    imageAlt: z.string().nullable().optional(),
    hideCoverImage: z.boolean().optional(),
    hideTOC: z.boolean().optional(),
    showTOC: z.boolean().optional(),
    noIndex: z.boolean().optional(),
  }),
});

// Define schema for projects
const projectsCollection = defineCollection({
  loader: glob({ pattern: contentPattern, base: `${contentBase}/projects` }),
  schema: z.object({
    title: z.string().default('Untitled Project'),
    description: normalizedDescriptionField,
    date: z.coerce.date().default(() => new Date()),
    categories: z.array(z.string()).nullable().optional().default([]),
    repositoryUrl: z.union([z.string(), z.null(), z.undefined()]).optional().transform(val => val || ''),
    projectUrl: z.union([z.string(), z.null(), z.undefined()]).optional().transform(val => val || ''),
    demoUrl: z.union([z.string(), z.null(), z.undefined()]).optional().transform(val => val || ''),
    demoURL: z.union([z.string(), z.null(), z.undefined()]).optional().transform(val => val || ''),
    status: z.string().nullable().optional(),
    image: normalizedImageField,
    imageAlt: z.string().nullable().optional(),
    hideCoverImage: z.boolean().optional(),
    hideTOC: z.boolean().optional(),
    showTOC: z.boolean().optional(),
    draft: z.boolean().optional(),
    noIndex: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Define schema for docs
const docsCollection = defineCollection({
  loader: glob({ pattern: contentPattern, base: `${contentBase}/docs` }),
  schema: z.object({
    title: z.string().default('Untitled Documentation'),
    description: normalizedDescriptionField,
    category: z.string().nullable().optional().default('General'),
    order: z.number().default(0),
    lastModified: z.coerce.date().optional(),
    version: z.string().nullable().optional(),
    image: normalizedImageField,
    imageAlt: z.string().nullable().optional(),
    hideCoverImage: z.boolean().optional(),
    hideTOC: z.boolean().optional(),
    draft: z.boolean().optional(),
    noIndex: z.boolean().optional(),
    showTOC: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Define schema for special home pages (homepage blurb, 404, projects index, docs index)
const specialCollection = defineCollection({
  loader: glob({ pattern: contentPattern, base: `${contentBase}/special` }),
  schema: z.object({
    title: z.string().default('Untitled Page'),
    description: normalizedDescriptionField,
    hideTOC: z.boolean().optional(),
    // These pages have fixed URLs and special logic
    // URLs are determined by the file location, not frontmatter
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
  projects: projectsCollection,
  docs: docsCollection,
  special: specialCollection,
};

