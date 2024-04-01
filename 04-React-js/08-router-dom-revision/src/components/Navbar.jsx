import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='flex justify-center gap-5 mt-3 mb-5'>
        <li><Link to=''>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
        <li><Link to='service'>Services</Link></li>
    </ul>
  )
}

export default Navbar