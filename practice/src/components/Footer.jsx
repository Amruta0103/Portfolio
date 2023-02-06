import styled from "styled-components";
// ⚛️ this is a temp logo, change it later!!

const Footer = () => {
  const Footer = styled.div`
  bottom: 0rem;
  right: 0rem;
  color: white;
  font-size: 16px;
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 0rem;
  text-align: right;
  `
  const OptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: auto 0rem auto auto;
  padding: 0em;
  `
  const Options = styled.li`
  padding: 0.5em;
  list-style:none;
  border-radius: 2rem;
  margin: 0.5rem;
  cursor: pointer;

  &:hover{
    background: var(--yellow);
    color: var(--brown);
  }
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
