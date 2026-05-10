import BlogListAnimationProvider from "@/provider/animation/BlogListAnimationProvider";
import Image from "next/image";
import Link from "next/link";
import { latestNewsType } from "../Home/type";

const BlogList = ({ latestNewsData }: { latestNewsData: latestNewsType[] }) => {
  return (
    <BlogListAnimationProvider>
      {" "}
      {latestNewsData.map((e: latestNewsType, index: number) => {
        return (
          <div
            key={index}
            className={` hover:cursor-pointer border rounded-2xl p-2 border-t-0 border-border bg-light hover:scale-[1.02] `}
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

              <Link
                href={`/blog/1`}
                className="text-sm mt-4 font-medium hover:underline self-start"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </BlogListAnimationProvider>
  );
};

export default BlogList;
