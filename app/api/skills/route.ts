import { connectDB } from "@/src/lib/mongodb";
import { Skill } from "@/src/models/Skill";

export async function GET() {
  try {
    await connectDB();
    const skills = await Skill.find({});
    return new Response(JSON.stringify(skills), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch skills, error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch skills" }), {
      status: 500,
    });
  }
}
