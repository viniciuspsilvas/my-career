"use client";

import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function AboutPage() {
  // Dados fictícios para a página
  const personalInfos = [
    { label: "First Name", value: "Vinicius" },
    { label: "Last Name", value: "Silva" },
    { label: "Age", value: "37 Years" },
    { label: "Nationality", value: "Brazilian" },
    { label: "Freelance", value: "Available" },
    { label: "Address", value: "Gold Coast, Australia" },
    { label: "Phone", value: "+55 11 99999-9999" },
    { label: "Email", value: "viniciuspsilvas@gmail.com" },
    { label: "Skype", value: "viniciuspsilvas" },
    { label: "Languages", value: "English, Portuguese" }
  ];

  const stats = [
    { label: "Years of Experience", value: "12+" },
    { label: "Completed Projects", value: "97+" },
    { label: "Happy Customers", value: "81+" },
    { label: "Awards Won", value: "53+" }
  ];

  const skills = [
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 75 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 70 },
    { name: "Node.js", percentage: 80 },
    { name: "MongoDB", percentage: 60 },
    { name: "GraphQL", percentage: 50 },
    { name: "Next.js", percentage: 65 }
  ];

  const timeline = [
    {
      year: "2020 - Present",
      title: "Senior Developer",
      company: "Tech Company",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBriefcase />
    },
    {
      year: "2015 - 2020",
      title: "Software Engineer",
      company: "Another Company",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaBriefcase />
    },
    {
      year: "2010 - 2014",
      title: "Computer Science Degree",
      company: "XYZ University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-8">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto py-12">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-gray-900 dark:text-white">ABOUT </span>
          <span className="text-primary-500">ME</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Learn more about my background, skills, and experience!
        </p>

        {/* Seção de Informações Pessoais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              PERSONAL INFOS
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {personalInfos.map((info, index) =>
                <div key={index} className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">{info.label}:</span>{" "}
                  {info.value}
                </div>
              )}
            </div>
            <button className="mt-6 bg-primary-500 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all duration-300 shadow-md">
              <FaDownload />
              <span>Download CV</span>
            </button>
          </div>

          {/* Seção de Estatísticas */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) =>
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-primary-500 text-3xl font-bold">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            )}
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 my-16 md:my-20 w-2/3 mx-auto" />

        {/* Seção de Habilidades */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            MY SKILLS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) =>
              <div key={index} className="text-center">
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
              </div>
            )}
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 my-16 md:my-20 w-2/3 mx-auto" />

        {/* Seção de Experiência & Educação */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            EXPERIENCE & EDUCATION
          </h2>
          <div className="space-y-8 relative">
            {/* Linha da Timeline */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-gray-700" />
            {timeline.map((item, index) =>
              <div key={index} className="flex items-start space-x-4">
                {/* Ícone */}
                <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center z-10">
                  {item.icon}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
