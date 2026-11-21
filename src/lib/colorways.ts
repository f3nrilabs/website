/**
 * Colorways: a gradient image pair plus one accent color (docs/DESIGN.md, "Colorways").
 * Components take a `Colorway` and read everything else from here; never hard-code image paths.
 */
export type Colorway = "brand" | "horus" | "dark";

interface ColorwayDef {
  /** 960 px and 1920 px renders of the gradient, both 16:9. */
  image: { small: string; large: string };
  /** CSS value of the colorway's accent, always a token. */
  accent: string;
}

export const colorways: Record<Colorway, ColorwayDef> = {
  brand: {
    image: {
      small: "/images/gradients/brand-960.webp",
      large: "/images/gradients/brand-1920.webp",
    },
    accent: "var(--cw-brand-accent)",
  },
  horus: {
    image: {
      small: "/images/gradients/horus-960.webp",
      large: "/images/gradients/horus-1920.webp",
    },
    accent: "var(--cw-horus-accent)",
  },
  dark: {
    image: {
      small: "/images/gradients/dark-960.webp",
      large: "/images/gradients/dark-1920.webp",
    },
    accent: "var(--cw-brand-accent)",
  },
};

/** `srcset` value for a colorway's gradient image. */
export function gradientSrcset(colorway: Colorway): string {
  const { small, large } = colorways[colorway].image;
  return `${small} 960w, ${large} 1920w`;
}

/** Inline style that makes a section use the colorway's accent for its pills, labels and links. */
export function accentStyle(colorway: Colorway): string {
  return `--page-accent: ${colorways[colorway].accent}`;
}
