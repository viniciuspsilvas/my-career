"use client";

import { useState } from "react";
import { Tag, TagCloud } from "react-tagcloud";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";

const tools = [
  {
    value: "VS Code",
    count: 30,
    description: "Powerful code editor with great extensions."
  },
  {
    value: "TypeScript",
    count: 25,
    description: "Typed superset of JavaScript for scalability."
  },
  {
    value: "React JS",
    count: 28,
    description: "Library for building UI components."
  },
  {
    value: "React Query",
    count: 20,
    description: "Data fetching and state management tool."
  },
  {
    value: "Tailwind",
    count: 22,
    description: "Utility-first CSS framework for fast styling."
  },
  {
    value: "Next JS",
    count: 26,
    description: "Full-stack React framework for web apps."
  },
  {
    value: "Node.js",
    count: 24,
    description: "JavaScript runtime for backend development."
  },
  {
    value: "Prisma",
    count: 18,
    description: "Modern ORM for Node.js and TypeScript."
  },
  {
    value: "Mongoose",
    count: 16,
    description: "MongoDB object modeling for Node.js."
  },
  {
    value: "PostgreSQL",
    count: 19,
    description: "Powerful relational database system."
  },
  {
    value: "MongoDB",
    count: 21,
    description: "NoSQL document-oriented database."
  },
  {
    value: "Azure",
    count: 17,
    description: "Cloud computing platform from Microsoft."
  },
  {
    value: "AWS",
    count: 23,
    description: "Amazon Web Services for cloud computing."
  }
];



const themeColors = [
  "#b3f0eb",
  "#8f5f58",
  "#d2e5d0",
  "#3f2f2a",
  "#d2b8b0#b2877f"
];

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState(null);


  const handleSelectedTool = (tag: Tag) => {
    setSelectedTool(tag);
  }

  const customRenderer = (tag: Tag) => {
    const color = themeColors[Math.floor(Math.random() * themeColors.length)];
    const randomDuration = Math.random() * 5 + 3;
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    return (
      <motion.span
        key={tag.value}
        data-tooltip-id="tool-tooltip"
        data-tooltip-content={tag.value}
        className="cursor-pointer hover:text-primary transition-all duration-300 mx-2"
        style={{
          fontSize: "clamp(0.8rem, 2vw, 1.5rem)",
          border: `2px solid`,
          margin: "16px",
          padding: "5px",
          display: "inline-block",
          color
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, randomX, -randomX, 0],
          y: [0, randomY, -randomY, 0]
        }}
        transition={{
          duration: randomDuration,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        onClick={() => handleSelectedTool(tag)}
      >
        {tag.value}
      </motion.span>
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-gray-900 dark:text-white">MY </span>
          <span className="text-primary-500">TOOLS</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Read my latest tools!
        </p>

        <div className="w-full max-w-4xl p-5 flex justify-center text-center">
          <TagCloud
            minSize={2}
            maxSize={5}
            tags={tools}
            onClick={tag => setSelectedTool(tag)}
            renderer={customRenderer}
          />
        </div>

        <Tooltip id="tool-tooltip" className="hidden md:block" />

        {selectedTool &&
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {selectedTool.value}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedTool.description}
              </p>
              <img
                src="/placeholder.png"
                alt={selectedTool.value}
                className="w-full h-32 object-cover mb-4"
              />
              <button
                className="bg-primary-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setSelectedTool(null)}
              >
                Close
              </button>
            </div>
          </div>}
      </div>
    </section>
  );
}
