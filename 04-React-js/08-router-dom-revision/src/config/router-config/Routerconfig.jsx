import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import About from '../../screens/About'
import Contact from '../../screens/Contact'
import Services from '../../screens/Services'
import Navbar from '../../components/Navbar'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='service' element={<Services/>}/>
            </Routes>

            
        </BrowserRouter>
    )
}

export default Routerconfig