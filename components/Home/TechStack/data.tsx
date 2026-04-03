import type { TechIconProps } from "./TechIcon";

export type SkillDef = {
  id: number;
  name: string;
  localSrc: TechIconProps["localSrc"];
  cdnSlug: TechIconProps["cdnSlug"];
  cdnSlugFallback?: TechIconProps["cdnSlugFallback"];
};

/**
 * Local `/public/tech` files load first; `TechIcon` falls back to Simple Icons
 * on jsDelivr (`simple-icons@11.15.0`), then optional alt slug, then JS.
 */
export const skillsAll: SkillDef[] = [
  { id: 1, name: "HTML", localSrc: "/tech/html.svg", cdnSlug: "html5" },
  {
    id: 2,
    name: "CSS / SCSS",
    localSrc: "/tech/css.svg",
    cdnSlug: "css3",
    cdnSlugFallback: "sass",
  },
  { id: 3, name: "Bootstrap", localSrc: "/tech/bootstrap.png", cdnSlug: "bootstrap" },
  { id: 4, name: "Tailwind", localSrc: "/tech/tailwind.svg", cdnSlug: "tailwindcss" },
  { id: 5, name: "JavaScript", localSrc: "/tech/js.svg", cdnSlug: "javascript" },
  { id: 6, name: "TypeScript", localSrc: "/tech/ts.svg", cdnSlug: "typescript" },
  { id: 7, name: "React JS", localSrc: "/tech/react.svg", cdnSlug: "react" },
  { id: 8, name: "React Native", localSrc: "/tech/react.svg", cdnSlug: "reactnative" },
  { id: 9, name: "Next.js", localSrc: "/tech/next.svg", cdnSlug: "nextdotjs" },
  { id: 10, name: "React MUI", localSrc: "/tech/mui.png", cdnSlug: "mui" },
  {
    id: 11,
    name: "Next UI",
    localSrc: "/tech/next.png",
    cdnSlug: "nextui",
    cdnSlugFallback: "nextdotjs",
  },
  { id: 12, name: "Chakra UI", localSrc: "/tech/chakra.png", cdnSlug: "chakraui" },
  { id: 13, name: "Framer Motion", localSrc: "/tech/framer.png", cdnSlug: "framer" },
  { id: 14, name: "Redux", localSrc: "/tech/redux.png", cdnSlug: "redux" },
  { id: 15, name: "Zustand", localSrc: "/tech/zustand.png", cdnSlug: "zustand" },
  { id: 16, name: "React Query", localSrc: "/tech/query.png", cdnSlug: "reactquery" },
  { id: 17, name: "React Hook Form", localSrc: "/tech/rhf.png", cdnSlug: "reacthookform" },
  { id: 18, name: "Zod", localSrc: "/tech/zod.png", cdnSlug: "zod" },
  { id: 19, name: "Figma", localSrc: "/tech/figma.svg", cdnSlug: "figma" },
  { id: 20, name: "RTK Query", localSrc: "/tech/redux.png", cdnSlug: "redux" },
  {
    id: 21,
    name: "Shadcn UI",
    localSrc: "/tech/tailwind.svg",
    cdnSlug: "tailwindcss",
    cdnSlugFallback: "react",
  },
  { id: 22, name: "Headless UI", localSrc: "/tech/headless.png", cdnSlug: "headlessui" },
  { id: 23, name: "Axios", localSrc: "/tech/node.png", cdnSlug: "axios" },
  { id: 24, name: "GraphQL", localSrc: "/tech/js.svg", cdnSlug: "graphql" },
  { id: 25, name: "Jest", localSrc: "/tech/jest.png", cdnSlug: "jest" },
  { id: 26, name: "Android Studio", localSrc: "/tech/android.png", cdnSlug: "androidstudio" },
  { id: 27, name: "Xcode", localSrc: "/tech/xcode.png", cdnSlug: "xcode" },
  { id: 28, name: "Git / GitHub", localSrc: "/tech/github.svg", cdnSlug: "github" },
  { id: 29, name: "Node.js", localSrc: "/tech/node.png", cdnSlug: "nodedotjs" },
  { id: 30, name: "Express.js", localSrc: "/tech/express.png", cdnSlug: "express" },
  { id: 31, name: "MongoDB", localSrc: "/tech/mongo.png", cdnSlug: "mongodb" },
  {
    id: 32,
    name: "SQL",
    localSrc: "/tech/sql.png",
    cdnSlug: "mysql",
    cdnSlugFallback: "postgresql",
  },
  { id: 33, name: "Firebase", localSrc: "/tech/firebase.png", cdnSlug: "firebase" },
  {
    id: 34,
    name: "EmailJS",
    localSrc: "/tech/emailjs.png",
    cdnSlug: "mailgun",
    cdnSlugFallback: "gmail",
  },
  { id: 35, name: "Sass", localSrc: "/tech/sass.svg", cdnSlug: "sass" },
];
