import React from 'react'
import "./Header.css";
import { useLocation } from 'react-router-dom';

const Header = () => {


  let location = useLocation();

  return (
    <header>

    {location.pathname === "/React-Project-One/" &&  <h1>welcome to my api coffee</h1>}
    {location.pathname === "/React-Project-One/coffee" &&  <h1>coffee shop</h1>}
    {location.pathname === "/React-Project-One/about" &&  <h1>about me</h1>}
    
    </header>
  )
}

export default Header