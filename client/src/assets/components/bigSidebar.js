import React from 'react'
import Wrapper from '../wrappers/BigSidebar'
import { useAppContext } from '../../context/appContext'
import Momz from './Momz'
import NavLinks from './NavLinks'

const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  
  return (
    <Wrapper>
        <div 
          className={
            showSidebar? 'sidebar-container' : 'sidebar-container show-sidebar'  
            }
        >
          <div className="content">
            <header>
              <Momz/>
            </header>
           
              {/* need to input picture here or admin profile pic pag sinipag ako */}

            <NavLinks/>
          </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar