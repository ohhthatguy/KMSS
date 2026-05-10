import { IconType } from "react-icons";

export type objectiveDataType = {
  icon: IconType;
  title: string;
  description: string;
};

export type AboutSidebarDataType = {
  title: string;
  link: string;
  icon: IconType;
};

export type managementDataType = {
  name: string;
  position: string;
  imgLink: string;
};

export type scholarShipDataType = {
  title: string;
  description: string;
  amount: string;
  time: string;
  eligibility: string;
};
