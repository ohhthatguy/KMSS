"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
const NumberCountingAnimation = ({ number }: { number: number }) => {
  gsap.registerPlugin(ScrollTrigger);
  const numberRef = useRef<HTMLLabelElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        numberRef.current,
        { innerText: 0, y: 20, opacity: 0 },
        {
          innerText: number,
          duration: 2,
          y: 0,
          opacity: 1,
          snap: { innerText: 1 },
          stagger: 0.3,
          scrollTrigger: {
            trigger: numberRef.current,
            start: "top 100%",

            once: true,
          },
          onUpdate: function () {
            if (numberRef.current) {
              numberRef.current.innerHTML =
                Math.round(Number(this.targets()[0].innerText)) + " +";
            }
          },
        },
      );

      // gsap.from(numberRef.current, {
      //   innerText: 0,
      //   duration: 3,
      //   scale: 1.02,
      //   snap: { innerText: 1 },
      //   stagger: 0.3,
      //   scrollTrigger: {
      //     trigger: numberRef.current,
      //     start: "top 90%",
      //     //   once: true,
      //   },
      // });
    },
    { scope: numberRef },
  );

  return (
    <label
      ref={numberRef}
      className="font-bold   w-full inline-block text-right"
    >
      {number} +
    </label>
  );
};

export default NumberCountingAnimation;
