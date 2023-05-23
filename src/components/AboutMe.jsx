import styled from "styled-components";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Msg>
        <MsgTitle>Hello!!</MsgTitle>
        I am Amruta,<br/> a Front-End Developer.<br/>
        I like creating web elements, that are efficient and easy to use.
      </Msg>
    </AboutMeBox>
  )
}

const AboutMeBox = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 30vh;
width: 100%;
margin: 3rem auto;
font-size: 20px;
`
const Msg = styled.div`
text-align: center;
padding: 1rem;
border-radius: 2rem ;
`
const MsgTitle = styled.div`
font-size: 2rem;
font-weight: 300;
`
export default AboutMe;