import mongoose, { Schema, Document } from "mongoose";

export interface ITool extends Document {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ToolSchema = new Schema<ITool>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const Tool = mongoose.models.Tool || mongoose.model<ITool>("Tool", ToolSchema);
