import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  `
export const darkTheme = {
  text: "#f2f3f4",
  background: "#2d2d30",
  accentColor:"#8e7b9b",
}

export const lightTheme =  {
  text: "#121212",
  background:"#fff4dd",
  accentColor:"#8e7b9b",
}

export default GlobalStyles;