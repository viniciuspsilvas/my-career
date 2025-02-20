"use client";

import { AnimatedTitleSection } from "@/src/components/global/animated-title-section";
import ErrorMessage from "@/src/components/global/error-message";
import Loading from "@/src/components/global/loading";
import Session from "@/src/components/global/session";
import { useBlogPosts } from "@/src/hooks/useBlogPosts";
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
        mainTitle={<>MY <span className="text-primary-500">BLOG</span></>}
        supportText="Read my latest blog articles!"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {data?.map((post, index) => (
           <Link key={index} href={`/blog/${post._id}`} passHref>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
           >
             {/* <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" /> */}
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
               {post.title}
             </h2>
             <p className="text-gray-600 dark:text-gray-400 mb-4">{post.content.substring(0, 100)}...</p>
             <p className="text-gray-500 dark:text-gray-300 text-sm">{post.publishedAt?.toString()}</p>
           </motion.div>
         </Link>
        ))}
      </div>


    </Session>
  );
}