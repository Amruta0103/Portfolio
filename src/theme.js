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
  accentColor:"rgb(142, 122, 155)",
}

export const lightTheme =  {
  text: "#121212",
  background:"#c9dbff",
  accentColor:"rgb(142, 122, 155)",
}

export default GlobalStyles;