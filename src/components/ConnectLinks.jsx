import styled from "styled-components"
import linkedin from "../assets/linkedin.svg";
import github from "../assets/square-github.svg";
import resume from "../assets/file-arrow-down-solid.svg";
import pdf from "../assets/AmrutaDharap.pdf";
import mail from "../assets/envelope-solid.svg";
// import Footer from "./Footer";


const ConnectLinks = () => {
  return(
    <ConnectLinksBox id="connect">
      <ConnectInfo>
        Let's Catch up, collaborate and explore more ways to make web an awesome place!  
      </ConnectInfo>
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
      <FooterBox>
      <LastText>
        Made with ⁠<span style={{strokeWidth:'2'}}>♡</span> by Amruta Dharap
      </LastText>
    </FooterBox>
    </ConnectLinksBox>
  )
}

const ConnectLinksBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
position: relative;
`
const ConnectInfo = styled.div`
margin: 1rem auto;
font-weight: 300;
width: 50%;
`
const LinksBlock = styled.div`
font-size: 20px;
font-weight: 300;
margin: 1rem auto;
`
const Links = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
max-width: 50%;
margin: auto;
`
const Logo = styled.img`
height: 25px;
width: 25px;
margin: 0.5rem;
padding: 0.5rem;
border-radius: 1rem;
@media (min-height: 900px){
  height: 2.5rem;
  width: 2.5rem;
}
`
const A = styled.a`
font-size inherit;
text-decoration: none;
color: inherit;
`
const FooterBox = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: 0rem;
@media (max-width: 768px){
  width: 80%;
}
`
const LastText = styled.div`
margin: 1rem auto;
font-size: 18px;
`
export default ConnectLinks;