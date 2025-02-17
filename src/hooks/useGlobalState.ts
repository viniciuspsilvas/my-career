
import { isDarkMode, isDrawerOpened, 
  toggleDrawer as toggle,  // TODO Check a better way to name it, 
  toggleDarkMode as toggleDark } from "../redux/globalState"; // TODO: observe tha names duplicating, (reducer and and dispatch function)
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const useDarkMode = () => {
  const darkMode = useAppSelector(isDarkMode);

  const dispatch = useAppDispatch();

  const toggleDarkMode = () => {
    dispatch(toggleDark());
  };

  return { darkMode, toggleDarkMode };
};


export const useDrawerMode = () => {
  const drawerOpened = useAppSelector(isDrawerOpened);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggle());
  };

  return { drawerOpened, toggleDrawer };
};
