import './App.css';
import styled from 'styled-components'
function App() {
  const MainDiv = styled.div`
  backgroundColor: "grey";
  `;
  const Button = styled.button`
  background:${props => props.primary ? "lightblue": "white"};
  color:${props => props.primary ? "white" : "lightblue"};
  font-size: 2em;
  `
  return (
    <div className='App'>
      <MainDiv>
      <Button primary>Normal</Button>
      </MainDiv>
    </div>
  );
}

export default App;
