import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <motion.span
      className="text-5xl font-bold text-gray-900 dark:text-white relative z-10 font-poppins"
    >
      {children}
    </motion.span>
  );
};