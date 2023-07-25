import React from 'react'
import { NavLink } from 'react-router-dom';
import links from '../../utils/link';
import { useAppContext } from '../../context/appContext';

const NavLinks = ({toggleSidebar}) => {

  const {user} = useAppContext()
  console.log({user});
  return (
    <div className='nav-links'>
        {links.map((link) => {

            const { text, path, id, icon } = link;

            if ((text === 'add admin' || text === 'profile') && user.isStaff) {
              return null; 
          }

            return (
                <NavLink
                to={path}
                key={id}
                onClick={toggleSidebar}
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                <span className='icon'>{icon}</span>
                {text}
                </NavLink>
            );
        })}
    </div>
  )
}

export default NavLinks