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
import Loading from "@/src/components/global/loading";
import ErrorMessage from "@/src/components/global/error-message";
import Session from "@/src/components/global/session";
import { Text } from "@/src/components/global/text";
import { useState } from "react";
import ExperienceModal from "@/src/components/experience-modal";
import { IExperience } from "@/src/models/Experience";
import { MdOutlineUnfoldMore } from "react-icons/md";

const InfoItem = ({
  label,
  value,
  isLink
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <div className="text-gray-600 dark:text-gray-400">
    <Text category="label">{label}</Text>
    {isLink ? (
      <a
        href={`mailto:${value}`}
        className="block text-gray-800 dark:text-gray-200 text-sm md:text-base underline"
      >
        {value}
      </a>
    ) : (
      <Text category="p1">{value}</Text>
    )}
  </div>
);

export default function AboutPageClient() {
  const {
    data: personalInfos,
    isLoading: personalInfosLoading,
    error: personalInfosError
  } = usePersonalInfo();
  const { data: stats, isLoading: statsLoading, error: statsError } = useStat();
  const {
    data: skills,
    isLoading: skillsLoading,
    error: skillsError
  } = useSkill();
  const {
    data: experiences,
    isLoading: experienceLoading,
    error: experienceError
  } = useExperience();

  const [selectedExperience, setSelectedExperience] = useState<
    IExperience | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (experience: IExperience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(undefined);
  };

  if (
    personalInfosLoading ||
    statsLoading ||
    skillsLoading ||
    experienceLoading
  ) {
    return <Loading />;
  }

  const personalInfo = personalInfos ? personalInfos[0] : null;

  if (
    personalInfosError ||
    statsError ||
    skillsError ||
    experienceError ||
    !personalInfo
  ) {
    return <ErrorMessage message="Error loading personal infos." />;
  }

  return (
    <Session>
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
          <div className="sm:grid sm:grid-cols-2 space-y-2 gap-4">
            <InfoItem label="Full Name" value={personalInfo.fullName} />
            <InfoItem label="Title" value={personalInfo.title} />
            <InfoItem label="Email" value={personalInfo.email} isLink />
            <InfoItem label="Location" value={personalInfo.location} />
          </div>

          <div className="flex justify-center items-end mb-4 md:mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-primary-500 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all duration-300 shadow-md"
            >
              <FaDownload />
              <span>Download CV</span>
            </motion.button>
          </div>
        </div>

        {/* Seção de Estatísticas */}
        <div className="grid grid-cols-2 gap-4">
          {stats?.map((stat, index: number) => (
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
          {skills?.map((skill, index: number) => (
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
                      fontWeight: "bold"
                    }
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
          EXPERIENCE
        </h2>
        <div className="space-y-8 relative">
          {/* Linha da Timeline */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-gray-700" />
          {experiences?.map((item, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex items-start space-x-4 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Ícone */}
              <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center z-10">
                <IoCode />
              </div>
              {/* Conteúdo */}
              <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <Text category="h5" className="font-bold">
                  {" "}
                  {item.title}
                </Text>
                <Text category="p1" status="basic">
                  {" "}
                  {item.company} -{" "}
                  <Text category="small"> {item.locality}</Text>
                </Text>
                <Text category="small" status="basic">
                  {" "}
                  {item.year}
                </Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description
                  }}
                  className="text-gray-600 dark:text-gray-400 mt-2 space-y-2 [&>ul]:list-disc [&>ul]:pl-5"
                />
                <div className="flex justify-end mt-2 ">
                  <MdOutlineUnfoldMore className="text-primary-500 text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ExperienceModal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Session>
  );
}
