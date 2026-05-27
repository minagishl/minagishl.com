/** Gradient images in `public/gradient/` (`1.webp` … `25.webp`). */
export const GRADIENT_IMAGE_COUNT = 25

export function hashStringToGradientIndex(text: string): number {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = (Math.imul(31, hash) + text.charCodeAt(i)) | 0
  }
  return (Math.abs(hash) % GRADIENT_IMAGE_COUNT) + 1
}

export function getGradientImagePath(text: string): string {
  return `/gradient/${hashStringToGradientIndex(text)}.webp`
}
