import styled from "styled-components";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Temp>About Me <TempEmo>&#58;&#41;</TempEmo> </Temp>
      <AboutMeSub>
        <Msg>
          I am Amruta, a Front-end Developer.<br />
          I am passionate about exploring, learning new technologies and implementing them.<br/>
          Learning new languages, cultures, and all things "Science" makes me happy ☺️! < br />
          Let's connect to find more ways to make "Web" an awesome experience for users!
        </Msg>
      </AboutMeSub>
    </AboutMeBox>
  )
}

const AboutMeBox = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem auto 1rem auto;
font-size: 20px;
font-weight: 300;
`
const Temp = styled.div`
display:flex;
align-items:center;
font-size: xx-large;
font-family: 'Familjen Grotesk', sans-serif;
`
const TempEmo = styled.div`
margin: auto 0.9rem;
`
const AboutMeSub = styled.div`
margin: 4rem auto;
`
const Msg = styled.div`
width: 60%;
font-weight: 300;
text-align: center;
padding: 2rem 1rem;
margin: auto;
border-radius: 1rem;
box-shadow: 0 2px 7px 0 ${props => props.theme.reverse_backdrop};
`
export default AboutMe;