import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  year: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    year: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Experience = mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);
