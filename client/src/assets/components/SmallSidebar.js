import React from 'react'
import Wrapper from '../wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import {useAppContext} from '../../context/appContext'
import Logo from '../components/Logo'
import NavLinks from './NavLinks'

const SmallSidebar = () => {

  const {showSidebar, toggleSidebar} = useAppContext()

  return (
    <Wrapper>
        <div className={showSidebar? "sidebar-container show-sidebar": "sidebar-container"}>
          <div className="content"> 
            <button 
              type='button' 
              className='close-btn'  
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <header>
              <Logo/>
            </header>
              {/* need to input picture here or admin profile pic pag sinipag ako */}
            <NavLinks toggleSidebar={toggleSidebar}/>
          </div>
        </div> 
    </Wrapper>
  )
}

export default SmallSidebar