/** Shared easing — cheap to animate: opacity + transform only. */
export const transitionSnappy = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1] as const,
};

/** Cap stagger so long lists do not chain heavy delays. */
export function staggerDelay(
  index: number,
  step = 0.035,
  max = 0.22
): number {
  return Math.min(index * step, max);
}
