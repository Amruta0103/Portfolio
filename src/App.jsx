// import logo from './logo.svg';
import styled, {ThemeProvider} from 'styled-components';
import './App.css';
// import HeadLine from './components/HeadLine';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
// import Footer from './components/Footer';
// import AboutMe from './components/AboutMe';
import GlobalStyles, { darkTheme, lightTheme } from './theme';
import sun from "./assets/brightness.svg";
import moon from "./assets/moon.svg";
import { useState } from 'react';
import TempNew from './components/tempNew';
import ConnectLinks from './components/ConnectLinks';

function App() {
  const [isDarkTheme, setTheme ] = useState(false);
  
  return (
    <AppBg>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <HeadersBox>
          <Header />
          <ToggleButton onClick={()=> setTheme(isDarkTheme => !isDarkTheme)}>
            <ToggleImage src={isDarkTheme? moon : sun} />
          </ToggleButton>
        </HeadersBox>
        <AppBox>
          <TempNew />
          <Hr />
          {/* <HeadLine /> */}
          {/* <AboutMe />  */}
          <ProjectCards/>
          <Hr />
          <ConnectLinks />
        </AppBox>
      </ThemeProvider>
    </AppBg>
  );
}


const AppBg = styled.div`
font-family: 'Space Grotesk', sans-serif;
position: relative;
display: flex;
justify-content: center;
height: 100vh;
text-align: center;
background-image: linear-gradient(
  120deg,
  hsl(159deg 68% 35%) 0%,
  hsl(156deg 56% 41%) 11%,
  hsl(154deg 48% 46%) 22%,
  hsl(153deg 43% 50%) 33%,
  hsl(151deg 47% 55%) 44%,
  hsl(149deg 51% 59%) 56%,
  hsl(147deg 57% 64%) 67%,
  hsl(146deg 65% 69%) 78%,
  hsl(144deg 75% 73%) 89%,
  hsl(142deg 89% 78%) 100%
);

`
const AppBox = styled.div`
position: relative;
height: 80%;
width: 75%;
margin: auto;
padding: 0px;
overflow: auto;
scroll-behavior: smooth;
backdrop-filter: blur(10px);
background-color: ${props => props.theme.backdrop};
border-radius: 3rem;
::-webkit-scrollbar {
  width: 0;
}
scrollbar-width: none;
`
const HeadersBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index:2;
right: 0.5rem;
top: 0.5rem;
@media (max-width: 768px){
  transition: right 2s, top 2s;
}
`
const ToggleButton = styled.button`
width: 2.5rem;
height: 2rem;
border-radius: 2rem;
border: 1px solid transparent;
background: transparent;
// position: fixed;
// z-index:3;
// top: 1rem;
// right: 1rem;
`
const ToggleImage = styled.img`
height: 23px;
width: 23px;
`
const Hr = styled.hr`
width: 50%;
opacity: 60%;
height: 1px;
margin: 2rem auto;
background-color:${props => props.theme.text};
`
export default App;
