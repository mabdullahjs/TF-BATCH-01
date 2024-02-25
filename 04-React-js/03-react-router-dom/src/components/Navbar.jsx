import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
      <ul className='flex justify-center gap-5 m-5'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
        <li><Link to='services'>Services</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar