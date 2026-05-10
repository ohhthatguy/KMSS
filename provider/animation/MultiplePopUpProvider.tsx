"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const MultiplePopUpProvider = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const boxes = gsap.utils.toArray<HTMLElement>(
        containerRef.current?.children,
      );

      const mm = gsap.matchMedia();

      //In large screen, no need to loop. Since all the child has the same trigger point, the gsap will give them enough time to animate one by one

      mm.add("(min-width: 1000px)", () => {
        gsap.fromTo(
          boxes,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,

            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current, // Trigger when the wrapper hits the viewport
              start: "top 85%",
              // Play when scrolling down, reverse when scrolling up past the start
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // In small screen, since cards stack on top of each other, the child should have diffrernt trigger points, as they dont start on the same line as they on big screen, so we do loop and trigger them on basis of their own card, when they are seen

      mm.add("(max-width: 999px)", () => {
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
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="flex flex-wrap  gap-6  w-full " ref={containerRef}>
      {children}
    </div>
  );
};

export default MultiplePopUpProvider;
