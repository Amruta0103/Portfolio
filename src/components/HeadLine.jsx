import styled from "styled-components";
import image from "../assets/undraw_dev.svg";
import css from "../assets/icons8-css.svg";
import html from "../assets/icons8-html.svg"
import js from "../assets/icons8-javascript.svg";
import react from "../assets/icons8-react.svg";
import nodejs from "../assets/icons8-nodejs.svg";

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineTitleBox>
      <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <SubTitle>Web Developer</SubTitle>
      <MyStack>
        <Logo alt="css" src={css} />
        <Logo alt="html" src={html} />
        <Logo alt="js" src={js} />
        <Logo alt="react" src={react} />
        <Logo alt="nodejs" src={nodejs} />
      </MyStack>
    </HeadLineTitleBox>
    <HeadLineImage src={image} alt={"tempimg"}/>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
const HeadLineImage = styled.img`
height: 250px;
width: 250px;
padding: 1.5rem;
margin: auto auto auto 2rem;
border-radius: 9rem;
border: 1px solid transparent;
background:${props => props.theme.text};

`
const HeadLineTitleBox = styled.div`
margin: auto 2rem auto auto;
`
const HeadLineTitle = styled.div`
margin: auto;
font-size: 60px;
font-weight: 300;
color: ${props => props.theme.text}
`
const SubTitle = styled.div`
font-size: 20px;
font-weight: 300;
`
const MyStack = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 1rem auto;
border: 2px solid ${props => props.theme.accentColor};
border-radius: 4rem;
background: ${props => props.theme.accentColor};
`
const Logo = styled.img`
height: 2rem;
width: 2rem;
border: 2px solid transparent;
margin: 5px;
`

export default HeadLine