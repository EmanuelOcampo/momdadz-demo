import React, { useState } from 'react'
import Wrapper from '../wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import {BiLogOut} from "react-icons/bi"
import { useAppContext } from '../../context/appContext'
import Logo from './Logo'

const Navbar = () => {


  const [showLogout, setShowLogout] = useState(false)


  const { toggleSidebar, logoutUser, user } = useAppContext()
  return (
    <Wrapper>
      <div className="nav-center">

        <button
          className='toggle-btn'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <div className="">
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>


        <div className="btn-container">
          <button
            type='button'
            className='btn main-btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>

          <button
            type='button'
            className='btn btn2'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
          </button>


          <div className={showLogout ? "dropdown show-dropdown" : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={logoutUser}
            >
              Logout
              
            </button>
            <button
              type='button'
              className='dropdown-btn logout'
              onClick={logoutUser}
            >
              <BiLogOut className='logout'/>
            </button>
          </div>

        </div>

      </div>
    </Wrapper>
  )
}

export default Navbar