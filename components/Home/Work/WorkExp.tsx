"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image } from "@nextui-org/react";
import { SiNextdotjs, SiReact } from "react-icons/si";
import Typewriter from "react-ts-typewriter";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const timelineStyles = useMemo(() => {
    const isDark = mounted && resolvedTheme === "dark";
    const bg = isDark ? "#18181b" : "#ffffff";
    const fg = isDark ? "#fafafa" : "#1e1e2c";
    const iconBg = isDark ? "#0f766e" : "#1e1e2c";
    return {
      contentStyle: { background: bg, color: fg } as CSSProperties,
      contentArrowStyle: { borderRight: `7px solid ${bg}` } as CSSProperties,
      iconStyle: { background: iconBg, color: "#fff" } as CSSProperties,
    };
  }, [mounted, resolvedTheme]);

  const title = (
    <div className="flex justify-center items-center">
      <Button
            isIconOnly
            size="lg"
            variant="light"
            className="w-20 h-20 flex gap-2"
          >
            <Image src="S_logo.jpeg" alt="LOGO" width={50} height={50} />
          </Button>
      <Typewriter text="PROFESSIONAL EXPERIENCE" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-slate-200 dark:bg-zinc-950 py-6">
      <Center>
        <Title title={title} />
          <VerticalTimeline
            lineColor={
              mounted && resolvedTheme === "dark" ? "#3f3f46" : "#d4d4d8"
            }
          >
            {/* Bank Albilad */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="Oct 2025 - Present"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Senior Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ Bank Albilad</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Developing mobile banking features using React Native and TypeScript.</li>
                <li>Building scalable, reusable component libraries aligned with the bank&apos;s design system.</li>
                <li>Collaborating with product, design, and backend teams to deliver secure features.</li>
              </ul>
            </VerticalTimelineElement>

            {/* CIB Egypt */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="Jan 2024 - Oct 2025"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Senior Frontend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ Commercial International Bank (CIB)</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Drove frontend development of React Native mobile banking apps using TypeScript.</li>
                <li>Built and optimized financial modules in a monorepo using Redux and RTK Query.</li>
                <li>Improved UI performance across complex banking workflows.</li>
              </ul>
            </VerticalTimelineElement>

            {/* EJADA */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="Aug 2023 - Mar 2024"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Senior Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ EJADA</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Developed secure mobile applications for Alrajhi Bank and Neoleap using React Native.</li>
                <li>Implemented best practices in mobile application security for financial data.</li>
                <li>Enhanced user experience in the banking fintech sector.</li>
              </ul>
            </VerticalTimelineElement>

            {/* OFFTO */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="Aug 2022 - Aug 2023"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiNextdotjs />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Frontend Engineer (React & React Native)</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ OFFTO, Kuwait</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Developed React Native mobile apps and React.js web dashboards.</li>
                <li>Built cross-platform shared components for consistent UX across devices.</li>
                <li>Implemented state management with Zustand and data fetching using React Query.</li>
              </ul>
            </VerticalTimelineElement>

            {/* SQM */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="Oct 2021 - Aug 2022"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Frontend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ SQM, Egypt</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Built a comprehensive real estate admin platform using React, React Native, and TS.</li>
                <li>Created shared UI components compatible with web and mobile.</li>
                <li>Focused on feature development, form validation, and performance.</li>
              </ul>
            </VerticalTimelineElement>

            {/* GoTag */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="2020 - Sep 2021"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Frontend Developer (React & React Native)</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ GoTag, Egypt</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Built smart school mobile apps to automate attendance, payments, and communication.</li>
                <li>Delivered seamless cross-platform solutions for educational automation.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Freelance */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={timelineStyles.contentStyle}
              contentArrowStyle={timelineStyles.contentArrowStyle}
              date="2019"
              iconStyle={timelineStyles.iconStyle}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">Freelance React Native Developer</h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">@ Startups</h4>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                <li>Built multiple cross-platform apps using React Native, Expo, and Firebase.</li>
                <li>Implemented core features like authentication, push notifications, and API integration.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
      </Center>
    </div>
  );
};

export default WorkExp;
