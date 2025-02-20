"use client";

import { FaDownload } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import { useExperience } from "@/src/hooks/useExperience";
import { usePersonalInfo } from "@/src/hooks/usePersonalInfo";
import { useSkill } from "@/src/hooks/useSkill";
import { useStat } from "@/src/hooks/useStat";
import { IoCode } from "react-icons/io5";

export default function AboutPage() {

  const { data: personalInfos, isLoading: personalInfosLoading, error: personalInfosError } = usePersonalInfo();
  const { data: stats, isLoading: statsLoading, error: statsError } = useStat();
  const { data: skills, isLoading: skillsLoading, error: skillsError } = useSkill();
  const { data: experiences, isLoading: experienceLoading, error: experienceError } = useExperience();

  if (personalInfosLoading ||statsLoading ||  skillsLoading || experienceLoading ) return (
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
  
  const personalInfo = personalInfos ? personalInfos[0] : null;

  if (personalInfosError 
    || statsError 
    || skillsError 
    || experienceError
    || !personalInfo
  ) return <p className="text-center text-red-500">Error loading personal infos.</p>;


  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-8">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto py-12">
        {/* Título Principal com Animação */}
        <AnimatedTitleSection
          backTitle="ABOUT"
          mainTitle={
            <>
              ABOUT <span className="text-primary-500">ME</span>
            </>
          }
          supportText="Learn more about my background, skills, and experience!"
        />

        {/* Seção de Informações Pessoais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              PERSONAL INFOS
            </h2>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-gray-600 dark:text-gray-400">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</span>
                <span className="block text-gray-800 dark:text-gray-200">{personalInfo.fullName}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Title</span>
                <span className="block text-gray-800 dark:text-gray-200">{personalInfo.title}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Email</span>
                <span className="block text-gray-800 dark:text-gray-200">{personalInfo.email}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Location</span>
                <span className="block text-gray-800 dark:text-gray-200">{personalInfo.location}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 col-span-2">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Profile</span>
                <span className="block text-gray-800 dark:text-gray-200">{personalInfo.profile}</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-primary-500 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all duration-300 shadow-md"
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.button>
          </div>

          {/* Seção de Estatísticas */}
          <div className="grid grid-cols-2 gap-4">
            {stats?.map((stat, index : number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-primary-500 text-3xl font-bold">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="border-gray-200 dark:border-gray-700 my-16 md:my-20 w-2/3 mx-auto" />

        {/* Seção de Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            MY SKILLS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills?.map((skill, index : number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={{
                      path: { stroke: `#07d2be` },
                      text: {
                        fill: "#07d2be",
                        fontSize: "24px",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="border-gray-200 dark:border-gray-700 my-16 md:my-20 w-2/3 mx-auto" />

        {/* Seção de Experiência & Educação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            EXPERIENCE & EDUCATION
          </h2>
          <div className="space-y-8 relative">
            {/* Linha da Timeline */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-gray-700" />
            {experiences?.map((item, index : number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                {/* Ícone */}
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center z-10">
                  <IoCode />
                </div>
                {/* Conteúdo */}
                <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}