import { ReactNode } from "react";

interface SessionProps {
  children: ReactNode;
  className?: string;
}

export default function Session({ children, className = "" }: SessionProps) {
  return (
    <section className={`bg-white dark:bg-gray-900 min-h-screen p-8 ${className}`}>
      <div className="max-w-6xl mx-auto py-12">
        {children}
      </div>
    </section>
  );
}