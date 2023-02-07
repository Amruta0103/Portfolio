import styled from "styled-components";

const ProjectCards = () => {
const ProjectCards = styled.div`
width: auto;
height: 15rem;
justify-content: center;
display: flex;
margin: 0.9rem auto;
`
const Card = styled.div`
height: 230px;
width: 200px;
border: 1px solid var(--yellow);
border-radius: 2rem;
margin: auto 1rem;
cursor:pointer;

&:hover{
  background: var(--yellow);
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