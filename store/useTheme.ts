import { create } from "zustand";
import { persist } from "zustand/middleware";

export type themeType = {
  theme: "dark" | "light" | "system";
};

// export const useTheme = create<themeType>((set) => {
//   return {
//     theme: "system",
//   };
// });

export const useTheme = create<themeType>()(
  persist(
    (set) => ({
      theme: "system",
    }),
    { name: "theme-storage" },
  ),
);

export const toggleTheme = () => {
  useTheme.setState((state) => ({
    theme: state.theme === "light" ? "dark" : "light",
  }));
};
