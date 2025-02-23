// app/api/resume/route.ts
import { connectDB } from "@/src/lib/mongodb";
import { fetchResumeData } from "@/src/lib/fetchResumeData";

export async function GET() {
  try {
    await connectDB();

    // Fetch all data from MongoDB collections

    const resume = await fetchResumeData();


    // Return the combined resume data
    return new Response(JSON.stringify(resume), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch resume data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch resume data" }),
      { status: 500 },
    );
  }
}