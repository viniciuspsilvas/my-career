import mongoose, { Schema, Document } from "mongoose";

export interface IInterest extends Document {
  title: string;
  icon: string;
}

const InterestSchema = new Schema<IInterest>(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { timestamps: true },
);

export const Interest =
  mongoose.models.Interest || mongoose.model<IInterest>("Interest", InterestSchema);