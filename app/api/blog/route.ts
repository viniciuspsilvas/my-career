import { connectDB } from "@/src/lib/mongodb";
import { BlogPost } from "@/src/models/BlogPost";

export async function GET() {
  try {
    await connectDB();
    const posts = await BlogPost.find({});
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch posts, error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), { status: 500 });
  }
}
