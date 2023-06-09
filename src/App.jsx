// import logo from './logo.svg';
import styled, {ThemeProvider} from 'styled-components';
import './App.css';
// import HeadLine from './components/HeadLine';
// import Header from './components/Header';
// import ProjectCards from './components/ProjectCards';
// import Footer from './components/Footer';
// import AboutMe from './components/AboutMe';
// import ConnectLinks from './components/ConnectLinks';
import GlobalStyles, { darkTheme, lightTheme } from './theme';
import sun from "./assets/brightness.svg";
import moon from "./assets/moon.svg";
import { useState } from 'react';
// import Footer from './components/Footer';

function App() {
  const [isDarkTheme, setTheme ] = useState(true);
  console.log(isDarkTheme ? "hello" : "byebye");
  
  return (
    <AppBox>
      <AppBg><h1>Helloww</h1></AppBg>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ToggleButtonBox>
          <ToggleButton onClick={()=> setTheme(isDarkTheme => !isDarkTheme)}>
            <ToggleImage src={isDarkTheme? moon : sun} />
          </ToggleButton>
        </ToggleButtonBox>
      {/* <Header /> */}
      {/* <MainBoxInfo > */}
        {/* <HeadLine /> */}
      {/* </MainBoxInfo> */}
      {/* <ProjectCards/> */}
      {/* <AboutMe />  */}
      {/* <Footer />   */}
      </ThemeProvider>
    </AppBox>
  );
}


const AppBox = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 100vh;
text-align: center;
font-family: 'Josefin Sans', sans-serif;
@media (max-width: 768px){
  width: auto;
  overflow: hidden;
}
`
const AppBg = styled.div`
height: 85%;
width: 90%;
margin: auto;
border-radius: 3rem;
border: 1px solid ${props => props.theme.text}; 
background: ${props => props.theme.background};
`
// const MainBoxInfo = styled.div`
// display: flex;
// flex-direction: column;
// `
const ToggleButtonBox = styled.div`
display: flex;
justify-content: center;
align-items:center;
position: fixed;
z-index:2;
right: 1rem;
top: 1rem;
`
const ToggleButton = styled.button`
position: sticky;
width: 2.5rem;
height: 2rem;
border: 1.5px solid transparent;
border-radius: 2rem;
background: transparent;
`
const ToggleImage = styled.img`
height: 23px;
width: 23px;
`

export default App;
