import React from 'react'
import { useAppContext } from '../../context/appContext'

//this function is to print an div to notify or show the alert
const Alert = () => {
  const {alertType, alertText} = useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>
        {alertText}
    </div>
  )
}

export default Alert