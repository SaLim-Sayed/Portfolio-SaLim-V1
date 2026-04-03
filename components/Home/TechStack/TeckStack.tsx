"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { skillsAll } from "./data";
import { TechIcon } from "./TechIcon";
import { cn } from "@/libs/cn";

function SkillTile({
  name,
  children,
  className,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2.5 sm:gap-3 text-center max-w-[108px] sm:max-w-[118px]",
        className
      )}
    >
      <div
        className={cn(
          "flex h-[4rem] w-[4rem] sm:h-[4.5rem] sm:w-[4.5rem] items-center justify-center px-2",
          "rounded-2xl bg-white dark:bg-zinc-900",
          "shadow-[0_8px_30px_-12px_rgba(15,23,42,0.2)] dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]",
          "ring-1 ring-slate-200/90 dark:ring-zinc-700/90"
        )}
      >
        {children}
      </div>
      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 dark:text-zinc-400 leading-snug hyphens-auto">
        {name}
      </span>
    </div>
  );
}

function SkillGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center gap-x-4 gap-y-9 sm:gap-x-10 sm:gap-y-11 md:gap-x-10">
      {skillsAll.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-32px" }}
          transition={{
            duration: 0.38,
            delay: Math.min(i * 0.02, 0.4),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SkillTile name={item.name}>
            <TechIcon
              localSrc={item.localSrc}
              cdnSlug={item.cdnSlug}
              cdnSlugFallback={item.cdnSlugFallback}
              alt={item.name}
            />
          </SkillTile>
        </motion.div>
      ))}
    </div>
  );
}

const TeckStack = () => {
  const title = (
    <div className="flex justify-center items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-900"
      >
        <Image
          src="S_logo.jpeg"
          alt="LOGO"
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className="flex flex-col items-start text-left">
        <span className="text-teal-700 dark:text-teal-500 text-[11px] font-semibold uppercase tracking-[0.28em] mb-1">
          Expertise
        </span>
        <Typewriter text="Skills" delay={800} cursor={false} />
      </div>
    </div>
  );

  return (
    <div
      className="relative bg-slate-50 dark:bg-[#09090b] py-16 md:py-24 border-t border-slate-200/80 dark:border-zinc-800 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3] dark:opacity-[0.15]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.2) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <Center>
        <div className="relative flex flex-col items-center justify-center z-[1] w-full">
          <Title title={title} />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 -mt-2 mb-12 md:mb-14 text-[15px] leading-relaxed"
          >
            Technologies and tools I use across frontend, mobile, APIs, and
            design—from markup and UI libraries to state, data, and delivery.
          </motion.p>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SkillGrid />
          </div>
        </div>
      </Center>
    </div>
  );
};

export default TeckStack;
