import styled from "styled-components";
// import linkedin from "../assets/linkedin.svg";
// import github from "../assets/square-github.svg";
// import resume from "../assets/file-arrow-down-solid.svg";
// import pdf from "../assets/AmrutaDharap.pdf";
import projects from "../assets/diagram-project.svg";
// import at from "../assets/at.svg";
import profile from "../assets/user-solid.svg";

const Header = () => {
  return(
    <HeaderBoxMain>
      <HeaderBox>
        {/* <GlobalStyles /> */}
        <OptionsList>
          <A href="#projects">
            <Options>Projects <Logo alt="projects" src={projects}/></Options>
          </A>
          <A href="#aboutme">
            <Options>About <Logo alt="about" src={profile}/></Options>
          </A>
          {/* <A href="#connect">
            <Options>Connect <Logo alt="connect" src={at}/></Options>
          </A> */}
          {/* <A target="_blank" href="https://www.linkedin.com/in/amruta-d-4366341b8/">
            <Options>LinkedIn <Logo alt={linkedin} src={linkedin}/></Options>
          </A>
          <A target="_blank" href="https://github.com/Amruta0103">
            <Options>GitHub <Logo alt={github} src={github} /></Options>
          </A>
          <A target="_blank" href={pdf} download>
            <Options>Resumé <Logo alt={resume} src={resume} /></Options>
          </A> */}
          {/* <A target="_blank">
            <Options>Profile <Logo alt="temp"></Logo></Options>
          </A> */}
        </OptionsList>
      </HeaderBox>
    </HeaderBoxMain>
  )
}

const HeaderBoxMain = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  background: rgba(142, 122, 155, 0.8);
  box-shadow: 0px 1px 10px 0.5px;
`
const HeaderBox = styled.div`
  position: sticky;
  top: 0rem;
  right: 0rem;
  font-size: 15px;
  width: inherit;
  padding: auto;
  margin: 0rem;
  text-align: right;
`
const OptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: auto 5rem auto auto;
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
  border: 1px solid transparent;

  &:hover{
    background: ${props => props.theme.accentColor};
    color: ${props =>props.theme.text};
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

  // const DropDownOption = styled.div`
  // display: flex;
  // align-items:center;
  // padding: 0.5em;
  // list-style:none;
  // border-radius: 2rem;
  // margin: 0.5rem;
  // `

//   const ToggleButton = styled.button`
//   z-index:1;
//   position: absolute;
//   right: 1rem;
//   margin: 1rem;
//   padding: 0.5rem;
//   width: 2.5rem;
//   height: 2rem;
//   border: 1px solid transparent;
//   border-radius: 2rem;
//   background: ${props => props.theme.text};
//   color: ${props => props.theme.background};
// `
// const ToggleImage = styled.img`
//   height: 15px;
//   width: 15px;
// `
export default Header;
