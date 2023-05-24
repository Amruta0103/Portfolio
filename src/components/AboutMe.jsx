import styled from "styled-components";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/square-github.svg";
import resume from "../assets/file-arrow-down-solid.svg";
import pdf from "../assets/AmrutaDharap.pdf";
import mail from "../assets/envelope-solid.svg";

const AboutMe = () => {
  return(
    <AboutMeBox id="aboutme">
      <Msg>
        Hey there!! I am Amruta, a Front-end Developer.<br />
        I am passionate about exploring, learning new technologies and implementing them.<br/>
        Learning new languages, cultures, and all things "Science" makes me happy.
      </Msg>
      <div>Let's connect to find more ways to make "Web" an awesome experience for users!</div>
      <LinksBox>
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
      </LinksBox>
      <LastText>Made with ❤ by Amruta Dharap</LastText>
    </AboutMeBox>
  )
}

const AboutMeBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 50vh;
width: 100%;
margin: 3rem auto;
font-size: 20px;
font-weight: 300;
`
const Msg = styled.div`
width: 30%;
text-align: center;
padding: 1rem;
border-radius: 2rem ;
`
const LinksBox = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: auto;
`
const Logo = styled.img`
height: 15px;
width: 15px;
background: ${props => props.theme.accentColor};
margin: 1rem;
padding: 1rem;
border-radius: 1rem;
`
const A = styled.a`
font-size inherit;
text-decoration: none;
color: inherit;
`
const LastText = styled.div`
margin: auto;
font-size: 18px;
color: ${props => props.theme.text};
`
export default AboutMe;