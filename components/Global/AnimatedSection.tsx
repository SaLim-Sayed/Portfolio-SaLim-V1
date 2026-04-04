"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/libs/cn";
import { easeOutExpo, fadeUpVariants } from "@/libs/motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Extra delay after scroll trigger (stagger sections) */
  delay?: number;
};

/**
 * Scroll-triggered fade-up for page sections. Respects `prefers-reduced-motion`.
 */
export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div id={id} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={cn(className)}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      // Avoid a high `amount` (e.g. 0.12): on very tall sections that requires a huge
      // strip in view before un-hiding; parent stayed opacity:0 so rows looked empty.
      viewport={{ once: true, margin: "0px 0px -96px 0px", amount: "some" }}
      transition={{ duration: 0.55, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
