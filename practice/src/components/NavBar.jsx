import styled from "styled-components";
// ⚛️ this is a temp logo, change it later!!

const NavBar = () => {
  const NavBar = styled.div`
  color: white;
  font-size: 1em;
  padding: 0.5em 0.5em;
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
    <NavBar>
      <OptionsList>
        <Options>LinkedIn ⚛️</Options>
        <Options>GitHub ⚛️</Options>
        <Options>Resumé ⚛️</Options>
        <Options>Let's Connect ⚛️</Options>
      </OptionsList>
    </NavBar>
  )
}

export default NavBar;
