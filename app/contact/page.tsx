'use client'

import { FaPaperPlane, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-8 transition-colors duration-300">
      {/* Container Principal */}
      <div className="max-w-4xl mx-auto py-12">
        {/* Título Chamativo */}
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="text-gray-900 dark:text-white">GET IN </span>
          <span className="text-primary-500">TOUCH</span>
        </h1>

        {/* Texto de Apoio */}
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        {/* Informações de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* E-mail */}
          <div className="flex items-center space-x-4">
            <div className="bg-primary-500 p-4 rounded-full">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <p className="text-gray-900 dark:text-white font-semibold">contact@vinitech.dev</p>
            </div>
          </div>

          {/* Telefone */}
          <div className="flex items-center space-x-4">
            <div className="bg-primary-500 p-4 rounded-full">
              <FaPhone className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Phone</p>
              <p className="text-gray-900 dark:text-white font-semibold">+55 (11) 98765-4321</p>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300">
            <FaYoutube className="text-2xl" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300">
            <FaDribbble className="text-2xl" />
          </a>
        </div>

        {/* Formulário de Contato */}
        <form className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-gray-600 dark:text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
                placeholder="Your Name"
              />
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="block text-gray-600 dark:text-gray-400 mb-2">Email</label>
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
            <label htmlFor="subject" className="block text-gray-600 dark:text-gray-400 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
              placeholder="Subject"
            />
          </div>

          {/* Mensagem */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-gray-600 dark:text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
              placeholder="Your message..."
            />
          </div>

          {/* Botão de Envio */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 hover:bg-primary-600 transition-all duration-300 shadow-md"
            >
              <span>Send Message</span>
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}