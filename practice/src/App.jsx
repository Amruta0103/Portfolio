// import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import HeadLine from './components/HeadLine';
import Info from './components/Info';
import NavBar from './components/NavBar';

function App() {
  const AppBox = styled.div`
  background: #ABC270;
  height: 100vh;
  `
  const MainBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  height: 70%;
  border: 1px solid red;
  `
  return (
    <AppBox className="App">
      <NavBar />
      <MainBoxInfo >
        <HeadLine />
        <Info />
      </MainBoxInfo>

    </AppBox>
  );
}

export default App;
