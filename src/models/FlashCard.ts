import mongoose, { Schema, Document } from "mongoose";

export interface IFlashCard extends Document {
  _id: string;
  question: string;
  tip?: string;
  answer: string;
  type: "frontend" | "backend" | "behavioral" | "other";
  tags?: string[];
}

const FlashCardSchema = new Schema<IFlashCard>(
  {
    question: { type: String, required: true },
    tip: { type: String },
    answer: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: [String] }
  },
  { timestamps: true }
);

export const FlashCard =
  mongoose.models.FlashCard ||
  mongoose.model<IFlashCard>("FlashCard", FlashCardSchema);
