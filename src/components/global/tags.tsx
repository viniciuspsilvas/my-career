import { motion } from "framer-motion";

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-8 flex flex-wrap gap-2"
    >
      {tags.map((tag, index) => (
        <span
          key={index}
          className="border border-primary-500 text-primary-500 px-3 py-1 rounded-full text-xs"
        >
          {tag}
        </span>
      ))}
    </motion.div>
  );
}
