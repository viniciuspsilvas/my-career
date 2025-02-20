import { connectDB } from "@/src/lib/mongodb";
import { PersonalInfo } from "@/src/models/PersonalInfo";

export async function GET() {
  try {
    await connectDB();
    const personalInfos = await PersonalInfo.find({});
    return new Response(JSON.stringify(personalInfos), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch personal infos, error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch personal infos" }),
      { status: 500 },
    );
  }
}
