import { headers } from "next/headers";
import Link from "next/link";
import { AboutSidebarData } from "./data/AboutSidebarData";
import type { AboutSidebarDataType } from "./type";

const AboutSideBar = async () => {
  const headerList = await headers();
  const pathname = headerList.get("referer");
  const url = pathname ? new URL(pathname).pathname : "No path found";
  console.log(url);

  return (
    <section className=" grid gap-8">
      <h4 className="text-center bg-dark font-semibold italic p-2">Links</h4>

      {AboutSidebarData.map((e: AboutSidebarDataType, index: number) => {
        // const Icon = e.icon;
        return (
          <Link
            href={e.link}
            className="border-b p-4 border-border group flex   items-center gap-4"
            key={index}
          >
            <p className="transition-transform duration-500 group-hover:translate-x-1">
              {index + 1}.
            </p>
            <div className="transition-colors duration-500 font-normal group-hover:font-bold">
              {e.title}
            </div>
            {/* <p>{index + 1}.</p>
            <div className="transition-all group-hover:font-bold">
              {e.title}
            </div> */}
          </Link>
        );
      })}
    </section>
  );
};

export default AboutSideBar;
