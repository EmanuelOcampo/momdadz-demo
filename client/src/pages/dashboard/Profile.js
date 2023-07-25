import React, { useState } from 'react'
import {FormRow, Alert} from '../../assets/components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'


const Profile = () => {
  const {user, showAlert, displayAlert ,updateUser,isLoading} = useAppContext()
  //if there is a name use it as initial 

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)
  
  const handleSubmit =(e) => {
    e.preventDefault()
    if(!name || !lastName || !email || !location){
      displayAlert()
      return
    }
    updateUser({
      name, 
      email,
      lastName,
      location
    })
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit} >
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
        {/* this form or input is for name */}
          <FormRow 
            type='text' 
            name="name" 
            value={name} 
            handleChange={(e)=>setName(e.target.value)}
          />
          <FormRow 
            type='text' 
            labelText='Last Name'
            name="lastName" 
            value={lastName} 
            handleChange={(e)=>setLastName(e.target.value)}
          />
          <FormRow 
            type='email' 
            name="email" 
            value={email} 
            handleChange={(e)=>setEmail(e.target.value)}
          />

          {/* not sure kung kasama pa please need revision to this */}
          {/* can be an address if gusto ko */}
          <FormRow 
            type='text' 
            name="location" 
            value={location} 
            handleChange={(e)=>setLocation  (e.target.value)}
          />
          
          <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'please Wait...':'save changes'}
          </button>
        </div>
      </form>


    </Wrapper>  
  )
}

export default Profile