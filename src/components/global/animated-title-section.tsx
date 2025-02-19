import { motion } from "framer-motion";
import { BackTitle } from "./back-title";
import { Title } from "./title";
import { ReactNode } from "react";

interface AnimatedTitleSectionProps {
  backTitle: string;
  mainTitle: ReactNode;
  supportText: string;
}

export const AnimatedTitleSection = ({ backTitle, mainTitle, supportText }: AnimatedTitleSectionProps) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4 relative"
      >
        <Title>{mainTitle}</Title>
        {backTitle && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Delay to show backTitle after mainTitle
            className="absolute inset-0 flex items-center justify-center"
          >
            <BackTitle>{backTitle}</BackTitle>
          </motion.div>
        )}
      </motion.div>

      <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 mt-5"
      >
        {supportText}
      </motion.p>
    </>
  );
};