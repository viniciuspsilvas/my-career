import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  _id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String },
  },
  { timestamps: true },
);

export const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
