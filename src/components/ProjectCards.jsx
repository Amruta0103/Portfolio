import styled from "styled-components";
// import ticTac from "../assets/tictactimeImg.png";
import link from "../assets/link-alt.svg";
import projectList from "../data/data";

const ProjectCards = () => {
return(
  <ProjectCardsBox id="projects">
    {projectList.map((i)=>{
      return(
      <FlipCardBox>
        <FlipCard>
          <CardFront>
            <CardImg src={i.image}/>
          </CardFront>
          <CardBack>
            <ProjectLinks target="_blank" href={i.liveLink}>Live Project Link <Logo alt={"link"} src={link}/> </ProjectLinks>
            <ProjectLinks target="_blank" href={i.gitLink}>GitHub Link <Logo alt={"link"} src={link}/> </ProjectLinks>
          </CardBack>
        </FlipCard>
      </FlipCardBox>
      )
    })}
  </ProjectCardsBox>
)
}

const ProjectCardsBox = styled.div`
width: auto;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
margin: 3rem auto 7rem;
`
const FlipCard = styled.div`
position: relative;
width:100%;
height:100%;
border-radius: 1rem;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
`
const FlipCardBox = styled.div`
position: relative;
height: 200px;
width: 300px;
border-radius: 1rem;
z-index: 0;
perspective: 1000px;
margin: 0 2rem;
&:hover ${FlipCard}{
transform: rotateY(180deg);
}
`
const CardFront = styled.div`
position: absolute;
border: 2px solid transparent;
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
const CardImg = styled.img`
height: 200px;
width: 300px;
border-radius: 1rem;
box-shadow: 0 2px 7px 0 ${props => props.theme.text};
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