import mongoose, { Schema, Document } from "mongoose";

export interface IPersonalInfo extends Document {
  label: string;
  value: string;
}

const PersonalInfoSchema = new Schema<IPersonalInfo>(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { timestamps: true }
);

export const PersonalInfo = mongoose.models.PersonalInfo || mongoose.model<IPersonalInfo>("PersonalInfo", PersonalInfoSchema);
