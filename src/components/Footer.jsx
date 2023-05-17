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
height: 50px;
width: inherit;
position: relative;
bottom: 0;
left: 0;
`
const FooterText = styled.div`
text-align: center;
padding: 1rem auto;
margin: auto;
`
export default Footer;
