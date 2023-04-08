import styled from "styled-components"
import x from "../assets/x-solid.svg";

const SideBar = () => {
  return(
    <SideBarBox>
      <SideBarClose src={x}></SideBarClose>
    </SideBarBox>
  )
}

const SideBarBox = styled.div`
position: absolute;
width: 25%;
height: 100vh;
padding: 2rem auto;
border: 1px solid black;
z-index: 2;
background: ${props => props.theme.text};
color: ${props => props.theme.text};
text-align: left;
`
const SideBarClose = styled.img`
height: 20px;
width: fit-content;
margin: 1rem;
padding: 0.5rem;
border-radius: 0.5rem;
background: ${props=> props.theme.background}
`
export default SideBar;