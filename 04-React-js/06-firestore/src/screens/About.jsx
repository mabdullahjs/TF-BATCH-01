import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    // function hello(name){
    //     console.log('abc' + name);
    // }
  return (
    <>
    <button onClick={()=>navigate('/about')}>screen1</button>
    <button onClick={()=>navigate('/about/screen2')}>screen2</button>
    <button onClick={()=>navigate('/about/screen3')}>screen3</button>
    <Routes>
        <Route path='/' element={<h1>Screen1</h1>}/>
        <Route path='/screen2' element={<h1>Screen2</h1>}/>
        <Route path='/screen3' element={<h1>Screen3</h1>}/>
    </Routes>
    </>
  )
}

export default About