// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: lightgreen`;
  const Wrapper = styled.section`
  padding: 3em;
  background: green`;
  return (
    <div className="App">
      <Wrapper>
        <Title>
          Hello Everyone!!
        </Title>
      </Wrapper>
    </div>
  );
}

export default App;
