import styled from "styled-components";
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
            <Options><OptionTitle>Projects</OptionTitle> <Logo alt="projects" src={projects}/></Options>
          </A>
          <A href="#aboutme">
            <Options><OptionTitle>About</OptionTitle> <Logo alt="about" src={profile}/></Options>
          </A>
        </OptionsList>
      </HeaderBox>
    </HeaderBoxMain>
  )
}

const HeaderBoxMain = styled.div`
  position: fixed;
  z-index:1;
  width: 100%;
  height: 4rem;
  background: rgb(142, 122, 155);
  box-shadow: 0px 1px 10px 0.5px;
`
const HeaderBox = styled.div`
  font-size: 16px;
  font-weight: 300;
  width: inherit;
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
const OptionTitle = styled.div`
  @media (max-width: 400px) {
    transition: display 3s;
    display: none;
  }
`
const Logo = styled.img`
  height: 15px;
  width: 15px;
  border: 2px solid transparent;
  margin: 5px;
  @media (max-width: 400px) {
    transition: width 1s, height 1s;
    height: 20px;
    width: 20px;
  }
`
const A = styled.a`
  font-size inherit;
  text-decoration: none;
  color: inherit;
`

export default Header;
