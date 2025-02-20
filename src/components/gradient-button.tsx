"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export const GradientButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about");
  };

  return (
    <div className="flex justify-center md:justify-start">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="mt-10 pl-4 relative overflow-hidden text-primary-500 rounded-full flex items-center justify-center space-x-2 shadow-md border-2 border-primary-500 hover:text-white"
        animate={{
          backgroundColor: ["#003637", "#026466", "#003637"],
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 1.5 },
        }}
      >
        <span className="relative z-10 text-sm sm:text-base">
          MORE ABOUT ME
        </span>
        <div className="relative z-10 bg-primary-500 rounded-full py-4 px-4 w-12 h-12">
          <FaArrowRight className="text-white" />
        </div>
      </motion.button>
    </div>
  );
};

export default GradientButton;
