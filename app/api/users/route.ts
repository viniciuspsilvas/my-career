import { connectDB } from "@/src/lib/mongodb";
import { User } from "@/src/models/User";

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch users, error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
}
