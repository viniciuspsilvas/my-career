import {  DialogTitle } from "@headlessui/react";
import { Text } from "./global/text";
import Modal from "./modal";

interface ModalProps {
  experience?: {
    title: string;
    company: string;
    year: string;
    description: string;
    link?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal = ({ experience, isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <DialogTitle
        as="h2"
        className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center"
      >
        {experience?.title}
      </DialogTitle>
        
        
      <Text category="p1" status="basic">
      <Text  status="basic">
      Company:
      </Text> {experience?.company}
      </Text>
    
      <Text category="small" status="basic">
        {experience?.year}
      </Text>

      <div
        className="text-gray-600 dark:text-gray-400 mt-4"
        dangerouslySetInnerHTML={{ __html: experience?.description || "" }}
      />

      {experience?.link &&
        
        <>
        <span className="inline"></span>

        <Text category="small" status="basic">
        <a
          href={experience?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 underline mt-4 "
        >
          {experience?.link}
        </a>
        </Text>
        </>
        }

      <button
        onClick={onClose}
        className="mt-6 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 block"
      >
        Close
      </button>
    </Modal>
  );
};

export default ExperienceModal;
