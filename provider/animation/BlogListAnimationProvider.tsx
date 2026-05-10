"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import type { animationOptionDataType } from "./type";

const BlogListAnimationProvider = ({
  children,
  animationOptionData = "blogList",
}: {
  children: React.ReactNode;
  animationOptionData: animationOptionDataType;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const boxes = gsap.utils.toArray<HTMLElement>(
        containerRef.current?.children,
      );

      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box, // Trigger is the CARD, not the container
              start: "top 90%", // Animates when the CARD top hits 90% of screen
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className={
        animationOptionData === "admissionTable"
          ? "flex flex-col sm:flex-row gap-4"
          : animationOptionData === "findUs"
            ? "grid  grid-cols-2 grid-rows-2 gap-4 "
            : "grid grid-cols-1 xs:grid-cols-2 gap-4"
      }
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default BlogListAnimationProvider;
