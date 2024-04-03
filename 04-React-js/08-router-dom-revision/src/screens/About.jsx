import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className='text-center mt-5 text-5xl'>Main About</h1>
      <div className='flex justify-center gap-5 mt-5'>
        <button onClick={()=>navigate('/about')} className="btn btn-primary">About 1</button>
        <button onClick={()=>navigate('/about/2')} className="btn btn-primary">About 2</button>
        <button onClick={()=>navigate('/about/3')} className="btn btn-primary">About 3</button>
      </div>

      <Routes>
        <Route path='/' element={<h1 className='text-center mt-3 text-4xl'>About 1</h1>}/>
        <Route path='/2' element={<h1 className='text-center mt-3 text-4xl'>About 2</h1>}/>
        <Route path='/3' element={<h1 className='text-center mt-3 text-4xl'>About 3</h1>}/>
      </Routes>
    </>
  )
}

export default About