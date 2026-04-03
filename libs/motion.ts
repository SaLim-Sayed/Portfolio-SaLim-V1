import type { Transition, Variants } from "framer-motion";

/** Shared easing — smooth deceleration */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transitionBase: Transition = {
  duration: 0.55,
  ease: easeOutExpo,
};

export const transitionFast: Transition = {
  duration: 0.4,
  ease: easeOutExpo,
};

/** Section enters from below */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

/** Stagger children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionFast,
  },
};
