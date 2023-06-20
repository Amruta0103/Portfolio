import styled from "styled-components";

const Footer = () => {
  return(
    <FooterBox>
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
position: absolute;
bottom: 0rem;
`
const LastText = styled.div`
margin: 1rem auto;
font-size: 18px;
`
export default Footer;
