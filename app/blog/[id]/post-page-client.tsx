"use client";

import { motion, AnimatePresence } from "framer-motion";
import Session from "@/src/components/global/session";
import Loading from "@/src/components/global/loading";
import ErrorMessage from "@/src/components/global/error-message";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useBlogPostById } from "@/src/hooks/useBlogPosts";
import { Text } from "@/src/components/global/text";
import { getHumanReadableDateFormat } from "@/src/lib/date";
import Tags from "@/src/components/global/tags";
import Image from "next/image";
import MarkdownContent from "@/src/components/MarkdownContent";

interface PostPageClientProps {
  id: string;
}

export default function PostPageClient({ id }: PostPageClientProps) {
  const { data: post, isLoading, error } = useBlogPostById(id);

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

      <div className="flex flex-col items-center gap-2 md:gap-4 ">
        <Text category="h1" className="text-center">
          {post.title}
        </Text>
        <Text category="small" status="basic" className="text-center">
          <span className="hidden md:inline">Written </span>
          by {post.author} about{" "}
          {post.publishedAt
            ? getHumanReadableDateFormat(post.publishedAt)
            : "Unknown date"}
        </Text>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={500}
                height={100}
                className="w-full h-48 object-cover rounded mb-6"
              />
          )}
          {/* Conteúdo do Post */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >
            <MarkdownContent content={post.content} />
          </motion.div>

          {/* Tags */}
          <Tags tags={post.tags} />
        </motion.div>
      </AnimatePresence>
    </Session>
  );
}
