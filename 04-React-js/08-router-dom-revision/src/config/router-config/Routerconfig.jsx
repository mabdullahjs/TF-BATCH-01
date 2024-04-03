import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import About from '../../screens/About'
import Contact from '../../screens/Contact'
import Services from '../../screens/Services'
import Navbar from '../../components/Navbar'
import Product from '../../screens/Product'
import Login from '../../screens/Login'
import Register from '../../screens/Register'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='about/*' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='service' element={<Services/>}/>
                <Route path='product/:id' element={<Product/>}/>
            </Routes>

            
        </BrowserRouter>
    )
}

export default Routerconfig