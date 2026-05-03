import { FaTrophy } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdGroups3 } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import type { FeatureStripDataType } from "../type";
export const FeatureStripData: FeatureStripDataType[] = [
  {
    title: " Students",
    amount: 1400,
    icon: PiStudent,
  },
  {
    title: " Staffs",
    amount: 60,
    icon: MdGroups3,
  },
  {
    title: " Scholarships",
    amount: 140,
    icon: GiReceiveMoney,
  },
  {
    title: " Awards Won",
    amount: 25,
    icon: FaTrophy,
  },
];
