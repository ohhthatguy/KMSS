"use client";

import { CiCircleChevUp } from "react-icons/ci";

const NaviagteToTopBtn = () => {
  const handleNaviagtionToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <CiCircleChevUp
      onClick={() => handleNaviagtionToTop()}
      className=" rounded-md p-1 hover:cursor-pointer transition-colors duration-500 hover:fill-primary"
      size={56}
    />
  );
};

export default NaviagteToTopBtn;
