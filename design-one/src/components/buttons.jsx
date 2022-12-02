import styled from "styled-components";

const Buttons = () => {
  const Button = styled.button`
  background : ${props => props.primary? "palevioletred" :"white"} ;
  color : ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.3em 1em;
  border: 2px solid palevioletred;
  border-radius: 1rem;
  `
  const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  `
  
  return(
    <div>
      <Button>Normal</Button>
      <Button primary>Colorful</Button>
      <TomatoButton>Tomatoess!!</TomatoButton>
    </div>
  )
}

export default Buttons;