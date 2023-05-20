import styled from "styled-components";

const Footer = () => {
  return(
    <FooterBox id="connect">
      <FooterText>
      <a href="mailto:amydharap@gmail.com">Drop Hi! </a>    
      </FooterText>
    </FooterBox>
  )
}

const FooterBox = styled.div`
display: flex;
color: ${props=>props.theme.text};
height: 4rem;
width: 100%;
position: absolute;
bottom:0;
right: 0;
`
const FooterText = styled.div`
text-align: center;
padding: 1rem auto;
margin: auto;
`
export default Footer;
