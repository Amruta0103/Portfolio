import styled from "styled-components";
// import image from "../assets/imgs.jpg";

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineTitleBox>
      <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <SubTitle>Front-End Web Developer</SubTitle>
    </HeadLineTitleBox>
    <HeadLineImage alt={"tempimg"}/>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: auto 5rem;
`
const HeadLineImage = styled.img`
height: 300px;
width: 300px;
margin: 2rem auto;
border-radius: 4rem;
border: 1px solid ${props=> props.theme.text}
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