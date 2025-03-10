// /app/api/flashcard/next-card/route.ts
import { connectDB } from "@/src/lib/mongodb";
import { UserProgress } from "@/src/models/UserProgress";
import { FlashCard } from "@/src/models/FlashCard"; // Assuming you have a FlashCard model
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    // Extract userId from query string
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Find the next card for review
    const nextCardProgress = await UserProgress.findOne({
      userId,
      nextReviewDate: { $lte: new Date() }, // Cards with a review date in the past or today
    })
      .sort({ nextReviewDate: 1 }) // Sort by the oldest review date
      .populate("flashCardId"); // Populate the flashcard data

    // If there's a card to review, return it
    if (nextCardProgress) {
      return NextResponse.json(nextCardProgress.flashCardId);
    }

    // If no cards to review, fetch a random flashcard
    const randomFlashcard = await FlashCard.aggregate([
      { $sample: { size: 1 } }, // Get one random flashcard
    ]);

    if (!randomFlashcard || randomFlashcard.length === 0) {
      return NextResponse.json(
        { message: "No flashcards available" },
        { status: 404 }
      );
    }

    return NextResponse.json(randomFlashcard[0]);
  } catch (error) {
    console.error("Error fetching next card:", error);
    return NextResponse.json(
      { error: "Failed to fetch next card" },
      { status: 500 }
    );
  }
}