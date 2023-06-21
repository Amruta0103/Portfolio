import styled from "styled-components";
// import ticTac from "../assets/tictactimeImg.png";
// import link from "../assets/link-alt.svg";
import projectList from "../data/data";

const ProjectCards = () => {
return(
  <Projects id="projects">
    <ProjectsTitle>Projects</ProjectsTitle>
    <ProjectCardsBox>
      {projectList.map((i)=>{
        return(
        <FlipCardBox key={i.title}>
          <FlipCard>
            <CardFront>
              <CardImg src={i.image}/>
            </CardFront>
            <CardBack>
              <ProjectLinks target="_blank" href={i.liveLink}>Live Project Link </ProjectLinks>
              <ProjectLinks target="_blank" href={i.gitLink}>GitHub Link </ProjectLinks>
            </CardBack>
          </FlipCard>
        </FlipCardBox>
        )
      })}
    </ProjectCardsBox>
  </Projects>
)
}

const Projects = styled.div`
width: inherit;
min-height: 95%;
margin: auto;
padding: 1rem;
`
const ProjectsTitle = styled.div`
font-size: 40px;
font-weight: 300;
margin: auto;
`
const ProjectCardsBox = styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-wrap: wrap;
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
height: 180px;
width: 250px;
border-radius: 1rem;
z-index: 0;
perspective: 1000px;
margin: 2rem;
&:hover ${FlipCard}{
transform: rotateY(180deg);
}
@media (max-width: 768px){
  width: 250px;
  height: 150px;
  transform: width 3s, height 3s;
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
height: inherit;
width: inherit;
border-radius: 1rem;
box-shadow: 0 1px 5px 0 ${props => props.theme.reverse_backdrop};
`
const ProjectLinks = styled.a`
display: flex;
align-items: center;
color: ${props => props.theme.text};
font-size: 1rem;
text-decoration: underline;
cursor:pointer;
margin: 1rem auto;
`
// const Logo = styled.img`
// height: 15px;
// width: 15px;
// border: 2px solid transparent;
// margin: 5px;
// `
export default ProjectCards;