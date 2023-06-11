// import logo from './logo.svg';
import styled, {ThemeProvider} from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
// import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
// import ConnectLinks from './components/ConnectLinks';
import GlobalStyles, { darkTheme, lightTheme } from './theme';
import sun from "./assets/brightness.svg";
import moon from "./assets/moon.svg";
import { useState } from 'react';

function App() {
  const [isDarkTheme, setTheme ] = useState(false);
  console.log(isDarkTheme ? "hello" : "byebye");
  
  return (
    <AppBg>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <HeadersBox>
          <HeadersBoxSub>
            <Header />
            <ToggleButton onClick={()=> setTheme(isDarkTheme => !isDarkTheme)}>
              <ToggleImage src={isDarkTheme? moon : sun} />
            </ToggleButton>
          </HeadersBoxSub>
        </HeadersBox>
        <AppBox>
          <HeadLine />
          <ProjectCards/>
          <AboutMe /> 
          {/* <Footer />   */}
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
background: linear-gradient(
  130deg,
  hsl(279deg 40% 74%) 0%,
  hsl(302deg 38% 73%) 11%,
  hsl(321deg 54% 75%) 22%,
  hsl(334deg 70% 78%) 33%,
  hsl(344deg 85% 80%) 44%,
  hsl(353deg 98% 81%) 56%,
  hsl(3deg 100% 81%) 67%,
  hsl(11deg 100% 79%) 78%,
  hsl(19deg 100% 77%) 89%,
  hsl(25deg 95% 75%) 100%
);

`
const AppBox = styled.div`
position: relative;
height: 80%;
width: 85%;
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
align-items:center;
position: fixed;
z-index:2;
right: 0.5rem;
top: 0.5rem;
@media (max-width: 768px){
  right: 0.5rem;
  top: 0.5rem;
  transition: right 2s, top 2s;
}
`
const HeadersBoxSub = styled.div`
position: sticky;
display: flex;
justify-content: center;
align-items: center;
`
const ToggleButton = styled.button`
width: 2.5rem;
height: 2rem;
border-radius: 2rem;
border: 1px solid transparent;
background: transparent;
`
const ToggleImage = styled.img`
height: 23px;
width: 23px;
`

export default App;
