'use client'

import { Routes } from '@/src/lib/routes'
import Link from 'next/link'
import { FC, memo, useCallback, useEffect } from 'react'
import { useDrawerMode } from '../hooks/useGlobalState'
import { motion, useAnimate, stagger } from 'framer-motion'
import { FaBriefcase, FaEnvelopeOpen, FaHome, FaUser } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import dynamic from 'next/dynamic';

const ThemeToggleButton = dynamic(() => import('./ThemeToggleButton'), { ssr: false });


const containerVariants = {
  initial: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 200, when: 'beforeChildren' } }
}

export type NavBarProps = object

const ItemMenu: React.FC<{ 
  pathname: string; 
  label: string; 
  icon: React.ReactNode; 
  passHref?: boolean; 
  target?: string; 
}> = memo(({ pathname, label, icon, passHref = false, target = '_self' }) => {
  const { toggleDrawer, drawerOpened } = useDrawerMode();
  const currentPath = usePathname()

  const closeMenu = () => {
    if (drawerOpened) {
      toggleDrawer();
    }
  };

  return (
    <motion.li 
      initial={{ width: 48, height: 48 }} // Começa como um círculo
      whileHover={{ width: "auto" }} // Expande no hover
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative flex items-center hover:bg-primary-700 bg-black-200 hover:bg-opacity-90 bg-opacity-90 rounded-full overflow-hidden"
    >
      <Link 
        href={pathname} 
        onClick={closeMenu} 
        passHref={passHref} 
        target={target} 
        className="flex items-center"
      >
        <span className={`w-[48px] h-[48px] flex items-center justify-center  ${currentPath === pathname ? 'text-primary-500' : 'text-white'}`}>
          {icon}
        </span>

        <span className="text-white uppercase pr-4">
          {label}
        </span>
      </Link>
    </motion.li>
  );
});
ItemMenu.displayName = 'ItemMenu'

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
};

const MobileMenuItem = ({ pathname, label, icon }: { pathname: string; label: string; icon: React.ReactNode }) => {
  const { toggleDrawer } = useDrawerMode();
  const currentPath = usePathname();

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-white text-lg uppercase py-4 border-b border-gray-700 w-full text-center"
    >
      <Link href={pathname} onClick={toggleDrawer} className={`flex items-center gap-6 ${currentPath === pathname ? 'text-primary-500' : 'text-white'}`}>
        {icon}
        {label}
      </Link>
    </motion.li>
  );
};

const MobileMenu = () => {
  const { drawerOpened, toggleDrawer } = useDrawerMode();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center z-50  px-12"
      variants={menuVariants}
      initial="hidden"
      animate={drawerOpened ? 'visible' : 'hidden'}
      exit="exit"
    >
      <button
        onClick={toggleDrawer}
        className="absolute top-6 right-8 text-white text-3xl"
      >
        &times;
      </button>
      <ul className="w-full text-center">
        <MobileMenuItem label="Home" pathname={Routes.root} icon={<FaHome />} />
        <MobileMenuItem label="Blog" pathname={Routes.blog} icon={<FaUser />} />
        <MobileMenuItem label="Portfolio" pathname={Routes.portfolio} icon={<FaBriefcase />} />
        <MobileMenuItem label="Contact" pathname={Routes.contact} icon={<FaEnvelopeOpen />} />
      </ul>
    </motion.div>
  );
};

export const NavBar: FC<NavBarProps> = () => {
  const { toggleDrawer } = useDrawerMode()
  const [scope, animate] = useAnimate()

  const animateList = useCallback(() => {
    animate('li', { opacity: [0, 1], x: ['100vw', '0vw'] }, { delay: stagger(0.3), duration: 2, type: 'spring' })
  }, [])

  useEffect(() => {
    animateList()
  }, [animateList])

  return (
    <>
      {/* Botão de Toggle para o Menu Mobile */}
      <motion.nav className="" variants={containerVariants} initial="initial" animate="show">
        <button 
          onClick={toggleDrawer} 
          type="button" 
          className="border-gray-200 bg-black dark:bg-black-200 shadow-md z-50 fixed right-2 top-2 inline-flex items-center p-2 m-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" 
          aria-controls="navbar-solid-bg" 
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </motion.nav>

      {/* Botão de Toggle para o Tema */}
      <div className="fixed right-0 top-0 p-4">
        <ThemeToggleButton />
      </div>

      {/* Itens do Menu - Só aparecerá em md:mode */}
      <div className={`hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 p-4 w-48`} id="navbar-solid-bg">
        <ul ref={scope} className="flex flex-col font-medium space-y-4 items-end">
          <ItemMenu label="Home" pathname={Routes.root} icon={<FaHome />} />
          <ItemMenu label="Blog" pathname={Routes.blog} icon={<FaUser />} />
          <ItemMenu label="Portfolio" pathname={Routes.portfolio} icon={<FaBriefcase />} />
          <ItemMenu label="Contact" pathname={Routes.contact} icon={<FaEnvelopeOpen />} />
        </ul>
      </div>


      <MobileMenu />
    </>
  )
}