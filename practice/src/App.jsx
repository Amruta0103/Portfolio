// import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Info from './components/Info';
import Footer from './components/Footer';
import ProjectCards from './components/ProjectCards';

function App() {
  const AppBox = styled.div`
  background: var(--brown);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `
  const MainBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  `
  return (
    <AppBox className="App">
      <MainBoxInfo >
        <HeadLine />
        <Info />
      </MainBoxInfo>
      <ProjectCards/>
      <Footer />
    </AppBox>
  );
}

export default App;
