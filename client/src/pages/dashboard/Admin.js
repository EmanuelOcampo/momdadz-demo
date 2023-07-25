import React, { useState } from 'react'
import { FormRow, Alert } from '../../assets/components'
import Wrapper from '../../assets/wrappers/RegisterPage'
import { useAppContext } from '../../context/appContext'
// import { Modal, Button } from 'react-bootstrap'
import ModalAlert from '../../assets/components/Modal'
import { AiFillWarning } from 'react-icons/ai'
const initialState = {
  name: '',
  LName: '',
  email: '',
  password: '',
  isStaff: true
}

const Admin = () => {
  const [values, setValues] = useState(initialState);
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const clearValues = () =>{
    setValues({
      ...values,
      name: '',
      LName: '',
      email: '',
      password: '',
    })
  }

  const { user, displayAlert, showAlert, isLoading, registerStaff } = useAppContext()

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, LName, email, password } = values

    console.log({ values })

    if (!email || !password || !name || !LName) {
      displayAlert();
      return;
    }

    const staffUser = { name, LName, email, password }
    if (!user.isStaff) {
      registerStaff(staffUser)
      clearValues()
    } else {
    setShow(true)
    }
  }


  return (
    <Wrapper>
      <form className='form form-admin' onSubmit={onSubmit}>
        <h1>create admin Account</h1>
        {showAlert && <Alert />}
        <div className='row'>
          <div className="col-sm">
            <FormRow
              type="text"
              labelText="First Name"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div className="col-sm">
            <FormRow
              type="text"
              labelText="Last Name"
              name="LName"
              value={values.LName}
              handleChange={handleChange}
            />
          </div>
        </div>

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />


        <button
          type='submit'
          className='btn btn-block'
          disabled={isLoading}
        >
          Add
        </button>
      </form>
      <ModalAlert
        show={show}
        handleClose={handleClose}
        icon={<AiFillWarning />}
        title="Error"
        content="You are not authorized to create an admin account. As a staff,
        you do not have the necessary permissions to perform this action.
        Please contact the owner if you require additional privileges"
        // link={"/add-admin"}
      />
    </Wrapper>
  )
}

export default Admin