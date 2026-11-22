import { getCollection, type CollectionEntry } from "astro:content";

export type ResearchEntry = CollectionEntry<"research">;

/**
 * Every research entry, newest date first (docs/PRODUCT.md).
 * Drafts stay visible in development and are left out of the build.
 */
export async function getPublishedResearch(): Promise<ResearchEntry[]> {
  const entries = await getCollection("research", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  // Frontmatter dates carry no time of day; pinning UTC keeps the calendar day stable.
  timeZone: "UTC",
});

/** `22 Nov 2026`. */
export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
