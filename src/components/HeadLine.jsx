import styled from "styled-components";
import image from "../assets/imgs.jpg";

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineImage src={image}/>
    <HeadLineTitle>Amruta Dharap</HeadLineTitle>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
flex-direction: column;
`
const HeadLineImage = styled.img`
height: 300px;
width: 300px;
margin: 2rem auto;
border-radius: 4rem;
`
const HeadLineTitle = styled.div`
font-size: 60px;
font-weight: 300;
color: ${props => props.theme.text}
`

export default HeadLine