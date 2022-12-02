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
        <Route path='/React-Project-One/' element={<Layout/>}>
        <Route path='/React-Project-One/' element={<HomePage/>}/>
        <Route path='/React-Project-One/coffee' element={<CoffePage/>}/>
        <Route path='/React-Project-One/about' element={<AboutPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default PagesRoutes