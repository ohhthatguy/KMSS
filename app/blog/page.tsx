import BlogList from "@/components/blog/BlogList";
import BlogSideBar from "@/components/blog/BlogSideBar";

import { latestNewsData } from "@/components/Home/data/latestNewsData";

//in real do db query here and then send  data to boht component

const page = () => {
  return (
    <section className="p-6 md:px-14 sm:py-10 flex flex-col gap-8">
      <div className="grid gap-2 ">
        <div className="">
          <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
            <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
            <div>
              Latest in <span className="text-blue-500">KMSS</span>
            </div>
          </label>
        </div>

        <h2 className="leading-tight">News & Events in KMSS</h2>
        <p className="text-muted-text">
          Find out all the exciting things happening in KMSS
        </p>
      </div>

      <div className="grid  sm:grid-cols-[2fr_1fr] gap-2 md:gap-8 items-start ">
        <BlogList latestNewsData={latestNewsData} />
        <BlogSideBar latestNewsData={latestNewsData} />
      </div>
    </section>
  );
};

export default page;
