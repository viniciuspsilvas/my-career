import { connectDB } from "@/src/lib/mongodb";
import { Experience } from "@/src/models/Experience";

export async function GET() {
  try {
    await connectDB();
    const experiences = await Experience.find({}).sort({ order: "desc" });
    return new Response(JSON.stringify(experiences), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch experiences, error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch experiences" }),
      { status: 500 }
    );
  }
}
