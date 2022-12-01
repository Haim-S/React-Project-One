import React from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../../../constant/links'
import { NavbarContainer, NavbarLinksGroup, NavbarLinkStyle } from './NavbarStyle'
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav>
     <NavbarContainer>
      <div>
        <img style={{width:"110px"}} src='https://cdn.shopify.com/s/files/1/0626/5221/9570/files/LOGO.png?v=1663758760&width=400'/>
      </div>
<NavbarLinksGroup>
  {navbarLinks.map((link, index)=> (
  <NavbarLinkStyle key={index}>
  <Link to={link.paht}>{link.label}</Link>
  </NavbarLinkStyle>
))}
</NavbarLinksGroup>
</NavbarContainer>
    </nav>
  )
}

export default Navbar