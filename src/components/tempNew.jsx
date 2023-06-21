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
width: 100%;
`
const HeadLineTitle = styled.div`
margin: auto auto auto 3rem;
font-size: 3.5rem;
color: ${props => props.theme.text};
font-family: 'Space Grotesk', sans-serif;
`
const SubTitle = styled.div`
font-size: 27px;
font-weight: 400;
font-family: 'Space Grotesk', sans-serif;
margin: auto 3rem auto auto;
`
const AboutMeSub = styled.div`
margin: 1rem auto;
`
const Msg = styled.div`
width: 60%;
font-size: 18px;
font-weight: 100;
text-align: center;
padding: 2rem 1rem;
margin: auto;
border-radius: 1rem;
`

export default TempNew;