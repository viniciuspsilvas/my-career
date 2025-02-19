"use client";

import { useProjects } from "@/src/hooks/useProjects";
import { IProject } from "@/src/models/Project";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";

export default function PortfolioPage() {
  const { data: projects, isLoading, error } = useProjects();

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
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto py-12">

        <AnimatedTitleSection
          backTitle="WORK"
          mainTitle={<>MY <span className="text-primary-500">PORTFOLIO</span></>}
          supportText="Discover some of my amazing projects and works!"
        />

        {/* Grid de Projetos */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects?.map((project: IProject, index: number) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.2, duration: 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-md transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.1 },
                }}
              >
                {/* Imagem do Projeto */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded"
                />
                
                {/* Título do Projeto */}
                <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                
                {/* Descrição do Projeto */}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
                
                {/* Link para o Projeto */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                >
                  <span>View Project</span>
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}