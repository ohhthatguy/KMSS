import Image from "next/image";
import Link from "next/link";
import { latestNewsType } from "../Home/type";

const BlogSideBar = ({
  latestNewsData,
}: {
  latestNewsData: latestNewsType[];
}) => {
  return (
    <div className="hidden sm:block p-2 bg-surface">
      <h4 className="text-center mb-8">Latest Blogs</h4>

      <div className="grid gap-2">
        {latestNewsData.map((e: latestNewsType, index: number) => (
          <div
            key={index}
            className="flex p-2 rounded-xl gap-4 bg-light items-center justify-around"
          >
            <div className="relative w-22 h-18">
              <Image
                src={e.coverImage}
                alt={e.shortTitle}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-accent line-clamp-2">{e.title}</p>
              <Link href={`/blog/1`}>
                <label className="font-bold hover:cursor-pointer hover:underline">
                  Read more
                </label>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSideBar;
