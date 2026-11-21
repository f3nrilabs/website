import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import type { Colorway } from "./lib/colorways";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    colorway: z.enum(["brand", "horus", "dark"] satisfies Colorway[]),
    status: z.enum(["in-development", "beta", "live"]),
    statusLabel: z.string(),
    tagline: z.string(),
    problem: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
    }),
    steps: z.array(
      z.object({
        code: z.string(),
        title: z.string(),
        text: z.string(),
      }),
    ),
    features: z.array(
      z.object({
        label: z.string(),
        title: z.string(),
        text: z.string(),
      }),
    ),
    accessSubject: z.string(),
  }),
});

export const collections = { products };
