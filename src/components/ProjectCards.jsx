import styled from "styled-components";

const ProjectCards = () => {
return(
  <ProjectCardsBox id="projects">
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
border: 2px solid ${props => props.theme.accentColor};
cursor:pointer;
border-radius: 1rem;
&:hover{
  border: 2px solid ${props => props.theme.background};
}
`
export default ProjectCards;