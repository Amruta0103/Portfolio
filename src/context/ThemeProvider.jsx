import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const {isDarkTheme , setTheme} = useState(true);
  return(
    <ThemeContext.Provider value={{isDarkTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme (){
  return useContext(ThemeContext);
}