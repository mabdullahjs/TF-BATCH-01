import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import ResponsiveAppBar from '../../components/Navbar'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <ResponsiveAppBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routerconfig