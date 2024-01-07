import React, { ReactNode } from "react";

import { cn } from "@/libs/cn";

export default function Center({ children }: { children: ReactNode }) {
  return (
    <div className={cn("w-[94%] lg:w-[90%] 2xl:w-[80%] mx-auto")}>
      {children}
    </div>
  );
}
