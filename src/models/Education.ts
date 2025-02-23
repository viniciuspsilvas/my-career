import mongoose, { Schema, Document } from "mongoose";

export interface IEducation extends Document {
  courseName: string;
  institution: string;
  locality: string;
  year: string;
}

const EducationSchema = new Schema<IEducation>(
  {
    courseName: { type: String, required: true },
    institution: { type: String, required: true },
    locality: { type: String, required: true },
    year: { type: String, required: true },
  },
  { timestamps: true },
);

export const Education =
  mongoose.models.Education || mongoose.model<IEducation>("Education", EducationSchema);