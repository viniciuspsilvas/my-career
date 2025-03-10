"use client";

import { motion } from "framer-motion";
import { IFlashCard } from "../models/FlashCard";

interface FlashCardProps {
  flashCard: IFlashCard;
  flipped: boolean;
  onFlip: () => void;
}

export default function FlashCard({ flashCard: { question, tip, answer }, flipped, onFlip }: FlashCardProps) {
  return (
    <motion.div
      className="w-96 h-60 bg-white dark:bg-gray-700 shadow-xl rounded-2xl p-6 flex justify-center items-center text-center cursor-pointer"
      onClick={onFlip}
      aria-label={flipped ? "Answer" : "Question"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onFlip()}
      initial={false}
      animate={{ rotateY: flipped ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {!flipped ? (
        <div>
          <p className="text-xl font-semibold">{question}</p>
          {tip && <p className="mt-2 text-gray-500 italic">💡 {tip}</p>}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg font-semibold">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}