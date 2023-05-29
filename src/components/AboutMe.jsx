import styled from "styled-components";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/square-github.svg";
import resume from "../assets/file-arrow-down-solid.svg";
import pdf from "../assets/AmrutaDharap.pdf";
import mail from "../assets/envelope-solid.svg";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <AboutMeSub>
        <Msg>
        Hey there!! I am Amruta, a Front-end Developer.<br />
          I am passionate about exploring, learning new technologies and implementing them.<br/>
          Learning new languages, cultures, and all things "Science" makes me happy.
        </Msg>
      </AboutMeSub>
      <LinksBlock>
          <LinksBlockLine>Let's connect to find more ways to make "Web" an awesome experience for users!</LinksBlockLine>
          <Links>
          <A target="_blank" href="mailto:amydharap@gmail.com">
            <Logo alt="mail" src={mail}/>
          </A>
          <A target="_blank" href="https://www.linkedin.com/in/amruta-d-4366341b8/">
            <Logo alt={linkedin} src={linkedin}/>
          </A>
          <A target="_blank" href="https://github.com/Amruta0103">
            <Logo alt={github} src={github} />
          </A>
          <A target="_blank" href={pdf} download>
            <Logo alt={resume} src={resume} />
          </A>
          </Links>
      </LinksBlock>
      <LastText>Made with ❤ by Amruta Dharap</LastText>
    </AboutMeBox>
  )
}

const AboutMeBox = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
margin: auto;
font-size: 20px;
font-weight: 300;
`
const AboutMeSub = styled.div`
margin: 7rem auto;
`
const Msg = styled.div`
width: 60%;
font-weight: 300;
text-align: center;
padding: 1rem;
margin: auto;
border-radius: 1rem;
box-shadow: 0 2px 7px 0 ${props => props.theme.text};
`
const LinksBlock = styled.div`
margin: 2rem auto;
font-size: 20px;
font-weight: 300;
`
const LinksBlockLine = styled.div`
font-weight: 300;
font-size: 20px;
`
const Links = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 50%;
margin: 0.5rem auto;
`
const Logo = styled.img`
height: 20px;
width: 20px;
background: ${props => props.theme.accentColor};
margin: 0.5rem;
padding: 0.5rem;
border-radius: 1rem;
`
const A = styled.a`
font-size inherit;
text-decoration: none;
color: inherit;
`
const LastText = styled.div`
position: absolute;
bottom:0;
margin: 1rem auto;
font-size: 18px;
color: ${props => props.theme.text};
`
export default AboutMe;