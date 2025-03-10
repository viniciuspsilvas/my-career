"use client";

import FlashCardReview from "@/src/components/FlashCardReview";
import ErrorMessage from "@/src/components/global/error-message";
import Loading from "@/src/components/global/loading";
import { useNextFlashcard } from "@/src/hooks/useFlashcards";

export default function FlashcardsPage() {
  const userId = "user123"; // Substitua por um ID de usuário dinâmico
  const { data: nextFlashcard, isLoading, error } = useNextFlashcard(userId);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Error loading flashcards." />;
  }

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Flashcards</h1>
      {nextFlashcard ? (
        <FlashCardReview flashcard={nextFlashcard} userId={userId} />
      ) : (
        <p>No cards to review.</p>
      )}
    </div>
  );
}