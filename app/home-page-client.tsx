"use client";

import Image from "next/image";
import { useState, useEffect, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GradientButton from "@/src/components/gradient-button";

const About = lazy(() => import("@/app/about/page"));
const Blog = lazy(() => import("@/app/blog/page"));
const Contact = lazy(() => import("@/app/contact/page"));
const Portfolio = lazy(() => import("@/app/portfolio/page"));
const Tools = lazy(() => import("@/app/tools/page"));

const sections = [
  { id: "about", Component: About },
  { id: "portfolio", Component: Portfolio },
  { id: "contact", Component: Contact },
  { id: "tools", Component: Tools },
  { id: "blog", Component: Blog }
];

export default function HomePage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(
    () => {
      setIsHydrated(true);
      if (inView) {
        controls.start("visible");
      }
    },
    [controls, inView]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16 relative overflow-hidden"
        style={{
          // TODO: Cores mais claras caso nao seja dark mode
          background: "linear-gradient(270deg, #1a1a1a, #354a60, #1a1a1a)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite"
        }}
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
              src={isMobile ? "/images/my-photo.jpg" : "/images/my-photo-big.jpg"}
              alt="Vinicius Silva"
              width={isMobile ? 224 : 300}
              height={isMobile ? 224 : 400}
              priority
              className={`w-40 h-40 md:w-56 md:h-full 2xl:w-72 2xl:h-auto rounded-lg object-cover ${isMobile
                ? "rounded-full"
                : ""}`}
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
          className="md:w-2/3 text-center md:text-left mt-6 md:mt-0"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl md:text-5xl font-bold dark:text-gray-200 text-black-200"
          >
            I&apos;m Vinicius Silva
          </motion.h1>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-xl md:text-2xl text-primary-600 font-semibold mt-2"
          >
            Web Designer & Developer
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-4 text-lg md:text-xl leading-relaxed"
          >
            I&apos;m a web designer & front‑end developer focused on crafting
            clean & user‑friendly experiences. I am passionate about building
            excellent software that improves the lives of those around me.
          </motion.p>

          <GradientButton />
        </motion.div>
        </div>

        {isMobile &&
          sections.map(({ id, Component }) =>
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
            // TODO adicionar botao pra voltar ao topo da pagina
            // TODO trigar as animation quando o usuario chegar na secao
          )}
    </>
  );
}
