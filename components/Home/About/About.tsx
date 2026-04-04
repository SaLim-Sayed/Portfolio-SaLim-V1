"use client";

import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "react-ts-typewriter";
import { useTheme } from "next-themes";
import { cn } from "@/libs/cn";
import { reloadLinkedInBadgeScript } from "@/libs/linkedinBadge";

const LOAD_CHECK_MS = 400;
const FAIL_AFTER_MS = 9000;

function useLinkedInBadgeVisible(themeKey: string) {
  const [visible, setVisible] = useState(true);
  const loadedRef = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const moRef = useRef<MutationObserver | null>(null);
  const intervalRef = useRef(0);
  const failTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    loadedRef.current = false;
    setVisible(true);

    let cancelled = false;

    const clearWatchers = () => {
      moRef.current?.disconnect();
      moRef.current = null;
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = 0;
      }
      if (failTimerRef.current) {
        window.clearTimeout(failTimerRef.current);
        failTimerRef.current = undefined;
      }
    };

    const startTimer = window.setTimeout(() => {
      if (cancelled) return;

      reloadLinkedInBadgeScript();

      const root = wrapRef.current;
      if (!root) {
        setVisible(false);
        return;
      }

      const badge = root.querySelector(".LI-profile-badge");
      if (!badge) {
        setVisible(false);
        return;
      }

      const stop = () => {
        clearWatchers();
      };

      const evaluate = () => {
        if (loadedRef.current) return;
        const el = badge as HTMLElement;
        const iframe = el.querySelector("iframe");
        const rect = el.getBoundingClientRect();
        const hasFrame = Boolean(iframe && iframe.offsetHeight > 24);
        const hasLayout = rect.height >= 96 || el.scrollHeight >= 96;
        if (hasFrame || hasLayout) {
          loadedRef.current = true;
          setVisible(true);
          stop();
        }
      };

      moRef.current = new MutationObserver(evaluate);
      moRef.current.observe(badge, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      intervalRef.current = window.setInterval(evaluate, LOAD_CHECK_MS);
      failTimerRef.current = window.setTimeout(() => {
        if (!loadedRef.current) {
          setVisible(false);
          stop();
        }
      }, FAIL_AFTER_MS);

      evaluate();
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      clearWatchers();
    };
  }, [themeKey]);

  return { wrapRef, visible };
}

const About = () => {
  const { resolvedTheme } = useTheme();
  const badgeTheme = resolvedTheme === "dark" ? "dark" : "light";
  const { wrapRef, visible: linkedInVisible } =
    useLinkedInBadgeVisible(badgeTheme);

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
      <Typewriter text="About Me" delay={1000} cursor={false} />
    </div>
  );

  return (
    <div className="bg-background py-16">
      <Center>
        <Title title={title} />

        <div
          className={cn(
            "w-full md:w-[90%] mx-auto grid items-center gap-12 py-8",
            linkedInVisible
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 max-w-3xl mx-auto"
          )}
        >
          {linkedInVisible && (
            <div
              ref={wrapRef}
              className="flex justify-center md:justify-end min-w-0"
            >
              <div
                key={badgeTheme}
                className="p-2   rounded-3xl shadow-2xl   overflow-hidden max-w-[350px] w-full"
              >
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="ar_AE"
                  data-size="large"
                  data-theme={badgeTheme}
                  data-type="HORIZONTAL"
                  data-vanity="salim-elsayed981"
                  data-version="v1"
                >
                  <Link
                    className="badge-base__link LI-simple-link"
                    href="https://www.linkedin.com/in/salim-elsayed981?trk=profile-badge"
                  >
                    <span className="sr-only">LinkedIn profile</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center p-6 sm:p-1">
            <p className="leading-inherit text-justify text-lg text-foreground/80 font-medium">
              Senior Frontend & Mobile Engineer with 5+ years of experience
              designing and developing scalable web and cross-platform mobile
              applications using React.js, React Native, Next.js, TypeScript, and
              modern JavaScript frameworks. Proven experience delivering
              high-performance digital products across fintech, banking,
              e-commerce, and SaaS solutions. Strong expertise in state management
              (Redux, RTK Query), RESTful API integration, performance
              optimization, and building responsive, accessible user interfaces.
              Adept at collaborating with cross-functional teams in agile
              environments to deliver secure, reliable, and production-ready
              applications at scale.
            </p>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default About;
