import type { IconType } from "react-icons";

export type HeaderNavItemType = {
  title: string;
  link: string;
  classname?: string;
  icon: IconType;
  clicked: boolean;
};

export type HeroScrollerItemType = {
  title: string;
  subTitle: string;
  link?: string;
  imgPath: string;
  alt: string;
};

export type Feature2DataType = HeroScrollerItemType;

export type FeatureStripDataType = {
  title: string;
  amount: number;
  icon: IconType;
};

export type latestNewsType = {
  coverImage: string;
  title: string;
  description?: string;
  time?: string;
  shortTitle: string;
};

export type findusDatatype = {
  title: string;
  icon: IconType;
  description: string;
};
