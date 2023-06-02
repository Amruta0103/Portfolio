import styled from "styled-components";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/square-github.svg";
import resume from "../assets/file-arrow-down-solid.svg";
import pdf from "../assets/AmrutaDharap.pdf";
import mail from "../assets/envelope-solid.svg";

const Footer = () => {
  return(
    <FooterBox>
      <LinksBlock>
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
      <LastText>
        Made with ❤ by Amruta Dharap
      </LastText>
    </FooterBox>
  )
}

const FooterBox = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: ${props => props.theme.accentColor};
`
const LinksBlock = styled.div`
font-size: 20px;
font-weight: 300;
margin: auto;
`
const Links = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 50%;
margin: auto;
`
const Logo = styled.img`
height: 25px;
width: 25px;
margin: 1.5rem 1rem;
`
const A = styled.a`
font-size inherit;
text-decoration: none;
color: inherit;
`
const LastText = styled.div`
margin: 1rem auto;
font-size: 18px;
color: white;
`
export default Footer;
