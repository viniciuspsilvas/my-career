"use client";

import { FaPaperPlane, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import Session from "@/src/components/global/session";
import SocialsMediaLinks from "@/src/components/global/socials-media-links";
import { useState } from "react";

export default function ContactPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Session>
      {/* Título Animado */}
      <AnimatedTitleSection
        backTitle="REACH OUT"
        mainTitle={
          <>
            CONTACT <span className="text-primary-500">ME</span>
          </>
        }
        supportText="Have a question or want to collaborate? Feel free to reach out!"
      />

      {/* Informações de Contato */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* E-mail */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300"
          >
            <div className="bg-primary-500 p-4 rounded-full">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-white font-semibold">
                viniciuspsilvas@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Telefone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <div className="bg-primary-500 p-4 rounded-full">
              <FaPhone className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Phone</p>
              <p className="text-gray-900 dark:text-white font-semibold">
                04******62
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Contact Me Safely 😊
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For security reasons, I prefer not to share my phone number
                publicly. Please send me an email instead!
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-600 transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Redes Sociais */}
      <SocialsMediaLinks />

      {/* Formulário de Contato */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-gray-400 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
              placeholder="Your Name"
            />
          </div>

          {/* E-mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Assunto */}
        <div className="mt-6">
          <label
            htmlFor="subject"
            className="block text-gray-600 dark:text-gray-400 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
            placeholder="Subject"
          />
        </div>

        {/* Mensagem */}
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-gray-600 dark:text-gray-400 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
            placeholder="Your message..."
          />
        </div>

        {/* Botão de Envio */}
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary-500 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all duration-300 shadow-md"
          >
            <span>Send Message</span>
            <FaPaperPlane className="text-lg" />
          </motion.button>
        </div>
      </motion.form>
    </Session>
  );
}
