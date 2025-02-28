"use client";

import { motion, AnimatePresence } from "framer-motion";
import Session from "@/src/components/global/session";
import Loading from "@/src/components/global/loading";
import ErrorMessage from "@/src/components/global/error-message";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Text } from "@/src/components/global/text";
import Tags from "@/src/components/global/tags";
import { useProjectById } from "@/src/hooks/useProjects";

interface ProjectPageClientProps {
  id: string;
}

export default function ProjectPageClient({ id }: ProjectPageClientProps) {
  const { data: project, isLoading, error } = useProjectById(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Error loading project." />;
  }

  if (!project) {
    return <ErrorMessage message="Project not found." />;
  }

  return (
    <Session>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      <div className="flex flex-col items-center gap-2 md:gap-4 ">
        <Text category="h1" className="text-center">
          {project.title}
        </Text>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          {/* Imagem de Capa */}
          {/* <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          /> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >

            <div
              dangerouslySetInnerHTML={{ __html: project.description }}
              className="text-gray-600 dark:text-gray-400 mt-2 space-y-2 [&>ul]:list-disc [&>ul]:pl-5 "
            />
          </motion.div>

          {/* Tags */}
          <Tags tags={project.tags || []} />
        </motion.div>
      </AnimatePresence>
    </Session>
  );
}
