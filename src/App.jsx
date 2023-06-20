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
          {/* <HeadLine /> */}
          {/* <AboutMe />  */}
          <ProjectCards/>
          <ConnectLinks />
          {/* <Footer /> */}
        </AppBox>
      </ThemeProvider>
    </AppBg>
  );
}


const AppBg = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 100vh;
text-align: center;
font-family: 'Josefin Sans', sans-serif;
background-image: linear-gradient(
  130deg,
  hsl(224deg 24% 57%) 0%,
  hsl(217deg 28% 58%) 10%,
  hsl(211deg 30% 58%) 19%,
  hsl(207deg 32% 59%) 30%,
  hsl(203deg 34% 60%) 40%,
  hsl(199deg 34% 61%) 51%,
  hsl(196deg 34% 62%) 61%,
  hsl(192deg 33% 64%) 71%,
  hsl(188deg 32% 65%) 81%,
  hsl(184deg 30% 67%) 91%,
  hsl(179deg 28% 69%) 100%
);
// background-image: linear-gradient(
//   120deg,
//   hsl(276deg 43% 46%) 0%,
//   hsl(249deg 41% 54%) 11%,
//   hsl(225deg 50% 54%) 22%,
//   hsl(212deg 58% 50%) 33%,
//   hsl(204deg 66% 48%) 44%,
//   hsl(199deg 60% 49%) 56%,
//   hsl(196deg 50% 52%) 67%,
//   hsl(192deg 41% 57%) 78%,
//   hsl(186deg 31% 61%) 89%,
//   hsl(178deg 22% 66%) 100%
// );
// background-image: linear-gradient(
//   120deg,
//   hsl(159deg 68% 35%) 0%,
//   hsl(156deg 56% 41%) 11%,
//   hsl(154deg 48% 46%) 22%,
//   hsl(153deg 43% 50%) 33%,
//   hsl(151deg 47% 55%) 44%,
//   hsl(149deg 51% 59%) 56%,
//   hsl(147deg 57% 64%) 67%,
//   hsl(146deg 65% 69%) 78%,
//   hsl(144deg 75% 73%) 89%,
//   hsl(142deg 89% 78%) 100%
// );
// background: linear-gradient(
//   130deg,
//   hsl(279deg 40% 74%) 0%,
//   hsl(302deg 38% 73%) 11%,
//   hsl(321deg 54% 75%) 22%,
//   hsl(334deg 70% 78%) 33%,
//   hsl(344deg 85% 80%) 44%,
//   hsl(353deg 98% 81%) 56%,
//   hsl(3deg 100% 81%) 67%,
//   hsl(11deg 100% 79%) 78%,
//   hsl(19deg 100% 77%) 89%,
//   hsl(25deg 95% 75%) 100%
// );

`
const AppBox = styled.div`
position: relative;
height: 80%;
width: 75%;
margin: auto;
padding: 0px;
overflow: auto;
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

export default App;
