import React, {useState} from 'react'
import { useAppContext } from '../../context/appContext'
import {FaUserCircle, FaCaretDown } from 'react-icons/fa' 
import Wrapper from '../wrappers/Profilebutton'

const ProfileButton = () => {

    const [showLogout, setShowLogout] = useState(false)
   
    const {logoutUser, user} = useAppContext()

    return (
        <Wrapper>
        <div className="btn-container">
            <button 
            type='button' 
            className='btn' 
            onClick={ ()=> setShowLogout(!showLogout)}
            >
            <FaUserCircle/>
            {user?.name}
            <FaCaretDown />
            </button>

            <div className={showLogout?"dropdown show-dropdown" : 'dropdown' }> 
            <button 
            type='button' 
            className='dropdown-btn' 
            onClick={logoutUser}
            >
                Logout
            </button>
            </div>

        </div>
    </Wrapper>
    )
}

export default ProfileButton