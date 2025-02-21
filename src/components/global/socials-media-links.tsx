import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialsMediaLinks = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex justify-center space-x-6 mb-12"
    >
      {[
        {
          icon: <FaLinkedin className="text-2xl" />,
          link: "https://www.linkedin.com/in/viniciuspsilvas"
        },
        {
          icon: <FaGithub className="text-2xl" />,
          link: "https://github.com/viniciuspsilvas"
        },
        {
          icon: <FaTwitter className="text-2xl" />,
          link: "https://x.com/viniciuspsilvas"
        }
      ].map((social, index) => (
        <a
          key={index}
          href={social.link}
          className={` hover:text-primary-500 transition-all duration-300   ${
            className ?? "text-gray-600 dark:text-gray-400"
          }`}
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialsMediaLinks;
