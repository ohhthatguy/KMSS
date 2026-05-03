"use client";

import Image from "next/image";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Feature2Data } from "../data/feature2Data";

const Feature2Slider = () => {
  const [curr, setCurr] = useState<number>(0);
  console.log(curr);
  console.log(Feature2Data.length);

  const handleNextClick = () =>
    setCurr((prev) => (prev + 1) % Feature2Data.length);

  const handleBackClick = () =>
    setCurr((prev) => (prev === 0 ? Feature2Data.length - 1 : prev - 1));

  return (
    <section className="flex-2  w-full   flex flex-col justify-center items-center">
      <div className="flex  flex-col h-[calc(100vh-6rem)] w-full  order justify-between items-center gap-4">
        <div key={curr} className={`relative h-full w-full  `}>
          <Image
            src={Feature2Data[curr].imgPath}
            alt={Feature2Data[curr].imgPath}
            priority={curr === 0}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="">
          <label className="font-bold text-center">
            {Feature2Data[curr].title}
          </label>
        </div>

        <div className=" w-full flex gap-4 justify-center items-center">
          <MdNavigateBefore
            size={28}
            className="hover:cursor-pointer border rounded-md scale-100 hover:scale-115 hover:fill-blue-800 transition-all duration-500"
            onClick={() => handleBackClick()}
          />
          <MdNavigateNext
            size={28}
            className="hover:cursor-pointer border rounded-md scale-100 hover:scale-115 hover:fill-blue-600 transition-all duration-500"
            onClick={() => handleNextClick()}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature2Slider;
