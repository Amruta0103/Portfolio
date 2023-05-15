import styled from "styled-components";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Msg>
        <MsgTitle>Hello There</MsgTitle>
      </Msg>
    </AboutMeBox>
  )
}

const AboutMeBox = styled.div`
margin: auto;
display: flex;
justify-content: center;
align-items: center;
height: 20rem;
width: 100%;
border: 1px solid black;
`
const Msg = styled.div``
const MsgTitle = styled.div`
font-size: 3rem;
font-weight: 300;
`
export default AboutMe;