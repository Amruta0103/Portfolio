import styled from "styled-components";
// import projects from "../assets/diagram-project.svg";
// import at from "../assets/at.svg";
// import profile from "../assets/user-solid.svg";

const Header = () => {
  return(
    <HeaderBoxMain>
      <HeaderBox>
        <OptionsList>
        <A href="#about">
            <Options><OptionTitle>About</OptionTitle> 
              {/* <Logo alt="projects" src={projects}/> */}
            </Options>
          </A>
          <A href="#projects">
            <Options><OptionTitle>Projects</OptionTitle> 
              {/* <Logo alt="projects" src={projects}/> */}
            </Options>
          </A>
          <A href="#connect">
            <Options><OptionTitle>Connect</OptionTitle>
              {/* <Logo alt="about" src={profile}/> */}
            </Options>
          </A>
        </OptionsList>
      </HeaderBox>
    </HeaderBoxMain>
  )
}

const HeaderBoxMain = styled.div`
position: sticky;
width: 100%;
`
const HeaderBox = styled.div`
font-size: 16px;
font-weight: 300;
width: inherit;
margin: 0rem;
text-align: center;
color: ${props =>props.theme.background};
`
const OptionsList = styled.ul`
display: flex;
flex-direction: row;
width: fit-content;
margin: auto;
padding: 0em;
@media (max-width: 768px){
  flex-direction: column;
}
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
  text-decoration: underline;
}
`
const OptionTitle = styled.div`
  @media (max-width: 400px) {
    transition: display 3s;
    display: none;
  }
`
// const Logo = styled.img`
//   height: 15px;
//   width: 15px;
//   border: 2px solid transparent;
//   margin: 5px;
//   @media (max-width: 400px) {
//     transition: width 1s, height 1s;
//     height: 20px;
//     width: 20px;
//   }
// `
const A = styled.a`
  font-size inherit;
  text-decoration: none;
  color: inherit;
`

export default Header;
