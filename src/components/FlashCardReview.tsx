"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashCard from "./FlashCard";
import { useNextFlashcard, useSaveProgress } from "@/src/hooks/useFlashcards";
import { IFlashCard } from "@/src/models/FlashCard";
import Loading from "./global/loading";

interface FlashCardReviewProps {
  flashcard: IFlashCard;
  userId: string;
}

export default function FlashCardReview({
  flashcard,
  userId
}: FlashCardReviewProps) {
  const [flipped, setFlipped] = useState(false);
  const { refetch, isPending: isNextFlashcardPending } =
    useNextFlashcard(userId);
  const { mutate, isPending: isSaveProgressPending } = useSaveProgress();

  const handleReview = (choice: string) => {
    mutate(
      { userId, flashCardId: flashcard._id, choice },
      {
        onSuccess: () => {
          refetch(); // Fetch the next card
          setFlipped(false); // Reset the flipped state
        }
      }
    );
  };

  const isPending = isNextFlashcardPending || isSaveProgressPending;

  return (
    <div className="flex flex-col items-center relative">
      {/* Show the Loading component when a request is pending */}
      {isPending && <Loading />}

      {/* Disable interactions when a request is pending */}
      <div className={`${isPending ? "pointer-events-none opacity-50" : ""}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={flashcard._id as string}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center"
          >
            <FlashCard
              flashCard={flashcard}
              flipped={flipped}
              onFlip={() => setFlipped(!flipped)}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex mt-4 gap-4 items-center justify-center">
          <button
            onClick={() => handleReview("again")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            aria-label="Again"
            disabled={isPending}
          >
            Again
          </button>
          <button
            onClick={() => handleReview("hard")}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            aria-label="Hard"
            disabled={isPending}
          >
            Hard
          </button>
          <button
            onClick={() => handleReview("good")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            aria-label="Good"
            disabled={isPending}
          >
            Good
          </button>
          <button
            onClick={() => handleReview("easy")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            aria-label="Easy"
            disabled={isPending}
          >
            Easy
          </button>
        </div>
      </div>
    </div>
  );
}