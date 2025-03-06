"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Session from "@/src/components/global/session";
import Loading from "@/src/components/global/loading";
import ErrorMessage from "@/src/components/global/error-message";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useBlogPostById, useUpdateBlogPost } from "@/src/hooks/useBlogPosts";
import { Text } from "@/src/components/global/text";
import MarkdownEditor from "@/src/components/MarkdownEditor";

interface EditPostPageProps {
  id?: string;
}

export default function EditPostPage({ id = "" }: EditPostPageProps) {

  const { data: post, isLoading, error } = useBlogPostById(id);
  const { mutate: updatePost, isPending: isUpdating } = useUpdateBlogPost();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("**hello** world");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setCoverImage(post.coverImage);
      setTags(post.tags);
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPost = {
      title,
      content,
      coverImage,
      tags
    };

    updatePost(
      { id, ...updatedPost },
      {
        onSuccess: () => {
          alert("Post updated successfully!");
        },
        onError: () => {
          alert("Failed to update post.");
        }
      }
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Error loading post." />;
  }

  if (id && !post) {
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
          {id ? "Edit" : "New"} Post
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="coverImage"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Cover Image URL
              </label>
              <input
                type="text"
                id="coverImage"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Content
              </label>
              <MarkdownEditor
                defaultValue={content}
                onChange={setContent}
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                value={tags.join(", ")}
                onChange={(e) => setTags(e.target.value.split(", "))}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isUpdating}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                {isUpdating ? "Updating..." : "Update Post"}
              </button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </Session>
  );
}
