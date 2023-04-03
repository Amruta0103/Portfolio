import styled from "styled-components"
import { useState } from "react"
// import { ThemeProvider } from "styled-components";
// import { darkTheme, lightTheme} from '../theme';

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");
  // const isDarkTheme = theme === "dark" ;
  const toggleTheme = () => {
    setTheme(theme ? "light" : "dark")
    console.log("currentTheme is ",theme)
  }
  return(
  <ToggleThemeBox>
    <ToggleButton onClick={toggleTheme}>toggle</ToggleButton>
  </ToggleThemeBox>
    
  )
}

const ToggleThemeBox = styled.div`
display: flex;
width: 7rem;
height: 2rem;
border-radius: 2rem;
border: 1px solid black;
margin: 1rem;
justify-content:center;
align-items: center;
`
const ToggleButton = styled.button`
`

export default ToggleTheme;