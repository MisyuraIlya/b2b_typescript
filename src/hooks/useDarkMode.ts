import { useTypedSelector } from "./useTypedSelector";

export const useDarkMode = () => useTypedSelector((state => state.darkMode))