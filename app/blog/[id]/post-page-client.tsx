"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import Session from "@/src/components/global/session";
import Loading from "@/src/components/global/loading";
import ErrorMessage from "@/src/components/global/error-message";
import Link from "next/link"; 
import { FaArrowLeft } from "react-icons/fa"; 
import { useBlogPostById } from "@/src/hooks/useBlogPosts";

interface PostPageClientProps {
  id: string;
}

export default function PostPageClient({ id }: PostPageClientProps) {
  const {
    data: post,
    isLoading,
    error,
  } = useBlogPostById(id); 

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Error loading post." />;
  }

  if (!post) {
    return <ErrorMessage message="Post not found." />;
  }

  return (
    <Session>
      {/* Botão Voltar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Blog</span>
        </Link>
      </motion.div>

      <AnimatedTitleSection
        backTitle="BLOG"
        mainTitle={<>{post.title}</>}
        supportText={`Published by ${post.author} on ${
          post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unknown date"
        }`}
      />

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
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          /> */}

          {/* Conteúdo do Post */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Session>
  );
}