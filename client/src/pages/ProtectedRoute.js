import React from 'react'
import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

//protect the route from not logged and not admin
const ProtectedRoute = ({children}) => {

    const {user} =  useAppContext()

    //check if there is user account
    if(!user){
        return <Navigate to='landing'/>

    //check if the user is admin if not redirect to landing
    } else if (!user.isAdmin){
        return <Navigate to='landing'/>
    }
    return children
}

export default ProtectedRoute