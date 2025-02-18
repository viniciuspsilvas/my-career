'use client'

import { Text } from '@/src/components/global/text'
import { Routes } from '@/src/lib/routes'
import logoSymbol from '@/public/assets/symbol-logotype-hive-bookings-colors-white.png'
import logo from '@/public/assets/text-logotype-hive-bookings-colors-white.png'
import Image from 'next/image'
import Link from 'next/link'
import { FC, memo, useCallback, useEffect } from 'react'
import { useDrawerMode, useTheme } from '../hooks/useGlobalState'
import { motion, useAnimate, stagger } from 'framer-motion'
import { isEqual } from 'lodash'
import { usePathname } from 'next/navigation'
import { ThemeMode } from '../redux/globalState'

const containerVariants = {
  initial: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 200, when: 'beforeChildren' } }
}

export type NavBarProps = object

const ItemMenu: React.FC<{ pathname: string; label: string; passHref?: boolean; target?: string }> = memo(
  ({ pathname, label, passHref = false, target = '_self' }) => {
    const { toggleDrawer, drawerOpened } = useDrawerMode()
    const currentPath = usePathname()

    const closeMenu = () => {
      if (drawerOpened) {
        toggleDrawer()
      }
    }

    return (
      <motion.li style={{ originX: 0 }} whileHover={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 0.6, repeatType: 'loop' } }}>
        <Link href={pathname} className="flex items-center" onClick={closeMenu} passHref={passHref} target={target}>
          <Text className={`block py-4 md:py-2 pl-3 pr-4 ${isEqual(currentPath, pathname) ? 'text-primary-500 dark:text-primary-00' : 'text-white dark:text-black'} uppercase hover:underline hover:text-primary hover:underline-offset-4 transition-all duration-300 ease-in-out`}>
            {label}
          </Text>
        </Link>
      </motion.li>
    )
  }
)

ItemMenu.displayName = 'ItemMenu'

const themeOptions: ThemeMode[] = ["light", "dark", "system"];

export const NavBar: FC<NavBarProps> = () => {
  const { toggleDrawer, drawerOpened } = useDrawerMode()
  const {theme, toggleSelectTheme} = useTheme();

  const toggleSelectThemeHandler = () => {
    const currentIndex = themeOptions.indexOf(theme);
    const nextTheme = themeOptions[(currentIndex + 1) % themeOptions.length];
    toggleSelectTheme(nextTheme)
  };


  const [scope, animate] = useAnimate()

  const animateList = useCallback(() => {
    animate('li', { opacity: [0, 1], x: ['100vw', '0vw'] }, { delay: stagger(0.3), duration: 2, type: 'spring' })
  }, [])

  useEffect(() => {
    animateList()
  }, [animateList])

  return (
    <>
      <motion.nav className="border-gray-200 bg-black dark:bg-white-30 shadow-md z-50" variants={containerVariants} initial="initial" animate="show">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image width={150} priority src={logo} alt="Hive Bookings logo" className="hidden md:block mx-auto my-1" />
            <Image width={50} priority src={logoSymbol} alt="Hive Bookings logo" className="block md:hidden mx-auto my-1" />
          </Link>

          {/* Botão Hamburguer Mobile */}
          <button onClick={toggleDrawer} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Itens do Menu */}
          <div className={`${drawerOpened ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg">
            <ul ref={scope} className="flex flex-col font-medium mt-4 md:flex-row md:space-x-8 md:mt-0">
              <ItemMenu label="Home" pathname={Routes.root} />
              <ItemMenu label="Blog" pathname={Routes.blog} />
              <ItemMenu label="Portfolio" pathname={Routes.portfolio} />
              <ItemMenu label="Contact" pathname={Routes.contact} />
            </ul>
          </div>

          {/* Dark Mode Toggle Button */}
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleSelectThemeHandler}
          className="p-2 ml-4 text-gray-400 hover:text-yellow-500 transition-all"
        >
          {theme === "light" ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M17.293 13.293a8 8 0 01-10.586 0 1 1 0 011.414-1.414 6 6 0 008.172 0 1 1 0 011.414 1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : theme === "dark" ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.95 3.05a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM18 10a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zm-3.05 4.95a1 1 0 00-1.414 0l-1.414 1.414a1 1 0 101.414 1.414l1.414-1.414a1 1 0 000-1.414zM10 18a1 1 0 01-1-1v-2a1 1 0 112 0v2a1 1 0 01-1 1zm-4.95-3.05a1 1 0 000 1.414l1.414 1.414a1 1 0 001.414-1.414L6.464 14.95a1 1 0 00-1.414 0zM4 10a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm3.05-4.95a1 1 0 000 1.414L5.636 7.879a1 1 0 11-1.414-1.414L5.636 4.05a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
        </div>
      </motion.nav>
    </>
  )
}