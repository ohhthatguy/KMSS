"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { HeroScrollerItems } from "../data/heroData";

// in the carousel, the main function is
//1. it should auto slide and change in every 4 sec
//2. on click to back,next or the dots below, it should change accordingly, but the autoslide's timing should reset from 0 to avoid race condition
//
//for this, I used ref of type timeout. Ref cause it keeps the value between renders without trigering one.
//if there's already a timeout happeing, it is stopped and a fresh one is started from 0

const HeroCarosel = () => {
  const [curr, setCurr] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goBack = () => {
    startTimer();

    setCurr((prev) => (prev === 0 ? HeroScrollerItems.length - 1 : prev - 1));
  };

  const goNext = () => {
    startTimer();
    setCurr((prev) => (prev + 1 === HeroScrollerItems.length ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    startTimer();
    setCurr(index);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goNext(), 7000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className=" px-4 py-4">
      <div className=" h-[calc(100vh-8rem)] rounded-2xl relative w-full  overflow-hidden">
        <div key={`prev-${curr}`} className="absolute  w-full h-full shrink-0 ">
          <Image
            src={HeroScrollerItems[curr].imgPath}
            alt={HeroScrollerItems[curr].alt}
            fill
            className="object-cover "
          />
        </div>

        <div
          key={`next-${curr}`}
          className="absolute  w-full h-full shrink-0 z-10"
        >
          <Image
            src={
              HeroScrollerItems[(curr + 1) % HeroScrollerItems.length].imgPath
            }
            alt={HeroScrollerItems[(curr + 1) % HeroScrollerItems.length].alt}
            fill
            priority
            className="object-cover opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]"
          />
        </div>

        {/* gradient */}
        <div className="absolute z-10 opacity-40 inset-0 bg-gradient-hero-crousel "></div>

        <section
          key={`title-${curr}`}
          className="absolute flex px-8 flex-col gap-4 inset-0 items-center animate-[slideUp_0.8s_ease-out_forwards] justify-center z-10"
        >
          <div className="text-h3 text-white text-center leading-6 font-bold ">
            {HeroScrollerItems[(curr + 1) % HeroScrollerItems.length].title}
          </div>

          <div className="text-p text-white text-center ">
            {HeroScrollerItems[(curr + 1) % HeroScrollerItems.length].subTitle}
          </div>
        </section>

        {/* dots */}
        <div className="absolute w-full z-10 gap-4 bottom-4 flex justify-center items-center">
          <MdNavigateBefore
            size={28}
            className="hover:cursor-pointer border border-white fill-white rounded-md scale-100 hover:scale-115 hover:fill-blue-800 transition-all duration-500"
            onClick={() => goBack()}
          />
          {HeroScrollerItems.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 hover:cursor-pointer rounded-full ${curr === index ? "bg-white" : "bg-gray-800"}`}
            ></div>
          ))}
          <MdNavigateNext
            size={28}
            className="hover:cursor-pointer border border-white fill-white rounded-md scale-100 hover:scale-115 hover:fill-blue-600 transition-all duration-500"
            onClick={() => goNext()}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCarosel;
