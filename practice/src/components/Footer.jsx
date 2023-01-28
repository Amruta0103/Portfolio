import styled from "styled-components";
// ⚛️ this is a temp logo, change it later!!

const Footer = () => {
  const Footer = styled.div`
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  color: white;
  font-size: 1em;
  width: 100%;
  padding: 1rem;
  margin: auto;
  text-align: right;
  `
  const OptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: auto 1rem auto auto;
  padding: 0em;
  `
  const Options = styled.li`
  padding: 0.5em 1em;
  list-style:none;
  `
  return(
    <Footer>
      <OptionsList>
        <Options>LinkedIn ⚛️</Options>
        <Options>GitHub ⚛️</Options>
        <Options>Resumé ⚛️</Options>
        <Options>Let's Connect ⚛️</Options>
      </OptionsList>
    </Footer>
  )
}

export default Footer;
