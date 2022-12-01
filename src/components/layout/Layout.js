import React from 'react'

import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer.js';
import {Outlet} from 'react-router-dom';
import "./Layout.css"
import { MainStyle, HeaderStyle } from './LayoutStyle';
import { useLocation } from 'react-router-dom';

const Layout = () => {

  let location = useLocation();

  return (
    <>
    <Navbar/>
    <HeaderStyle  changeSizeHeaderOnPath={location.pathname === "/coffee"}>
    <Header/>
    </HeaderStyle>
    <MainStyle changeTheBackgroundOnPath={location.pathname === "/"}>
    <main>
        <Outlet/>
    </main>
    </MainStyle>
    <Footer/>
    </>
  )
}

export default Layout