import React, {FC, PropsWithChildren, useEffect} from 'react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useActions } from '@/hooks/useActions'
const DarkModeProvider: FC<PropsWithChildren> = ({children}) => {

    const dark = useDarkMode()
    // const {toggleMode} = useActions()
    useEffect(() => {
      console.log('render',dark.darkMode)
      if(dark.darkMode){
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },[dark])

    return (<>{children}</>)
}

export default DarkModeProvider;