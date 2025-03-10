import mongoose, { Schema, Document } from "mongoose";

export interface IUserProgress extends Document {
  userId: string;
  flashCardId: Schema.Types.ObjectId;
  nextReviewDate: Date;
  interval: number;
  repetition: number;
  easeFactor: number;
  lastChoice?: "again" | "hard" | "good" | "easy";
}

const UserProgressSchema = new Schema<IUserProgress>(
  {
    userId: { type: String, required: true },
    flashCardId: {
      type: Schema.Types.ObjectId,
      ref: "FlashCard",
      required: true
    },
    nextReviewDate: { type: Date, required: true },
    interval: { type: Number, required: true },
    repetition: { type: Number, required: true },
    easeFactor: { type: Number, required: true },
    lastChoice: { type: String, enum: ["again", "hard", "good", "easy"] }
  },
  { timestamps: true }
);

export const UserProgress =
  mongoose.models.UserProgress ||
  mongoose.model<IUserProgress>("UserProgress", UserProgressSchema);
