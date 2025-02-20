import { connectDB } from "@/src/lib/mongodb";
import { Stat } from "@/src/models/Stat";

export async function GET() {
  try {
    await connectDB();
    const stats = await Stat.find({});
    return new Response(JSON.stringify(stats), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch stats, error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch stats" }), {
      status: 500,
    });
  }
}
