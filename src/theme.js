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
  accentColor:"#cba0d5",
  backdrop: "rgba(0,0,0,0.7)",
  reverse_backdrop:"rgba(255,255,255,0.3)",
}

export const lightTheme =  {
  text: "#1a1a1a",
  background:"#fff6e3",
  accentColor:"#45b482",
  backdrop: "rgba(255, 255, 255, 0.5)",
  reverse_backdrop: "rgba(0,0,0,0.7)",
}

export default GlobalStyles;