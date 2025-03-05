import { ReactNode } from "react";

interface SessionProps {
  children: ReactNode;
  className?: string;
}

export default function Session({ children, className = "" }: SessionProps) {
  return (
    <section
      className={`bg-white dark:bg-gray-900 min-h-screen p-8 flex justify-center ${className}`}
    >
      <div className="w-full max-w-6xl mx-auto sm:py-12 sm:mx-14 md:mx-16 ">
        {children}
      </div>
    </section>
  );
}
