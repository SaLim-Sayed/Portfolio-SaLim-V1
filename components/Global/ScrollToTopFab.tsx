"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { motion, useReducedMotion } from "framer-motion";
import { transitionSnappy } from "@/libs/motion";

export function ScrollToTopFab() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-10 right-10 z-50"
      initial={reduce ? false : { opacity: 0, scale: 0.92 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1 }}
      transition={{ ...transitionSnappy, delay: 0.4 }}
    >
      <Button
        size="lg"
        isIconOnly
        className="rounded-full z-50 shadow-xl"
        color="primary"
        variant="shadow"
        aria-label="Back to top"
      >
        <Link href="#main">
          <FaArrowUp size={20} />
        </Link>
      </Button>
    </motion.div>
  );
}
