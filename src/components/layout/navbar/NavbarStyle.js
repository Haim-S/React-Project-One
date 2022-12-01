
import styled from "@emotion/styled";


export const NavbarContainer = styled.div`
margin-left:30px;
width: 100vw;
hight: 100vh;
display: flex;
align-items: center;
justify-content: space-between;

`

export const NavbarLinksGroup = styled.ul`
list-style: none;
padding-right: 18px;
padding-top: 30px;
width: 250px;
height: 100%;
display: flex;
align-item: center;
justify-content: space-evenly;
`

export const NavbarLinkStyle = styled.li`
display: flex;
align-items: center;
justify-content: center;
height: 90%;
&:hover {
    border-bottom: 2px solid red;
  }
`