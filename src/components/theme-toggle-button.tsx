"use client";
import { useTheme } from '../hooks/useGlobalState';
import { FaMoon, FaLaptop } from 'react-icons/fa';
import { TbSunHigh } from 'react-icons/tb';
import { ThemeMode } from '../redux/globalState';

const themeOptions: ThemeMode[] = ["light", "dark", "system"];

const ThemeToggleButton = () => {
  const { theme, toggleSelectTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = themeOptions[(themeOptions.indexOf(theme) + 1) % themeOptions.length];
    toggleSelectTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-400 hover:text-tertiary-500 transition-all bg-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 dark:bg-black-200 rounded-full p-4 ml-4 mt-16 md:mt-0"
    >
      {theme === "light" ? (
        <FaMoon />
      ) : theme === "dark" ? (
        <TbSunHigh className='text-yellow-500' />
      ) : (
        <FaLaptop />
      )}
    </button>
  );
};

export default ThemeToggleButton;