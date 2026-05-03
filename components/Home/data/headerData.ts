import type { HeaderNavItemType } from "../type";

import { FaCartShopping } from "react-icons/fa6";
import { GiConvergenceTarget } from "react-icons/gi";
import { HiOutlineCollection } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";

export const HeaderNavItem: HeaderNavItemType[] = [
  {
    title: "Home",
    link: "/",
    classname: "",
    icon: FaCartShopping,
    clicked: true,
  },

  {
    title: "Admission",
    link: "/admission",
    classname: "",
    icon: HiOutlineCollection,
    clicked: false,
  },

  {
    title: "Testimonials",
    link: "/",
    classname: "",
    icon: IoMdContact,
    clicked: false,
  },

  {
    title: "Gallery",
    link: "/",
    classname: "",
    icon: IoMdContact,
    clicked: false,
  },

  {
    title: "Blog",
    link: "/",
    classname: "",
    icon: GiConvergenceTarget,
    clicked: false,
  },

  {
    title: "Contact",
    link: "/",
    classname: "",
    icon: IoMdContact,
    clicked: false,
  },

  {
    title: "About",
    link: "/",
    classname: "",
    icon: IoMdContact,
    clicked: false,
  },
];
