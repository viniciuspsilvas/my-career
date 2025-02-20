import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  year: string;
  title: string;
  company: string;
  description: string;
  locality: string;
  link: string;
  image: string;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    year: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    locality: { type: String, required: false },
    link: { type: String, required: false },
    image: { type: String, required: false },
  },
  { timestamps: true },
);

export const Experience =
  mongoose.models.Experience ||
  mongoose.model<IExperience>("Experience", ExperienceSchema);
