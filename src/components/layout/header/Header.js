import React from 'react'
import "./Header.css";
import { useLocation } from 'react-router-dom';

const Header = () => {


  let location = useLocation();

  return (
    <header>

    {location.pathname === "/" &&  <h1>welcome to my api coffee</h1>}
    {location.pathname === "/coffee" &&  <h1>coffee shop</h1>}
    {location.pathname === "/about" &&  <h1>about me</h1>}
    
    </header>
  )
}

export default Header