import styled from "styled-components";

const ProjectCards = () => {
const ProjectCards = styled.div`
width: auto;
height: 15rem;
justify-content: center;
display: flex;
margin: 1rem auto;
`
const Card = styled.div`
margin: 3rem 1rem;
height: 100px;
width: 200px;
border: 3px solid black;
border-radius: 2rem;
cursor:pointer;

&:hover{
  border: 3px solid var(--yellow);
}
`
return(
  <ProjectCards>
    <Card/>
    <Card />
    <Card />
  </ProjectCards>
)
}

export default ProjectCards;