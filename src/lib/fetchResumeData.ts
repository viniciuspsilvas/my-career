// src/lib/fetchData.ts
import { connectDB } from "@/src/lib/mongodb";
import { PersonalInfo } from "../models/PersonalInfo";
import { Experience } from "../models/Experience";
import { Skill } from "../models/Skill";
import { Stat } from "../models/Stat";
import { Tool } from "../models/Tool";
import { Education } from "../models/Education";
import { Certification } from "../models/Certification";
import { Interest } from "../models/Interest";
import { Reference } from "../models/Reference";

export async function fetchResumeData() {
  await connectDB();

  const personalInfo = await PersonalInfo.findOne({});
  const experiences = await Experience.find({}).sort({ order: "desc" });
  const skills = await Skill.find({});
  const stats = await Stat.find({});
  const tools = await Tool.find({});
  const educations = await Education.find({});
  const certifications = await Certification.find();
  const interests = await Interest.find();
  const references = await Reference.find();

  return {
    personalInfo,
    experiences,
    skills,
    stats,
    tools,
    educations,
    certifications,
    interests,
    references,
  };
}