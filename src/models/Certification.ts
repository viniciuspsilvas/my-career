import mongoose, { Schema, Document } from "mongoose";

export interface ICertification extends Document {
  name: string;
  institution: string;
}

const CertificationSchema = new Schema<ICertification>(
  {
    name: { type: String, required: true },
    institution: { type: String, required: true },
  },
  { timestamps: true },
);

export const Certification =
  mongoose.models.Certification || mongoose.model<ICertification>("Certification", CertificationSchema);