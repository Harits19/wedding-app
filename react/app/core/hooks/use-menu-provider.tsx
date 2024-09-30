import { createContext, useContext } from "react";

export const MenuContext = createContext<{
  menu?: string;
}>({});

export const useMenuState = () => {
  return useContext(MenuContext);
};
