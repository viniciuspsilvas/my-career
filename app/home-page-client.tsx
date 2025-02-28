"use client";

import Image from "next/image";
import { useState, useEffect, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GradientButton from "@/src/components/gradient-button";
import { useResolvedTheme } from "@/src/hooks/useResolvedTheme";

const About = lazy(() => import("@/app/about/page"));
// const Blog = lazy(() => import("@/app/blog/page"));
const Contact = lazy(() => import("@/app/contact/page"));
const Portfolio = lazy(() => import("@/app/portfolio/page"));
const Tools = lazy(() => import("@/app/tools/page"));

const sections = [
  { id: "about", Component: About },
  { id: "portfolio", Component: Portfolio },
  { id: "contact", Component: Contact },
  { id: "tools", Component: Tools },
  // { id: "blog", Component: Blog }
];

export default function HomePage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const theme = useResolvedTheme();

  useEffect(() => {
    setIsHydrated(true);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isHydrated) {
    return null;
  }

  const backgroundStyle =
    theme === "dark"
      ? {
          backgroundImage: "linear-gradient(270deg, #1a1a1a, #354a60, #1a1a1a)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite"
        }
      : {
          backgroundImage: "linear-gradient(270deg, #f0f4f8, #a8aeb5, #f0f4f8)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite"
        };

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16 relative overflow-hidden"
        style={backgroundStyle}
      >
        <style jsx>{`
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>

        {/* Coluna da Foto */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="md:w-1/3 w-2/3 flex justify-center items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="rounded-full md:rounded-2xl overflow-hidden shadow-[0px_0px_10px_4px_#808080]"
          >
            <Image
              src={
                isMobile ? "/images/my-photo.jpg" : "/images/my-photo-big.jpg"
              }
              alt="Vinicius Silva"
              width={isMobile ? 224 : 300}
              height={isMobile ? 224 : 400}
              priority
              className={`w-40 h-40 md:w-56 md:h-full 2xl:w-72 2xl:h-auto rounded-lg object-cover ${
                isMobile ? "rounded-full" : ""
              }`}
            />
          </motion.div>
        </motion.div>

        {/* Coluna do Texto */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="md:w-2/3 text-center md:text-left mt-6 md:mt-0 pr-6 "
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold dark:text-gray-200 text-gray-800"
          >
            Hey, I&apos;m Vinicius Silva 👋
          </motion.h1>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-base sm:text-xl md:text-2xl text-primary-600 font-semibold mt-4 sm:mt-2"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-4 text-sm sm:text-lg md:text-xl leading-relaxed dark:text-gray-300 text-gray-600 "
          >
            With over 10 years of experience in web development, I’m a
            frontend-focused full-stack developer who loves turning complex
            problems into simple, intuitive solutions. My passion lies in
            crafting sleek, responsive user interfaces that provide seamless
            digital experiences. While I have full-stack capabilities, my
            expertise shines in building engaging and high-performance
            frontends. Let’s create something amazing together!
          </motion.p>

          <GradientButton />
        </motion.div>
      </div>

      {isMobile &&
        sections.map(({ id, Component }) => (
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center">
                Loading...
              </div>
            }
            key={id}
          >
            <Component />
          </Suspense>
        ))}

      {isMobile && showScrollButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 border border-primary-600 text-primary rounded-full shadow-lg hover:border-primary-700 transition-colors"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </>
  );
}
