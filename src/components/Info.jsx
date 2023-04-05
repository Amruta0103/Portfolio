import styled from "styled-components";

const Info = () => {
  return(
    <InfoBox>
      <HoverBlock>
        <InfoText>Hello, I am a web Developer.<br /> I love Coding web-pages that are convinient to use & beautiful to eyes.</InfoText>
      </HoverBlock>
    </InfoBox>
  )
}

const InfoBox = styled.div`
  font-size: 20px;
  margin: 1rem auto;
  font-weight: 300;
  `
  const HoverBlock = styled.div`
  padding: 1rem;
  margin: auto;
  `
  
  const InfoText = styled.div`
  margin: auto;
  cursor: default;
  `

export default Info;
