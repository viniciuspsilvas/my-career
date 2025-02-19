import { motion } from "framer-motion";
import { ReactNode } from "react";

export const BackTitle = ({ children }: { children: ReactNode }) => {
  return (
    <motion.span
      className="absolute text-8xl font-[1000] opacity-10 md:opacity-50 dark:opacity-30 text-gray-200 dark:text-gray-700 w-full text-center font-poppins tracking-[25px]
"
      style={{ zIndex: 0, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      {children}
    </motion.span>
  );
};