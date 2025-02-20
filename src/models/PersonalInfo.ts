import mongoose, { Schema, Document } from "mongoose";

export interface IPersonalInfo extends Document {
  fullName: string;
  title: string;
  email: string;
  location: string;
  profile: string;
}

const PersonalInfoSchema = new Schema<IPersonalInfo>(
  {
    fullName: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    profile: { type: String, required: true },
  },
  { timestamps: true },
);

export const PersonalInfo =
  mongoose.models.PersonalInfo ||
  mongoose.model<IPersonalInfo>("PersonalInfo", PersonalInfoSchema);
