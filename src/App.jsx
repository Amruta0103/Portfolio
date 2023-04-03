// import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Info from './components/Info';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
import ToggleTheme from './components/ToggleTheme';
// import GlobalStyles from './theme';
// import { theme,darkTheme, lightTheme} from './theme';
// import Footer from './components/Footer';

function App() {
  const AppBox = styled.div`
  background: var(--lightgreen);
  max-height: 100%;
  flex-direction: column;
  gap: 2.5rem;
  display: flex;
  justify-content: space-between;
  `
  const MainBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  `
  return (
    <AppBox className="App">
      {/* <ThemeProvider theme={theme ? darkTheme : lightTheme}> */}
        <>
          {/* <GlobalStyles /> */}
          <ToggleTheme />
          <Header />
          <MainBoxInfo >
            <HeadLine />
            <Info />
          </MainBoxInfo>
          <ProjectCards/>
          {/* <Footer /> */}
        </>
      {/* </ThemeProvider> */}
    </AppBox>
  );
}

export default App;
