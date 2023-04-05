// import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Info from './components/Info';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
import GlobalStyles, { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

function App() {
  const [isDarkTheme, setTheme] = useState(false);
  console.log("current theme",isDarkTheme)
  
  return (
    <AppBox>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
        <ToggleButton onClick={()=> setTheme(isDarkTheme => !isDarkTheme)}>toggle</ToggleButton>
      <Header />
      <MainBoxInfo >
        <HeadLine />
        <Info />
      </MainBoxInfo>
      <ProjectCards/>    
      </ThemeProvider>
    </AppBox>
  );
}

const AppBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  max-width: 100%;
  text-align: center;
  font-family: 'Noto Serif JP', serif;
  font-family: 'Source Sans Pro', sans-serif;
`
const MainBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
`
// const ToggleThemeBox = styled.div`
// display: flex;
// width: 5rem;
// height: 2rem;
// border-radius: 2rem;
// border: 1px solid black;
// margin: 1rem;
// justify-content:center;
// align-items: center;
// `
const ToggleButton = styled.button`
width: 5rem;
background: ${props => props.theme.text};
color: ${props => props.theme.background};
`

export default App;
