import "dotenv/config"; 

import { connectDB } from "../lib/mongodb";
import { Project } from "../models/Project";

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
    console.error("Error inserting projects:", error);
  } finally {
    process.exit();
  }
};

seedProjects();