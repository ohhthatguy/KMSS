import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import type { findusDatatype } from "../type";

export const findUsData: findusDatatype[] = [
  {
    title: "Address",
    description: "Tikapur, Kailali, Nepal",
    icon: TiLocation,
  },

  {
    title: "Phone",
    description: "091-560456/9858486536",
    icon: FaPhone,
  },

  {
    title: "Office Hours",
    description: "Monday – Friday: 8:00 AM – 5:00 PM ",
    icon: MdAccessTime,
  },

  {
    title: "Mail",
    description: "kmsstkp2044@gmail.com",
    icon: CiMail,
  },
];
