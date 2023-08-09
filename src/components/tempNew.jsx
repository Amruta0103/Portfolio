import styled from "styled-components";

const TempNew = () => {
  return(
    <TempNewBox id="about">
        <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <AboutMeSub>
        <Msg>
          I am Amruta, a Front-end Developer.<br />
          I am passionate about exploring, learning new technologies and implementing them.<br/>
          Learning new languages, cultures, and all things "Science" makes me happy ☺️! < br />
          Let's connect to find more ways to make "Web" an awesome experience for users!
        </Msg>
      </AboutMeSub>
      <SubTitle>Front-End Developer</SubTitle>
    </TempNewBox>
  )
}

const TempNewBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 80vh;
position: relative;
`
const HeadLineTitle = styled.div`
margin: auto auto auto 3rem;
font-size: 3em;
color: ${props => props.theme.text};
font-family: 'Space Grotesk', sans-serif;
@media (max-width: 768px){
  margin: 1rem auto;
  font-size: 2em;
}
`
const SubTitle = styled.div`
font-size: 2.5em;
font-weight: 400;
font-family: 'Space Grotesk', sans-serif;
margin: auto 3rem auto auto;
@media (max-width: 768px){
  margin: 1rem auto;
  font-size: 1.5em;
}
`
const AboutMeSub = styled.div`
margin: 1rem auto;
`
const Msg = styled.div`
width: 60%;
font-weight: 100;
text-align: center;
padding: 1rem;
margin: auto;
border-radius: 1rem;
@media (max-width: 768px){
  font-size: 1em;
}
@media (min-width: 1080px){
  font-size: 1.3em;
}
`

export default TempNew;