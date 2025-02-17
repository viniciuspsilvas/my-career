"use client";
import { useState, useEffect } from "react";

export default function HomePage() {

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // Evita renderização antes da reidratação
  }

  return (
    <main>
      <h1>Welcome to My Career Portfolio</h1>
      <p>Discover my skills, projects, and journey!</p>
    </main>
  );
}
