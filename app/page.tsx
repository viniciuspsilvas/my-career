"use client"
import { useTheme } from "@/src/context/ThemeContext";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      <h1>Welcome to My Career Portfolio</h1>
      <p>Discover my skills, projects, and journey!</p>

      <div>
        <p>
          The current theme is {theme}
        </p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </main>
  );
}
