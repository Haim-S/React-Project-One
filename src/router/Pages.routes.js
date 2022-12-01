import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";


import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import CoffePage from '../pages/CoffePage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

const PagesRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coffee' element={<CoffePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default PagesRoutes