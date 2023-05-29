import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  `
export const darkTheme = {
  text: "#f2f3f4",
  background: "#2d2d30",
  accentColor:"#9a8aa6",
}

export const lightTheme =  {
  text: "#1a1a1a",
  background:"#fff6e3",
  accentColor:"#9a8aa6",
}

export default GlobalStyles;