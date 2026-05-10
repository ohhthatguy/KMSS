"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const BasicAnimationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!parentRef.current) return;
    const boxes = gsap.utils.toArray<HTMLElement>(parentRef.current?.children);

    boxes.forEach((e) => {
      gsap.fromTo(
        e,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: e,
            start: "top 100%",
            end: "top 20%",
            scrub: true,
            // once: true,
          },
          ease: "power2.inOut",
        },
      );
    });
  });

  return <div ref={parentRef}>{children}</div>;
};

export default BasicAnimationProvider;
