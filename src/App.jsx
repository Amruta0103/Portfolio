// import logo from './logo.svg';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import GlobalStyles, { darkTheme, lightTheme } from './theme';
import { useTheme } from './context/ThemeProvider';
import sun from "./assets/brightness.svg";
import moon from "./assets/moon-stars.svg";
import { useState } from 'react';

function App() {
  const [isDarkTheme, setTheme ] = useState(true);
  // console.log(setTheme(true));
  console.log(isDarkTheme ? "hello" : "byebye");
  
  return (
    <AppBox>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ToggleButtonBox>
          <ToggleButton onClick={()=> setTheme(isDarkTheme => !isDarkTheme)}>
            <ToggleImage src={isDarkTheme? sun : moon} />
          </ToggleButton>
        </ToggleButtonBox>
      {/* <SideBar /> */}
      <Header />
      <MainBoxInfo >
        <HeadLine />
      </MainBoxInfo>
      <AboutMe />
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
gap: 5rem;
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
const ToggleButtonBox = styled.div`
z-index:1;
position: absolute;
right: 1rem;
margin: 1rem;
padding: 0.5rem;
`
const ToggleButton = styled.button`
position: sticky;
width: 2.5rem;
height: 2rem;
border: 1px solid transparent;
border-radius: 2rem;
background: ${props => props.theme.text};
`
const ToggleImage = styled.img`
height: 15px;
width: 15px;
`

export default App;
