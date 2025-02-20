import { connectDB } from "@/src/lib/mongodb";
import { Project } from "@/src/models/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({});
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch projects, error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
    });
  }
}
