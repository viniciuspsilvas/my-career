"use client";

import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import ErrorMessage from "@/src/components/global/error-message";
import Loading from "@/src/components/global/loading";
import Session from "@/src/components/global/session";
import { Text } from "@/src/components/global/text";
import { useBlogPosts } from "@/src/hooks/useBlogPosts";
import { getHumanReadableDateFormat } from "@/src/lib/date";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPageClient() {
  const { data, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Error loading personal infos." />;
  }

  return (
    <Session>
      <AnimatedTitleSection
        backTitle="BLOG"
        mainTitle={
          <>
            MY <span className="text-primary-500">BLOG</span>
          </>
        }
        supportText="Read my latest blog articles!"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {data?.map((post, index) => (
          <Link key={index} href={`/blog/${post._id}`} passHref>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" /> */}

              <div className="flex flex-col justify-between h-full gap-4">
                <Text
                  category="h2"
                  className="mb-4 line-clamp-2 sm:line-clamp-3 text-xl font-bold text-gray-900 dark:text-gray-100"
                >
                  {post.title}
                </Text>
                <Text
                  category="p1"
                  className="line-clamp-3 sm:line-clamp-5 text-gray-700 dark:text-gray-300"
                >
                  {post.content}
                </Text>
                <Text
                  category="small"
                  status="basic"
                  className="line-clamp-3 sm:line-clamp-5 text-gray-500 dark:text-gray-400"
                >
                  {post?.publishedAt &&
                    getHumanReadableDateFormat(post.publishedAt)}
                </Text>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </Session>
  );
}
