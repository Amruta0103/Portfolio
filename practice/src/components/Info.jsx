import styled from "styled-components";

const Info = () => {
  const Info = styled.div`
  margin: 1rem auto;
  color: var(--green);
  `
  const HoverBlock = styled.div`
  width: 40%;
  margin: auto;
  &:hover {
    cursor: default;
    text-decoration: underline;
    text-decoration-color: var(--yellow);
  }
  `
  
  const InfoText = styled.div`
  margin: auto;
  `

  return(
    <Info>
      <HoverBlock>
        <InfoText>Hello, I am publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</InfoText>
      </HoverBlock>
    </Info>
  )
}

export default Info;