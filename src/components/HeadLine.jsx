import styled from "styled-components";
import image from "../assets/undraw_dev.svg";
import css from "../assets/icons8-css.svg";
import html from "../assets/icons8-html.svg"
import js from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import nodejs from "../assets/icons8-nodejs.svg";
import mongo from "../assets/mongodb.svg";

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineTitleBox>
      <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <SubTitle>Front-End Developer</SubTitle>
      <MyStack>
        <Logo alt="css" src={css} />
        <Logo alt="html" src={html} />
        <Logo alt="js" src={js} />
        <Logo alt="react" src={react} />
        <Logo alt="nodejs" src={nodejs} />
        <Logo alt="mongo" src={mongo}/>
      </MyStack>
    </HeadLineTitleBox>
    <HeadLineImage src={image} alt={"tempimg"}/>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 100%;
margin: 2rem auto;
`
const HeadLineImage = styled.img`
height: 250px;
width: 250px;
padding: 1.5rem;
margin: auto;
border-radius: 9rem;
border: 1px solid transparent;
background: ${props => props.theme.backdrop};
@media (max-width: 768px){
  padding: 0.5rem;
  transition: padding 2s;
}
`
const HeadLineTitleBox = styled.div`
margin: auto;
`
const HeadLineTitle = styled.div`
margin: auto;
font-size: 60px;
color: ${props => props.theme.text};
font-family: 'Familjen Grotesk', sans-serif;
`
const SubTitle = styled.div`
font-size: 20px;
font-weight: 300;
`
const MyStack = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 1rem auto;
border: 2px solid ${props => props.theme.accentColor};
border-radius: 1rem;
background: ${props => props.theme.accentColor};
@media (max-width: 768px){
  margin: 1rem auto;
  transition: margin 1s;
}
`
const Logo = styled.img`
height: 2rem;
width: 2rem;
border: 2px solid transparent;
margin: 5px;
@media (max-width: 768px){
  transition: width 2s, height 2s;
  height: 1.4rem;
  width: 1.4rem;
  margin: 3px;
}
`

export default HeadLine