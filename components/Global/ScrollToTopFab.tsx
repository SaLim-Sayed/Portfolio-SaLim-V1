"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export function ScrollToTopFab() {
  const reduce = useReducedMotion();

  const btn = (
    <Button
      size="lg"
      isIconOnly
      className="rounded-full bg-cyan-600 text-white z-50 shadow-lg shadow-cyan-900/20"
      color="primary"
      variant="bordered"
      aria-label="Back to top"
    >
      <Link href="#main">
        <FaArrowUp size={20} />
      </Link>
    </Button>
  );

  if (reduce) {
    return (
      <div className="fixed bottom-10 right-10 z-50">{btn}</div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-10 right-10 z-50"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {btn}
      </motion.div>
    </motion.div>
  );
}
