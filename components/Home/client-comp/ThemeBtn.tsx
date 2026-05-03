"use client";

import { toggleTheme, useTheme } from "@/store/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeBtn = () => {
  const theme = useTheme((state) => state.theme);
  console.log(theme);

  return (
    <div className="" onClick={toggleTheme}>
      {theme === "dark" ? (
        <MdDarkMode
          className="hover:cursor-pointer scale-100 hover:scale-110 transition-transform duration-300"
          size={28}
        />
      ) : (
        <MdLightMode
          size={28}
          className="hover:cursor-pointer scale-100 hover:scale-110 transition-transform duration-300"
        />
      )}
    </div>
  );
};

export default ThemeBtn;
