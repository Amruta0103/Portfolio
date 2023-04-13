// import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import GlobalStyles, { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import sun from "./assets/brightness.svg";
import moon from "./assets/moon-stars.svg";

function App() {
  const [isDarkTheme, setTheme] = useState(true);
  console.log("current theme",isDarkTheme)
  
  return (
    <AppBox>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* <SideBar /> */}
      <ToggleButton onClick={()=> setTheme(isDarkTheme => !isDarkTheme)}>
        <ToggleImage src={isDarkTheme? sun : moon} />
      </ToggleButton>
      <Header />
      <MainBoxInfo >
        <HeadLine />
      </MainBoxInfo>
      <ProjectCards/>
      <Footer />    
      </ThemeProvider>
    </AppBox>
  );
}

const AppBox = styled.div`
position: relative;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100%;
  text-align: center;
  font-family: 'Noto Serif JP', serif;
  font-family: 'Source Sans Pro', sans-serif;
`
const MainBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ToggleButton = styled.button`
z-index:1;
position: absolute;
margin: 0.5rem;
padding: 0.5rem;
width: 3rem;
height: 2rem;
border: 1px solid transparent;
border-radius: 2rem;
background: ${props => props.theme.text};
color: ${props => props.theme.background};
`
const ToggleImage = styled.img`
height: 15px;
width: 15px;
`

export default App;
