import { IBlogPost } from "./BlogPost";
import { ICertification } from "./Certification";
import { IEducation } from "./Education";
import { IExperience } from "./Experience";
import { IInterest } from "./Interest";
import { IPersonalInfo } from "./PersonalInfo";
import { IProject } from "./Project";
import { IReference } from "./Reference";
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

  educations?: IEducation[];
  certifications?: ICertification[];
  interests?: IInterest[];
  references?: IReference[];
}
