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
justify-content: center;
align-items: center;
height: 100%;
position: relative;
`
const HeadLineTitle = styled.div`
margin: auto auto auto 3rem;
font-size: 3.5rem;
color: ${props => props.theme.text};
font-family: 'Space Grotesk', sans-serif;
@media (max-width: 768px){
  margin: 1rem auto;
  font-size: 2.3rem;
}
`
const SubTitle = styled.div`
font-size: 2.5rem;
font-weight: 400;
font-family: 'Space Grotesk', sans-serif;
margin: auto 3rem auto auto;
@media (max-width: 768px){
  margin: 1rem auto;
  font-size: 2rem;
}
`
const AboutMeSub = styled.div`
margin: 1rem auto;
@media (max-width: 768px){
  margin: auto;
}
`
const Msg = styled.div`
width: 60%;
font-size: 1.5rem;
font-weight: 100;
text-align: center;
padding: 2rem 1rem;
margin: auto;
border-radius: 1rem;
@media (max-width: 550px){
  width: 100%;
  padding: 0rem;
}
`

export default TempNew;