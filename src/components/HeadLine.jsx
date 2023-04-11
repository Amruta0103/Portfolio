import styled from "styled-components";
import image from "../assets/imgs.jpg";
import Info from '../components/Info';

const HeadLine = () => {
return(
  <HeadLineBox>
    <HeadLineTitleBox>
      <HeadLineTitle>Amruta Dharap</HeadLineTitle>
      <Info />
    </HeadLineTitleBox>
    <HeadLineImage src={image}/>
  </HeadLineBox>
)
}

const HeadLineBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const HeadLineImage = styled.img`
height: 300px;
width: 300px;
margin: 2rem auto;
border-radius: 4rem;
`
const HeadLineTitleBox = styled.div`
margin: auto;
`
const HeadLineTitle = styled.div`
margin: 1rem auto;
font-size: 60px;
font-weight: 300;
color: ${props => props.theme.text}
`

export default HeadLine