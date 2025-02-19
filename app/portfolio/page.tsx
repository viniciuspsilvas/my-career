"use client";

import { useProjects } from "@/src/hooks/useProjects";
import { IProject } from "@/src/models/Project";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioPage() {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) return <p className="text-center text-gray-600 dark:text-gray-400">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">Error loading projects.</p>;

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-8">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto py-12">
        {/* Título Chamativo */}
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-gray-900 dark:text-white">Explore My </span>
          <span className="text-primary-500">Portfolio</span>
        </h1>

        {/* Texto de Apoio */}
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Discover some of my amazing projects and works!
        </p>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project: IProject) => (
            <div
              key={project._id}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}