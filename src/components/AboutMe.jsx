import styled from "styled-components";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Msg>
        <MsgTitle>Hello!!</MsgTitle>
        I am Amruta, an aspiring Web Developer.<br/>
        I like creating web elements, that are efficient and simple to use.
        <StackTitle>My Tech Stack</StackTitle>
      </Msg>
      
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
const StackTitle = styled.div`
font-size: 20px;
font-weight: 300;
margin: 1rem auto;
`
export default AboutMe;