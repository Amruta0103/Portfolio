import styled from "styled-components";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Msg>
        <Temp>Hello!!</Temp> &nbsp;&nbsp;&nbsp;I am Amruta, a Front-End Developer. I like creating web elements, that are efficient and easy to use.
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
font-family: 'Lato', sans-serif;
font-size: 20px;
font-weight: 300;
`
const Msg = styled.div`
width: 50%;
text-align: center;
padding: 1rem;
border-radius: 2rem ;
`
const Temp = styled.span`
font-size: 30px;
font-family: 'Source Sans Pro',sans-serif;
`
export default AboutMe;