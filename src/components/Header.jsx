import styled from "styled-components";
// import envelope from "../logo/envelope-solid.svg";
import linkedin from "../logo/linkedin.svg";
import github from "../logo/square-github.svg";
import resume from "../logo/user-solid.svg";
// ⚛️ this is a temp logo, change it later!!

const Header = () => {
  const Header = styled.div`
  position: relative;
  top: 0rem;
  right: 0rem;
  color: white;
  font-size: 15px;
  width: 100%;
  padding: auto;
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
  display:flex;
  align-items:center;
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
  const Logo = styled.img`
  height: 15px;
  width: 15px;
  border: 2px solid transparent;
  margin: 5px;
  `
  const A = styled.a`
  font-size inherit;
  text-decoration: none;
  color: inherit;
  `
  return(
    <Header>
      <OptionsList>
        <A target="_blank" href="https://www.linkedin.com/in/amruta-d-4366341b8/">
          <Options>LinkedIn <Logo alt={linkedin} src={linkedin}/></Options>
        </A>
        <A target="_blank" href="https://github.com/Amruta0103">
          <Options>GitHub <Logo alt={github} src={github} /></Options>
        </A>
        <A target="_blank" href="">
          <Options>Resumé <Logo alt={resume} src={resume} /></Options>
        </A>
        {/* <A target="_blank" href="mailto:amydharap@gmail.com">
          <Options>Let's Connect  <Logo alt={envelope} src={envelope}/> </Options>
        </A> */}
      </OptionsList>
    </Header>
  )
}

export default Header;
