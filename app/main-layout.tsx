"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavBar } from "../src/components/nav-bar";
// import Footer from "../src/components/Footer";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname} // Atualiza animação ao mudar de rota
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {/* <Footer /> */}
    </div>
  );
}
