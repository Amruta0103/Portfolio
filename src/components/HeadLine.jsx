import styled from "styled-components";
import image from "../assets/imgs.jpg";
// import Info from "./Info";

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineTitleBox>
      <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <SubTitle>Front-End Web Developer</SubTitle>
      {/* <Info /> */}
    </HeadLineTitleBox>
    <HeadLineImage src={image} alt={"tempimg"}/>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 8rem 5rem;
`
const HeadLineImage = styled.img`
height: 250px;
width: 250px;
margin: 2rem auto;
border-radius: 4rem;
border: 1px solid ${props=> props.theme.accentColor}
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