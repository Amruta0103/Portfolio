import styled from "styled-components";
import one from "../assets/icons8-css.svg";
import twoa from "../assets/icons8-html1.svg"
import three from "../assets/icons8-javascript.svg";
import foura from "../assets/icons8-react.svg";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Msg>
        <MsgTitle>Hello!!</MsgTitle>
        I am Amruta, an aspiring Web Developer.<br/>
        I like creating web elements, that are efficient and simple to use.
        <StackTitle>My Tech Stack</StackTitle>
      </Msg>
      <MyStack>
        <Logo alt="one" src={one} />
        <Logo alt="twoa" src={twoa} />
        <Logo alt="three" src={three} />
        <Logo alt="foura" src={foura} />
      </MyStack>
    </AboutMeBox>
  )
}

const AboutMeBox = styled.div`
margin: auto;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 30vh;
width: 100%;
margin: 3rem auto;
`
const Msg = styled.div`
text-align: center;
width: 30%;
border: 2px solid ${props => props.theme.accentColor};
border-radius: 4rem;
`
const MsgTitle = styled.div`
font-size: 2rem;
font-weight: 300;
`
const MyStack = styled.div`
height: inherit;
width: 30%;
border: 2px solid ${props => props.theme.accentColor};
border-radius: 4rem;
background: ${props => props.theme.accentColor};
`
const StackTitle = styled.div`
font-size: 20px;
font-weight: 300;
margin: 1rem auto;
`
const Logo = styled.img`
height: 2rem;
width: 2rem;
border: 2px solid transparent;
margin: 5px;
fill: currentColor;
color: ${props => props.theme.text};
`
export default AboutMe;