import styled from "styled-components";
import image from "../assets/undraw_dev.svg";
// import Info from "./Info";

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineTitleBox>
      <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <SubTitle>Web Developer</SubTitle>
      {/* <Info /> */}
    </HeadLineTitleBox>
    <HeadLineImage src={image} alt={"tempimg"}/>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 7rem;
height: 20rem;
`
const HeadLineImage = styled.img`
height: 250px;
width: 250px;
padding: 1.5rem;
margin: 2rem auto;
border-radius: 9rem;
border: 1px solid transparent;
background:${props => props.theme.text};

`
const HeadLineTitleBox = styled.div`
margin: auto;
`
const HeadLineTitle = styled.div`
margin: auto;
font-size: 60px;
font-weight: 300;
color: ${props => props.theme.text}
`
const SubTitle = styled.div`
font-size: 16px;
font-weight: 300;
`

export default HeadLine