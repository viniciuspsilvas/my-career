import { IBlogPost } from "./BlogPost";
import { IExperience } from "./Experience";
import { IPersonalInfo } from "./PersonalInfo";
import { IProject } from "./Project";
import { ISkill } from "./Skill";
import { IStat } from "./Stat";
import { ITool } from "./Tool";

export interface IResume {
  personalInfo: IPersonalInfo;
  experiences: IExperience[];
  skills: ISkill[];
  stats: IStat[];
  tools: ITool[];

  blogPosts?: IBlogPost[];
  projects?: IProject[];
}
