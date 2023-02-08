// import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Info from './components/Info';
import Header from './components/Header';
import ProjectCards from './components/ProjectCards';
// import Footer from './components/Footer';

function App() {
  const AppBox = styled.div`
  background: var(--brown);
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  display: flex;
  justify-content: space-between;
  `
  const MainBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  `
  return (
    <AppBox className="App">
      <Header />
      <MainBoxInfo >
        <HeadLine />
        <Info />
      </MainBoxInfo>
      <ProjectCards/>
      {/* <Footer /> */}
    </AppBox>
  );
}

export default App;
