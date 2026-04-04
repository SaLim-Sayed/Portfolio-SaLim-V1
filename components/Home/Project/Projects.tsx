"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { Button, Image } from "@nextui-org/react";
import { projectsList } from "./data";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import NextImage from "next/image";
import { cn } from "@/libs/cn";

function projectKind(item: (typeof projectsList)[number]): string {
  const blob = item.tools.map((t) => t.name).join(" ").toLowerCase();
  if (blob.includes("react native")) return "Mobile application";
  return "Web platform";
}

const ProjectRow = ({
  item,
  index,
}: {
  item: (typeof projectsList)[number];
  index: number;
}) => {
  const reversed = index % 2 === 1;
  const idx = String(index + 1).padStart(2, "0");
  const titleId = `project-heading-${item.id}`;
  const previewHref = item.demo !== "#" ? item.demo : item.github;
  const previewLabel =
    item.demo !== "#"
      ? `Open live demo: ${item.name}`
      : `View repository: ${item.name}`;
  const kind = projectKind(item);

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "group/row relative flex flex-col md:flex-row md:items-center gap-10 md:gap-14 lg:gap-20 py-16 md:py-[5.25rem] border-b border-divider last:border-b-0",
        "rounded-2xl md:rounded-none md:mx-0 -mx-1 px-3 md:px-0",
        "transition-colors duration-300 md:hover:bg-content2/50",
        reversed && "md:flex-row-reverse"
      )}
    >
      <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center text-left min-w-0 md:max-w-xl pl-1 md:pl-0 border-l-[3px] border-teal-600/25 dark:border-teal-500/30 md:border-l-0 md:border-none">
        <div className="pl-4 md:border-l-[3px] md:border-teal-600/25 md:dark:border-teal-500/30 md:pl-7 lg:pl-8 -ml-1 md:ml-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
            <span
              className="font-mono text-[12px] sm:text-[13px] tabular-nums text-default-400"
              aria-hidden
            >
              {idx}
            </span>
            <span className="h-px w-8 sm:w-10 bg-divider shrink-0" />
            <span className="text-[12px] text-default-500 font-medium">
              {kind}
              <span className="mx-2 text-divider">·</span>
              <span className="text-default-400">
                {item.tools.length}{" "}
                {item.tools.length === 1 ? "technology" : "technologies"}
              </span>
            </span>
          </div>

          <h3
            id={titleId}
            className="text-[1.65rem] sm:text-3xl md:text-[2rem] font-semibold tracking-tight text-foreground mb-4 leading-snug transition-colors duration-300 group-hover/row:text-primary"
          >
            {item.name}
          </h3>
          <p className="text-foreground/70 text-[15px] md:text-base leading-[1.78] mb-7">
            {item.description}
          </p>

          <div
            className="flex flex-wrap gap-2 mb-9"
            role="list"
            aria-label="Technologies used"
          >
            {item.tools.map((tool) => (
              <span
                key={tool.id}
                role="listitem"
                className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-md text-[13px] font-medium text-foreground bg-content1 border border-divider shadow-sm"
              >
                <span className="w-4 h-4 flex items-center justify-center shrink-0 opacity-90 [&_img]:max-w-full [&_img]:max-h-full">
                  {tool.icon}
                </span>
                {tool.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link target="_blank" href={item.github} rel="noopener noreferrer">
              <Button
                size="md"
                variant="bordered"
                className="h-11 min-w-[132px] rounded-lg font-medium text-[13px] border-slate-300 dark:border-zinc-600 text-slate-800 dark:text-zinc-200 bg-white/90 dark:bg-zinc-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-zinc-950"
                startContent={<Github size={17} strokeWidth={1.75} />}
              >
                Repository
              </Button>
            </Link>
            {item.demo !== "#" && (
              <Link target="_blank" href={item.demo} rel="noopener noreferrer">
                <Button
                  size="md"
                  color="primary"
                  className="h-11 min-w-[132px] rounded-lg font-medium text-[13px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-zinc-950"
                  endContent={<ArrowUpRight size={17} strokeWidth={2} />}
                >
                  Live site
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 w-full md:w-1/2 shrink-0 flex justify-center">
        <Link
          href={previewHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={previewLabel}
          className={cn(
            "relative w-full max-w-[min(100%,480px)] block rounded-xl overflow-hidden outline-none",
            "ring-1 ring-divider",
            "shadow-xl dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]",
            "transition-[transform,box-shadow,ring-color] duration-500 ease-out",
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "group/image hover:shadow-2xl dark:hover:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.55)] hover:ring-divider/80"
          )}
        >
          <div
            className={cn(
              "relative aspect-[4/3] md:aspect-square w-full",
              "bg-gradient-to-br from-content1 via-content2 to-background"
            )}
          >
            <NextImage
              src={item.image}
              alt=""
              fill
              className="object-contain p-7 sm:p-9 md:p-10 transition-transform duration-500 ease-out group-hover/image:scale-[1.035]"
              sizes="(max-width: 768px) 100vw, 44vw"
              priority={index < 2}
              quality={88}
            />
          </div>
          <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground opacity-0 translate-y-1 transition-all duration-300 group-hover/image:opacity-100 group-hover/image:translate-y-0 shadow-sm ring-1 ring-divider">
            {item.demo !== "#" ? "Open" : "Repo"}
            <ArrowUpRight size={12} strokeWidth={2.5} className="opacity-80" />
          </span>
        </Link>
      </div>
    </article>
  );
};

const Projects = () => {
  const title = (
    <div className="flex justify-center items-center gap-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-900">
        <Image
          src="S_logo.jpeg"
          alt="LOGO"
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-teal-700 dark:text-teal-500 text-[11px] font-semibold uppercase tracking-[0.28em] mb-1">
          Portfolio
        </span>
        <Typewriter text="Selected Works" delay={1000} cursor={false} />
      </div>
    </div>
  );

  return (
    <div className="relative bg-background py-20 md:py-28 border-t border-divider overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <Center>
        <div className="relative z-[1] w-full">
          <Title title={title} />
          <p className="text-center text-foreground/60 max-w-2xl mx-auto px-4 -mt-1 mb-14 md:mb-16 text-[15px] md:text-base leading-relaxed">
            Production-grade interfaces and client-facing products—ownership from
            architecture through delivery, with emphasis on performance,
            accessibility, and maintainable frontends.
          </p>

          <div className="w-full max-w-[1140px] mx-auto px-5 sm:px-8 lg:px-10">
            {projectsList.map((item, index) => (
              <ProjectRow key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Projects;
