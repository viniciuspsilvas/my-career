// /app/api/flashcard/save-progress/route.ts
import { connectDB } from "@/src/lib/mongodb";
import { IUserProgress, UserProgress } from "@/src/models/UserProgress";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDB();

    // Extrai os dados do corpo da requisição
    const { userId, flashCardId, choice } = await request.json();

    if (!userId || !flashCardId || !choice) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Encontra ou cria o progresso do usuário
    let userProgress = await UserProgress.findOne({ userId, flashCardId });

    if (!userProgress) {
      // Se não houver progresso, cria um novo
      userProgress = new UserProgress({
        userId,
        flashCardId,
        nextReviewDate: new Date(),
        interval: 1,
        repetition: 0,
        easeFactor: 2.5,
        lastChoice: choice,
      });
    } else {
      // Atualiza o progresso com base na escolha
      userProgress.lastChoice = choice;
      userProgress = updateReviewSchedule(userProgress, choice);
    }

    // Salva o progresso no banco de dados
    await userProgress.save();

    return NextResponse.json({
      message: "Progress saved successfully",
      userProgress,
    });
  } catch (error) {
    console.error("Error saving progress:", error);
    return NextResponse.json(
      { error: "Failed to save progress" },
      { status: 500 }
    );
  }
}

// Função para atualizar o cronograma de revisão com base na escolha
function updateReviewSchedule(userProgress: IUserProgress, choice: string) {
  let performanceRating: number;

  switch (choice) {
    case "again":
      performanceRating = 0;
      break;
    case "hard":
      performanceRating = 1;
      break;
    case "good":
      performanceRating = 3;
      break;
    case "easy":
      performanceRating = 4;
      break;
    default:
      performanceRating = 3; // Default to 'good'
  }

  if (performanceRating >= 3) {
    if (userProgress.repetition === 0) {
      userProgress.interval = 1;
    } else if (userProgress.repetition === 1) {
      userProgress.interval = 6;
    } else {
      userProgress.interval = Math.round(
        userProgress.interval * userProgress.easeFactor
      );
    }
    userProgress.repetition += 1;
    userProgress.easeFactor = Math.max(
      1.3,
      userProgress.easeFactor +
        0.1 -
        (5 - performanceRating) * (0.08 + (5 - performanceRating) * 0.02)
    );
  } else {
    userProgress.repetition = 0;
    userProgress.interval = 1;
  }
  userProgress.nextReviewDate = new Date(
    Date.now() + userProgress.interval * 24 * 60 * 60 * 1000
  );
  return userProgress;
}