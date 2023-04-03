import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  `
export const darkTheme = {
  // cornblue: "#6495ed",
  // lightgrey: "#a9a9a9",
  background: "#121212",
}

export const lightTheme =  {
  background:"#90ee90",
}

export default GlobalStyles;