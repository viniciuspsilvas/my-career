import mongoose, { Schema, Document } from "mongoose";

export interface IReference extends Document {
  name: string;
  description: string;
  phone: string;
  email: string;
}

const ReferenceSchema = new Schema<IReference>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true },
);

export const Reference =
  mongoose.models.Reference || mongoose.model<IReference>("Reference", ReferenceSchema);