"use client";

import { motion, useReducedMotion } from "framer-motion";
import { transitionSnappy } from "@/libs/motion";

type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Scroll reveal using only opacity + translateY (GPU-friendly).
 * No restrictive viewport `amount` — avoids tall sections staying invisible.
 */
export function AnimatedSection({ id, className, style, children }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div id={id} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={transitionSnappy}
    >
      {children}
    </motion.div>
  );
}
