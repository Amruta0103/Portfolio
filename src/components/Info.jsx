import styled from "styled-components";

const Info = () => {
  const Info = styled.div`
  font-size:18px;
  margin: 1rem auto;
  color: var(--green);
  `
  const HoverBlock = styled.div`
  padding: 1rem;
  margin: auto;
  `
  
  const InfoText = styled.div`
  margin: auto;
  &:hover {
    cursor: default;
    text-decoration:underline;
  }
  `

  return(
    <Info>
      <HoverBlock>
        <InfoText>Hello, I am a web Developer.<br /> I love Coding web-pages that are convinient to use & beautiful to eyes.</InfoText>
      </HoverBlock>
    </Info>
  )
}

export default Info;