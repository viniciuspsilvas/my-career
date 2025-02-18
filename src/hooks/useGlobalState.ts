
import {
  isDrawerOpened,
  selectTheme,
  ThemeMode,
  toggleDrawer as toggle,  // TODO: observe tha names duplicating, (reducer and and dispatch function)
  toggleTheme,
} from "../redux/globalState";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const useTheme = () => {
  const theme = useAppSelector(selectTheme);

  const dispatch = useAppDispatch();

  const toggleSelectTheme = (_theme: ThemeMode) => {
    dispatch(toggleTheme(_theme));
  };

  return { theme, toggleSelectTheme };
};


export const useDrawerMode = () => {
  const drawerOpened = useAppSelector(isDrawerOpened);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggle());
  };

  return { drawerOpened, toggleDrawer };
};
