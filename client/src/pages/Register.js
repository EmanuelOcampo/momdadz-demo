import { useEffect, useState } from 'react'
import { Logo, FormRow, Alert } from '../assets/components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate, Link } from 'react-router-dom'
import { IoReturnUpBackOutline } from 'react-icons/io5'
//initial state for the states of VALUE

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}


const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  //get global states in appContext
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } = useAppContext()
  //this code is to choose whether login or register the client
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  //look for the value that client time before click the submit and set that to VALUES
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    console.log(values);
    //this condition is to determine if input data are equal to nothing
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    //this code is get the values of user
    const currentUser = { name, email, password }


    //when the condition is true
    if (isMember) {
      //notify that already a member
      loginUser(currentUser)
    } else {
      //create or register that values
      registerUser(currentUser)
    }

  }

  useEffect(() => {
    try {
      if (user) {
        navigate('/')
      }
      if (user.isAdmin) {
        setTimeout(() =>
          navigate('/')
          , 3000)
      } else {
        setTimeout(() =>
          navigate('/landing')
          , 3000)

      }
    } catch (error) {
      console.log(error);
    }
  }, [user, navigate])


  return (
    <Wrapper className='full-page'>
        <Link to='/' className='btn-home btn btn-hero btn-back'>
            <IoReturnUpBackOutline size={32}/>
        </Link>

      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            labelText="First Name"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />


        <button
          type='submit'
          className='btn btn-block'
          disabled={isLoading}>
          submit
        </button>
        {/* <p>
          {values.isMember ? "Not a member yet" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
          or 
          </p> */}
          <p>
        <button
            type="button"
            className="member-btn">
                 Forgot password
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register