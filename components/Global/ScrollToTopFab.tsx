"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export function ScrollToTopFab() {
  return (
    <div className="fixed bottom-10 right-10 z-50">
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
    </div>
  );
}
