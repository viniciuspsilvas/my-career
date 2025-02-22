// app/api/resume/route.ts
import { connectDB } from "@/src/lib/mongodb";
import { PersonalInfo } from "@/src/models/PersonalInfo";
import { Experience } from "@/src/models/Experience";
import { Skill } from "@/src/models/Skill";
import { Stat } from "@/src/models/Stat";
import { Tool } from "@/src/models/Tool";
import { BlogPost } from "@/src/models/BlogPost";
import { Project } from "@/src/models/Project";
import { IResume } from "@/src/models/Resume";

export async function GET() {
  try {
    await connectDB();

    // Fetch all data from MongoDB collections
    const personalInfo = await PersonalInfo.findOne({}); // Assuming there's only one personal info document
    const experiences = await Experience.find({});
    const skills = await Skill.find({});
    const stats = await Stat.find({});
    const tools = await Tool.find({});
    const blogPosts = await BlogPost.find({});
    const projects = await Project.find({});

    // Combine all data into a single resume object
    const resume: IResume = {
      personalInfo,
      experiences,
      skills,
      stats,
      tools,
      blogPosts,
      projects,
    };

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