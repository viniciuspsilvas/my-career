"use client";

import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import Session from "@/src/components/global/session";
import { useState } from "react";
import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";

export default function ContactPageClient() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]); // State to store selected experience IDs

  const { data } = useSelector((state: RootState) => state.resume);

  const handleExperienceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
    setSelectedExperiences(selectedOptions);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Call the API to generate the cover letter
      const response = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ companyName, jobDescription, jobTitle, experiences: selectedExperiences })
      });

      if (!response.ok) {
        throw new Error("Failed to generate cover letter");
      }

      // Convert the response to a Blob and trigger download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${companyName}_cover-letter.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Show success modal
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error generating cover letter:", error);
      alert("Failed to generate cover letter. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Session>
      {/* Título Animado */}
      <AnimatedTitleSection
        backTitle="REACH OUT"
        mainTitle={
          <>
            COVER <span className="text-primary-500">LETTER</span>
          </>
        }
        supportText="Get your cover letter done in a few seconds."
      />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300"
      >
        <div className="mt-6">
          <label
            htmlFor="jobTitle"
            className="block text-gray-600 dark:text-gray-400 mb-2"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
            placeholder="Enter company name"
            required
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="companyName"
            className="block text-gray-600 dark:text-gray-400 mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
            placeholder="Enter company name"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="jobDescription"
            className="block text-gray-600 dark:text-gray-400 mb-2"
          >
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
            placeholder="Enter job description..."
          />
        </div>
        

        {/* Multiple select list of experience */}
        <div className="mt-6">
          <label
            htmlFor="experience"
            className="block text-gray-600 dark:text-gray-400 mb-2"
          >
            Experience
          </label>
          <select
            id="experience"
            multiple // Allow multiple selections
            value={selectedExperiences} // Bind selected values to state
            onChange={handleExperienceChange} // Handle changes
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
          >
            {data?.experiences.map((experience, index) => (
              <option key={`${experience._id}_${index}`} value={experience._id as string}>
                {experience.company} -  {experience.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary-500 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all duration-300 shadow-md"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              <>
                <span>Download Cover Letter</span>
                <FaFileDownload className="text-lg" />
              </>
            )}
          </motion.button>
        </div>
      </motion.form>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="mb-6">
              Your cover letter has been generated and downloaded.
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="bg-primary-500 text-white py-2 px-6 rounded-full hover:bg-primary-600 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Session>
  );
}