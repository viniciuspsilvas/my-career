import { connectDB } from "@/src/lib/mongodb";
import { Tool } from "@/src/models/Tools";

export async function GET() {
  try {
    await connectDB();
    const tools = await Tool.find({});
    return new Response(JSON.stringify(tools), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch tools, error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tools" }), { status: 500 });
  }
}
