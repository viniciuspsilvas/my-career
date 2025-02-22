// src/lib/fetchData.ts
import { connectDB } from "@/src/lib/mongodb";
import { PersonalInfo } from "../models/PersonalInfo";
import { Experience } from "../models/Experience";
import { Skill } from "../models/Skill";
import { Stat } from "../models/Stat";
import { Tool } from "../models/Tool";

export async function fetchResumeData() {
  await connectDB();

  const personalInfo = await PersonalInfo.findOne({});
  const experiences = await Experience.find({}).sort({ order: "desc" });
  const skills = await Skill.find({});
  const stats = await Stat.find({});
  const tools = await Tool.find({});

  return {
    personalInfo,
    experiences,
    skills,
    stats,
    tools,
  };
}