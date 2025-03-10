import { connectDB } from "@/src/lib/mongodb";
import { FlashCard } from "@/src/models/FlashCard";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const flashCard = await FlashCard.find();
    if (!flashCard) {
      return NextResponse.json(
        { error: "Flashcard not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(flashCard);
  } catch (error) {
    console.error("Error fetching flashcard:", error);
    return NextResponse.json(
      { error: "Error fetching flashcard" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await request.json();
    const { id } = await params;

    const updatedFlashCard = await FlashCard.findByIdAndUpdate(id, body, {
      new: true
    });
    if (!updatedFlashCard) {
      return NextResponse.json(
        { error: "Flashcard not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedFlashCard);
  } catch (error) {
    console.error("Error updating flashcard:", error);
    return NextResponse.json(
      { error: "Error updating flashcard" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  try {
    await connectDB();
    const deletedFlashCard = await FlashCard.findByIdAndDelete(id);
    if (!deletedFlashCard) {
      return NextResponse.json(
        { error: "Flashcard not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    return NextResponse.json(
      { error: "Error deleting flashcard" },
      { status: 500 }
    );
  }
}
