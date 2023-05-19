import styled from "styled-components";
import ticTac from "../assets/tictactimeImg.png";
import link from "../assets/link-alt.svg";

const ProjectCards = () => {
return(
  <ProjectCardsBox id="projects">
    {/* <Card/> */}
    {/* <Card /> */}
    <FlipCardBox>
      <FlipCard>
        <CardFront>
          <CardImg src={ticTac}/>
        </CardFront>
        <CardBack>
          <ProjectLinks target="_blank" href="https://tictactime.netlify.app/">Live Project Link <Logo alt={"link"} src={link}/> </ProjectLinks>
          <ProjectLinks target="_blank" href="https://github.com/Amruta0103/tictactime">GitHub Link <Logo alt={"link"} src={link}/> </ProjectLinks>
        </CardBack>
      </FlipCard>
    </FlipCardBox>
  </ProjectCardsBox>
)
}

const FlipCard = styled.div`
position: relative;
width:100%;
height:100%;
border-radius: 1rem;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`
const FlipCardBox = styled.div`
height: 200px;
width:350px;
border-radius: 1rem;
perspective: 1000px;
&:hover ${FlipCard}{
transform: rotateY(180deg);
}
`
const CardFront = styled.div`
position: absolute;
border: 2px solid ${props => props.theme.accentColor};
cursor:pointer;
border-radius: 1rem;
height:100%;
width: 100%;
color: black;
backface-visibility: hidden;
`
const CardBack = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
position: absolute;
border: 2px solid transparent;
border-radius: 1rem;
height: 100%;
width: 100%;
background-color: ${props => props.theme.accentColor};
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
const CardImg = styled.img`
height: 200px;
width: 350px;
border-radius: 1rem;
`
const ProjectLinks = styled.a`
display: flex;
align-items: center;
color: white;
font-size: 20px;
text-decoration: underline;
text-decoration-color: white;
text-decoration-thickness: 1px;
cursor:pointer;
margin: 1rem auto;
`
const Logo = styled.img`
height: 15px;
width: 15px;
border: 2px solid transparent;
margin: 5px;
`
export default ProjectCards;