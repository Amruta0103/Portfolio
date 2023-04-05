import styled from "styled-components";

const HeadLine = () => {
return(
  <HeadLineBox>Amruta Dharap</HeadLineBox>
)
}

const HeadLineBox = styled.div`
margin: 1rem;
font-size: 60px;
font-weight: 300;
color: ${props => props.theme.text}
`

export default HeadLine