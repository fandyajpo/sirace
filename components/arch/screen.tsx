import { memo } from "react";
import { ChildrenInterface } from "../../types/Children";
import { motion } from "framer-motion";

const Screen = memo(({ children }: ChildrenInterface) => {
  return (
    <div className="md:max-w-2xl lg:max-w-4xl duration-1000 xl:max-w-7xl w-screen h-fit flex flex-col items-stretch grow flex-shrink-0 gap-x-4 md:p-2 py-2">
      {children}
    </div>
  );
});

Screen.displayName = "Screen";
export default Screen;
