import styled from "styled-components";

const ProjectCards = () => {
return(
  <ProjectCardsBox>
    <Card/>
    <Card />
    <Card />
  </ProjectCardsBox>
)
}

const ProjectCardsBox = styled.div`
width: auto;
justify-content: center;
display: flex;
margin: 1rem auto;
`
const Card = styled.div`
margin: 1rem;
height: 200px;
width: 200px;
border: 2px solid ${props => props.theme.background};
border-radius: 2rem;
cursor:pointer;

&:hover{
  border: 2px solid ${props => props.theme.accentColor};
}
`
export default ProjectCards;