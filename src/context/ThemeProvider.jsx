import { useState, useContext, createContext } from "react";
import GlobalStyles from '../theme';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [isDarkTheme, setTheme] = useState(false);
  return(
    <ThemeContext.Provider value={{isDarkTheme, setTheme}}>
      {children}
      <GlobalStyles />
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}