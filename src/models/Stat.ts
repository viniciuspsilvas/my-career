import mongoose, { Schema, Document } from "mongoose";

// Stats Model
export interface IStat extends Document {
  label: string;
  value: string;
}

const StatSchema = new Schema<IStat>(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { timestamps: true }
);

export const Stat = mongoose.models.Stat || mongoose.model<IStat>("Stat", StatSchema);
