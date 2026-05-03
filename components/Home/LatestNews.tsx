import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { latestNewsData } from "./data/latestNewsData";
import type { latestNewsType } from "./type";

const LatestNews = () => {
  return (
    <section className=" p-6 sm:pt-14 flex flex-col  justify-center items-center gap-8 ">
      <div className="flex flex-col sm:flex-row justify-between w-full items-end">
        <div className="grid w-full gap-2">
          <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
            <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
            <div>
              Whats happening in <span className="text-blue-500">KMSS</span>
            </div>
          </label>

          <h2 className="leading-tight">Latest News & Events</h2>
        </div>

        <div className=" w-full">
          <div className=" flex gap-4 sm:justify-end   items-center  hover:cursor-pointer hover:text-hover-text transition-colors duration-500 text-muted-text ">
            Read All
            <MdArrowRightAlt size={30} className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  gap-6  w-full ">
        {latestNewsData.map((e: latestNewsType, index: number) => (
          <div
            key={index}
            className="flex-none w-full sm:flex-1 hover:cursor-pointer sm:min-w-75  border rounded-2xl p-2 border-t-0 border-border bg-light transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full">
              <Image
                src={e.coverImage}
                alt={e.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="p-4 flex flex-col gap-3">
              <label className="text-2xl font-semibold line-clamp-1 leading-tight">
                {e.shortTitle}
              </label>

              <p className="text-2xl font-semibold line-clamp-1 leading-tight">
                {e.title}
              </p>

              <button className="text-sm mt-4 font-medium hover:underline self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>page 1 of 1</div>
    </section>
  );
};

export default LatestNews;
