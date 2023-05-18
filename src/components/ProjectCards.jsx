import styled from "styled-components";

const ProjectCards = () => {
return(
  <ProjectCardsBox id="projects">
    <Card/>
    {/* <Card/> */}
    {/* <Card /> */}
    <FlipCardBox>
      <FlipCard>
        <CardFront>This is front</CardFront>
        <CardBack>This is card back</CardBack>
      </FlipCard>
    </FlipCardBox>
  </ProjectCardsBox>
)
}

const FlipCardBox = styled.div`
height: 200px;
width:350px;
perspective: 1000px;
`
const FlipCard = styled.div`
position: relative;
width:100%;
height:100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transform: rotateY(180deg);
`
const CardFront = styled.div`
background-color: #bbb;
color: black;
backface-visibility: hidden;
`
const CardBack = styled.div`
background-color: #2980b9;
color: white;
transform: rotateY(180deg);
backface-visibility: hidden;
`
const ProjectCardsBox = styled.div`
width: auto;
height: 100vh;
justify-content: center;
align-items: center;
display: flex;
`
const Card = styled.div`
margin: 1rem;
height: 200px;
width: 350px;
border: 2px solid ${props => props.theme.accentColor};
cursor:pointer;
border-radius: 1rem;
&:hover{

}
`
export default ProjectCards;