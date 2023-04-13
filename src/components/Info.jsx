import styled from "styled-components";

const Info = () => {
  return(
    <InfoBox>
      <HoverBlock>
        <InfoText>I love Coding web-pages that are convinient to use & beautiful to eyes.</InfoText>
      </HoverBlock>
    </InfoBox>
  )
}

const InfoBox = styled.div`
  font-size: 16px;
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

// I love Coding web-pages that are convinient to use & beautiful to eyes.
