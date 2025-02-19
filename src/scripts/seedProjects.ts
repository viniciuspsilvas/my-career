import "dotenv/config";

import { connectDB } from "../lib/mongodb";
import { Project } from "../models/Project";
import { Experience } from "../models/Experience";
import { Stat } from "../models/Stat";
import { Skill } from "../models/Skill";
import { PersonalInfo } from "../models/PersonalInfo";
import { Tool } from "../models/Tools";


const experiences = [
  {
    year: "Feb 2023 – Jun 2023",
    title: "Front End Developer",
    company: "TEREM - Sydney, Australia",
    description: "Worked as a React JS developer on the Find My Credit project for Qantas Airways. Developed a web application to help customers find their Covid19 Credit.",
  },
  {
    year: "Jan 2024 – Sep 2024",
    title: "Full Stack Developer",
    company: "FLK IT OVER - Sydney, Australia",
    description: "Key role in developing and maintaining a real estate platform. Worked on UI/UX with Radix UI, CSS Modules, Embla Carousel, and Framer Motion.",
  },
  {
    year: "Apr 2021 - Dec 2022",
    title: "Full Stack Developer",
    company: "ZAPID HIRE - Sydney, Australia",
    description: "Maintained applications written in ReactJS and React Native. Developed GraphQL server with Apollo, using JWT authentication and Prisma ORM.",
  },
  {
    year: "Dec 2020 – Apr 2021",
    title: "Mobile Developer",
    company: "PAY IT LATER - Brisbane, Australia",
    description: "Developed mobile applications for Android and iOS. Built reusable components with Storybook and implemented API calls using Apollo GraphQL.",
  },
  {
    year: "Mar 2020 - Dec 2020",
    title: "Full Stack Developer",
    company: "Two Red Kites",
    description: "Developed frontend and backend solutions, contributing to various projects.",
  },
  {
    year: "Mar 2019 - Jun 2019",
    title: "React Mobile Developer",
    company: "Live Platforms Pty Ltd",
    description: "Worked on mobile development using React Native and related technologies.",
  },
  {
    year: "Aug 2018 - Feb 2019",
    title: "React Mobile Developer",
    company: "Mindroom Innovation",
    description: "Developed mobile applications and optimized UI components.",
  },
  {
    year: "Feb 2015 - Apr 2016",
    title: "Web Developer",
    company: "Indra Brasil",
    description: "Developed web applications with JavaScript and Java technologies.",
  },
  {
    year: "Apr 2014 - Feb 2015",
    title: "Java Developer",
    company: "Sinos Algar Tecnologia",
    description: "Built Java applications and maintained enterprise systems.",
  },
  {
    year: "Sep 2013 - Mar 2014",
    title: "Java Developer",
    company: "Urcal Projetos",
    description: "Worked on Java-based solutions for various clients.",
  },
  {
    year: "Dec 2009 - Jul 2013",
    title: "Java Developer",
    company: "Politec Indra",
    description: "Developed enterprise applications with Java.",
  },
  {
    year: "Aug 2008 - Nov 2009",
    title: ".NET Developer",
    company: "LG Informatica",
    description: "Built and maintained .NET applications for various business needs.",
  },
];

const stats = [
  { label: "HTML5 / CSS3", value: "85%" },
  { label: "JavaScript / TypeScript", value: "90%" },
  { label: "Node.js", value: "80%" },
  { label: "React", value: "70%" },
  { label: "React Native", value: "65%" },
  { label: "Redux", value: "70%" },
  // { label: "Storybook", value: "60%" },
  // { label: "Styled Components", value: "50%" },
  // { label: "iOS & Android", value: "60%" },
  // { label: "GraphQL", value: "50%" },
  // { label: "GIT Workflows", value: "70%" },
  // { label: "REST & Web Services", value: "75%" },
];

const skills = [
  // { name: "Node.js", percentage: 85 },
  // { name: "Express", percentage: 80 },
  // { name: "Apollo Server", percentage: 75 },
  // { name: "TypeScript", percentage: 85 },
  { name: "AWS", percentage: 70 },
  { name: "EC2, ECS, ELB, S3, IAM", percentage: 65 },
  { name: "Prisma ORM", percentage: 60 },
  { name: "MongoDB", percentage: 65 },
  { name: "PostgreSQL", percentage: 60 },
  { name: "Docker", percentage: 75 },
  { name: "CI/CD", percentage: 70 },
  { name: "DevOps", percentage: 65 },
];

const personalInfo = {
  fullName: "Vinicius Silva",
  title: "Full Stack Developer",
  email: "viniciuspsilvas@gmail.com",
  location: "Gold Coast, NSW, Australia",
  profile: "Experienced full-stack developer with expertise in JavaScript, React, Node.js, and cloud solutions.",
};


const tools = [
  {
    title: "VS Code",
    description: "Powerful code editor with great extensions.",
    link: "https://code.visualstudio.com/",
    image: "/images/vscode.png",
  },
  {
    title: "TypeScript",
    description: "Typed superset of JavaScript for scalability.",
    link: "https://www.typescriptlang.org/",
    image: "/images/typescript.png",
  },
  {
    title: "React JS",
    description: "Library for building UI components.",
    link: "https://react.dev/",
    image: "/images/react.png",
  },
  {
    title: "React Query",
    description: "Data fetching and state management tool.",
    link: "https://tanstack.com/query/latest",
    image: "/images/react-query.png",
  },
  {
    title: "Tailwind",
    description: "Utility-first CSS framework for fast styling.",
    link: "https://tailwindcss.com/",
    image: "/images/tailwind.png",
  },
  {
    title: "Next JS",
    description: "Full-stack React framework for web apps.",
    link: "https://nextjs.org/",
    image: "/images/nextjs.png",
  },
  {
    title: "Node.js",
    description: "JavaScript runtime for backend development.",
    link: "https://nodejs.org/",
    image: "/images/nodejs.png",
  },
  {
    title: "Prisma",
    description: "Modern ORM for Node.js and TypeScript.",
    link: "https://www.prisma.io/",
    image: "/images/prisma.png",
  },
  {
    title: "Mongoose",
    description: "MongoDB object modeling for Node.js.",
    link: "https://mongoosejs.com/",
    image: "/images/mongoose.png",
  },
  {
    title: "PostgreSQL",
    description: "Powerful relational database system.",
    link: "https://www.postgresql.org/",
    image: "/images/postgresql.png",
  },
  {
    title: "MongoDB",
    description: "NoSQL document-oriented database.",
    link: "https://www.mongodb.com/",
    image: "/images/mongodb.png",
  },
  {
    title: "Azure",
    description: "Cloud computing platform from Microsoft.",
    link: "https://azure.microsoft.com/",
    image: "/images/azure.png",
  },
  {
    title: "AWS",
    description: "Amazon Web Services for cloud computing.",
    link: "https://aws.amazon.com/",
    image: "/images/aws.png",
  },
];

const seedProjects = async () => {
  await connectDB();

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with Next.js and TailwindCSS.",
      image: "https://via.placeholder.com/300",
      link: "https://myportfolio.com",
    },
    {
      title: "E-commerce App",
      description: "An online store built with React, Node.js, and MongoDB.",
      image: "https://via.placeholder.com/300",
      link: "https://myecommerce.com",
    },
  ];

  try {
    await Project.insertMany(projects);
    console.log("Projects inserted successfully");
  } catch (error) {
    console.error("Error inserting Project seeds:", error);
  } finally {
    process.exit();
  }
};

const seedExperiences = async () => {
  await connectDB();

  try {
    await Experience.insertMany(experiences);
    console.log("Experiences inserted successfully");
  } catch (error) {
    console.error("Error inserting Experience seeds:", error);
  } finally {
    process.exit();
  }
};

const seedStats = async () => {
  await connectDB();

  try {
    await Stat.insertMany(stats);
    console.log("Stats inserted successfully");
  } catch (error) {
    console.error("Error inserting Stat seeds:", error);
  } finally {
    process.exit();
  }
};

const seedSkills = async () => {
  await connectDB();

  try {
    await Skill.insertMany(skills);
    console.log("Skills inserted successfully");
  } catch (error) {
    console.error("Error inserting Skill seeds:", error);
  } finally {
    process.exit();
  }
};

const seedPersonalInfo = async () => {
  await connectDB();

  try {
    await PersonalInfo.insertMany(personalInfo);
    console.log("Personal Info inserted successfully");
  } catch (error) {
    console.error("Error inserting Personal Info seeds:", error);
  } finally {
    process.exit();
  }
};

const seedTools = async () => {
  await connectDB();

  try {
    await Tool.insertMany(tools);
    console.log("Tools inserted successfully");
  } catch (error) {
    console.error("Error inserting Tool seeds:", error);
  } finally {
    process.exit();
  }
};

// TODO DESCOMENTAR PARA RODAR O SCRIPT
// seedProjects();
// seedExperiences();
// seedStats();
// seedSkills();
// seedPersonalInfo();
// seedTools();