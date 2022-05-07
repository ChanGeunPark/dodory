import { useState } from "react";
import CustomCursorContext, { CursorLookType } from "./CustomCursorContext";

interface Props {
  children: React.ReactNode;
}

//React Context 개념 알기
export default function CustomCursorManager({
  children: cursorChildren,
}: Props) {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {cursorChildren}
    </CustomCursorContext.Provider>
  );
}
