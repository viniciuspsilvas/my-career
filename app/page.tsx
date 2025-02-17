"use client";
import { useDarkMode } from "@/src/hooks/useGlobalState";

export default function HomePage() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <main>
      <h1>Welcome to My Career Portfolio</h1>
      <p>Discover my skills, projects, and journey!</p>

      <div>
        <p>
          The current theme is {`darkMode: ${darkMode}`}
        </p>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
      </div>
    </main>
  );
}
