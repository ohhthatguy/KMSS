import BlogSideBar from "@/components/blog/BlogSideBar";
import { latestNewsData } from "@/components/Home/data/latestNewsData";
import type { latestNewsType } from "@/components/Home/type";
import Image from "next/image";
import { BsClock } from "react-icons/bs";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  console.log(id);

  //after datasearch on the base of id, we get a single data.
  const selectedNews: latestNewsType = latestNewsData[0];

  return (
    <section className="p-6 md:px-14 sm:py-10 flex flex-col gap-8 ">
      <div className="grid gap-2 ">
        <div className="">
          <label className="border border-border flex items-center gap-2 rounded-md px-1 py-1 w-fit">
            <BsClock className="fill-blue-500" />
            <div>
              <span>{selectedNews.time ?? "a week ago"}</span>
            </div>
          </label>
        </div>

        <h3 className="leading-tight">{selectedNews.title}</h3>
      </div>

      <div className="grid  sm:grid-cols-[2fr_1fr] gap-2 md:gap-8 items-start">
        <div className="grid gap-8">
          <div className="relative h-[calc(60vh)]">
            <Image
              src={selectedNews.coverImage}
              alt={selectedNews.shortTitle}
              fill
              priority
              className="object-cover  rounded-2xl"
            />
          </div>

          <div className="grid gap-4">
            <label>{selectedNews.shortTitle}</label>
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 leading-relaxed">
              {selectedNews.description ?? "Data Not Found!"}
            </p>
          </div>
        </div>

        <BlogSideBar latestNewsData={latestNewsData} />
      </div>
    </section>
  );
};

export default page;
