import { createContext } from "react";

export type CursorLookType =
  | "default"
  | "menu"
  | "slider-drag"
  | "link"
  | "items"; //type 지정해주기 defalt, munu올렸을때, slider 드레그 할때

export interface CustomCursorType {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
}

const CustomCursorContext = createContext<CustomCursorType>({
  type: "default",
  setType: () => {},
});

export default CustomCursorContext;
