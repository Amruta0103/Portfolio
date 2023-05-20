import styled from "styled-components"
// import x from "../assets/x-solid.svg";

const ConnectLinks = () => {
  return(
    <ConnectLinksBox>
      <LinkBox />
      <LinkBox />
      <LinkBox />
    </ConnectLinksBox>
  )
}

const ConnectLinksBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`
const LinkBox = styled.div`
height: 10rem;
width: 15rem;
margin: auto 1rem;
border: 1px solid black;
border-radius: 1rem;
`
export default ConnectLinks;