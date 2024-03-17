import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import ResponsiveAppBar from '../../components/Navbar'
import { Typography } from '@mui/material'
import ProtectedRoutes from './ProtectedRoutes'
import About from '../../screens/About'

const Routerconfig = () => {
    return (
        <BrowserRouter>
        <ResponsiveAppBar />
            <Routes>
                <Route path='/' element={<ProtectedRoutes component={<Home />}/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about/*' element={<About />} />
                <Route path='*' element={<Typography>No Page Found 404!</Typography>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routerconfig