import Image from "next/image";
import Link from "next/link";
import ThemeBtn from "./client-comp/ThemeBtn";
import type { HeaderNavItemType } from "./type";

import SideHeader from "./client-comp/SideHeader";
import { HeaderNavItem } from "./data/headerData";

const Header = () => {
  return (
    <header className=" sticky top-0 z-20 flex justify-between sm:justify-around items-center bg-neutral-imp2 py-2 bg-surface  shadow-sm rounded-b-md">
      <Link href="/" className="relative h-18 w-24  ">
        <Image
          src="/Header/KMSS-logo-1.png"
          alt="Adora_Logo"
          className="object-contain"
          fill
          priority
        />
      </Link>

      <nav className="hidden sm:block" aria-label="Main Navigation">
        <ul className="flex  list-none   gap-8">
          {HeaderNavItem.map((e: HeaderNavItemType, index: number) => {
            return (
              <li key={index}>
                <Link className="link" href={e.link}>
                  {e.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden sm:block">
        {/* <Link href="/login" className=" primary_btn">
          <BiLogIn />
          Login
        </Link> */}

        <ThemeBtn />
      </div>

      <SideHeader />
    </header>
  );
};

export default Header;
