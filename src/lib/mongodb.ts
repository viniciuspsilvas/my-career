import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return; // Já está conectado
    }

    await mongoose.connect(MONGO_URI, {
      dbName: "myCareer", // Substitua pelo nome do seu banco
      
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Mata a aplicação se falhar
  }
};