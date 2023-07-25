import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return <Link to="/landing">      
    <img src={logo} alt="jobify"
    className='logo' />
  </Link>
}

export default Logo
