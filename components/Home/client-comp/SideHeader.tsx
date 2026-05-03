"use client";
import Link from "next/link";
import { useState } from "react";

import type { HeaderNavItemType } from "../type";

import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

import { HeaderNavItem } from "../data/headerData";

const SideHeader = () => {
  const [isOpenSideHeader, setIsOpenSideHeader] = useState<boolean>(false);

  return (
    <nav className={`block sm:hidden  relative w-2/5`}>
      <div className="flex justify-end">
        {!isOpenSideHeader ? (
          <IoMdMenu size={32} onClick={() => setIsOpenSideHeader(true)} />
        ) : (
          <RxCross1 size={32} onClick={() => setIsOpenSideHeader(false)} />
        )}
      </div>

      <ul
        className={`${isOpenSideHeader ? "block" : "hidden"} bg-neutral-imp2 mt-7 h-[calc(100vh-5.5rem)] flex flex-col list-none   gap-8  w-full absolute`}
      >
        {HeaderNavItem.map((e: HeaderNavItemType, index: number) => {
          const Icon = e.icon;
          return (
            <li
              key={index}
              className={` p-2 ${e.clicked && "bg-neutral-imp1"}`}
            >
              <Link className="link flex items-center gap-2" href={e.link}>
                <Icon />
                {e.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideHeader;
