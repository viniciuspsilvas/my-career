import mongoose, { Schema, Document } from "mongoose";

export interface ISkill extends Document {
  name: string;
  percentage: number;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    percentage: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Skill = mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
