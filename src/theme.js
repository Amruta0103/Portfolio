import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  `
export const darkTheme = {
  text: "#c9dbff",
  background: "#121212",
  accentColor:"#9db7ff",
}

export const lightTheme =  {
  accentColor: "#9db7ff",
  text: "#121212",
  background:"#c9dbff",
}

export default GlobalStyles;