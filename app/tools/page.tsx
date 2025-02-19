"use client";

import { useState } from "react";
import { Tag, TagCloud } from "react-tagcloud";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import { useTools } from "@/src/hooks/useTools";

const themeColors = [
  "#b3f0eb",
  "#8f5f58",
  "#d2e5d0",
  "#3f2f2a",
  "#d2b8b0",
  "#b2877f",
];

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState<Tag | null>(null);

    const { data: tools, isLoading, error } = useTools();

  const handleSelectedTool = (tag: Tag) => {
    setSelectedTool(tag);
  };

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
        className="cursor-pointer hover:text-primary-500 transition-all duration-300 mx-2"
        style={{
          animation: 'blinker 3s linear infinite',
          animationDelay:`${Math.random() * 2}s`,

          fontSize: "clamp(0.8rem, 2vw, 1.5rem)",
          border: `2px solid ${color}`,
          margin: "16px",
          padding: "5px",
          display: "inline-block",
          color,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, randomX, -randomX, 0],
          y: [0, randomY, -randomY, 0],
        }}
        transition={{
          duration: randomDuration,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        onClick={() => handleSelectedTool(tag)}
      >
        {tag.value}
      </motion.span>
    );
  };

  if (isLoading) return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"
      />
    </motion.div>
  );

  if (error) return <p className="text-center text-red-500">Error loading projects.</p>;


  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto py-12">
        {/* Título Animado */}
        <AnimatedTitleSection
          backTitle="STACK"
          mainTitle={<>MY <span className="text-primary-500">TOOLS</span></>}
          supportText="Explore the tools and technologies I use to build amazing projects!"
        />

        {/* Nuvem de Tags */}
        <div className="w-full max-w-4xl p-5 flex justify-center text-center">
          <TagCloud
            minSize={2}
            maxSize={5}
            tags={tools.map((tool, index) => ({
              value: tool.title,
              count: index,
            }))}
            onClick={(tag) => setSelectedTool(tag)}
            renderer={customRenderer}
          />
        </div>

        {/* Tooltip */}
        <Tooltip id="tool-tooltip" className="hidden md:block" />

        {/* Modal de Ferramenta Selecionada */}
        <AnimatePresence>
          {selectedTool && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center"
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {selectedTool.value}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedTool.description}
                </p>
                {/* <img
                  src="/placeholder.png"
                  alt={selectedTool.value}
                  className="w-full h-32 object-cover mb-4"
                /> */}
                <button
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300"
                  onClick={() => setSelectedTool(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
