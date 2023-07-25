import React, {useEffect} from 'react'
import moment from 'moment'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow, Alert } from '../../assets/components'
import { useAppContext } from '../../context/appContext'
import { Link, useNavigate } from 'react-router-dom'


const AcceptBooking = () => {
  const {
    editBookingId,
    displayAlert,
    showAlert,
    handleChange,
    fName,
    lName,
    MI,
    eventType,
    email,
    venue,
    date,
    time,
    motif,
    theme,
    contactNumber,
    //optional setting start here
    gender,
    celebName,
    age,
    groomName,
    brideName,
    companyName,
    acceptBooking,
    status
  } = useAppContext()

  const navigate = useNavigate();

  let formattedDate = moment(date)
  formattedDate = formattedDate.format('YYYY-MM-DD')



  const handleBookingInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value);
    handleChange({ name, value })
  }

  const handleDateChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    handleChange({ name, value })


  }

  function handleSelect(event) {
    const name = event.target.name
    const value = event.target.value
    handleChange({ name, value })
    // console.log(name , value);
  };
  //fix the issue of erasing id if refresh the browser
  useEffect(() => {

    if (!editBookingId) {
      setTimeout(() =>
        navigate("/bookings")
      )
    }
  }, [editBookingId, navigate])
  
  const OnSubmit = (e) => {
    e.preventDefault()

    // check the empty values
    if (!fName || !lName || !MI || !eventType || !venue || !motif || !theme || !contactNumber || !date || !time ||
      (eventType === "bDayParty" && (!gender || !celebName || !age)) ||
      (eventType === "corporate" && !companyName) ||
      (eventType === "baptismal" && !celebName) ||
      (eventType === "wedding" && (!groomName || !brideName))
    ) {
      displayAlert();
      return
    }
    setTimeout(() => {
      navigate('/bookings')
    }, 3000);
    
    acceptBooking();

  }

  return (
    <Wrapper>
      <form className='form' onSubmit={OnSubmit}>
        <h3>Check Booking</h3>
        {showAlert && <Alert />}
        <div>
          <div className='form-center form-bottom'>
            <FormRow
              type='text'
              labelText='First Name'
              name='fName'
              value={fName} 
              handleChange={handleBookingInput}
            />
            <FormRow
              type='text'
              labelText='Last Name'
              name='lName'
              value={lName}  
              handleChange={handleBookingInput}
            />
            <FormRow
              type='text'
              labelText='M.I.'
              name='MI'
              value={MI}
              handleChange={handleBookingInput}
            />

            <div className="form-group">
              <span className="form-label">Event Type</span>

              <select className="form-select" name='eventType' 
              value={eventType} 
              onChange={handleSelect} 
              >
                <option value="bDayParty">  Birthday Party  </option>
                <option value="corporate">  Corporate Event </option>
                <option value="gReveal">    Gender Reveal   </option>
                <option value="baptismal">  Baptismal Event </option>
                <option value="kiddieParty">Kiddie Party    </option>
                <option value="debut">      Debut           </option>
                <option value="wedding">    Wedding         </option>
              </select>
              {/* <span className="select-arrow"></span> */}
            </div>
          </div>

         
          {/* start of event type setting */}
          <div className='form-center form-bottom'>
          {/* company event setting */}

            {eventType === 'corporate'?
              <FormRow
                type='text'
                labelText='Company Name'
                name='companyName'
                value={companyName} 
                handleChange={handleBookingInput}
              />  : null
            }
      
          {/* wedding event setting */}
            {eventType === 'wedding'?
            <>
              <FormRow
                type='text'
                labelText="groom full Name"
                name='groomName'
                value={groomName} 
                handleChange={handleBookingInput}
                
                />
              <FormRow
                type='text'
                labelText="Bride Full Name"
                name='brideName'
                value={brideName} 
                handleChange={handleBookingInput} 
              />
            </> : null}
          
          {/* bday and debut and kiddie setting */}
          {eventType === 'bDayParty' || eventType ==='kiddieParty' || eventType === 'debut'? 
          <>
           <FormRow
              type='text'
              labelText="Celebrant's Name"
              name='celebName'
              value={celebName}  
              handleChange={handleBookingInput}
            />

            <FormRow
              type='text'
              labelText="age"
              name='age'
              value={age}  
              handleChange={handleBookingInput}
            />
            {/* gender  */}
            
            <FormRow
              type='text'
              name='gender'
              value={gender} 
              handleChange={handleBookingInput} 
              
            />
          </> : null }
            
            
          </div>
        

          {/* default value for booking form */}
          <div className='form-center form-bottom'>
            <FormRow
              type='text'
              name='venue'
              value={venue}  
              handleChange={handleBookingInput}
            />

            <FormRow
              type='date'
              name='date'
              value={formattedDate}  
              handleChange={handleDateChange}
            />

            <FormRow
              type='time'
              name='time'
              value={time}  
              handleChange={handleBookingInput}
            />

            <FormRow
              type='text'
              name='motif'
              value={motif} 
              handleChange={handleBookingInput}
            />

            <FormRow
              type='text'
              name='theme'
              value={theme} 
              handleChange={handleBookingInput}
            />

            <FormRow
              type='text'
              labelText='Contact Number'
              name='contactNumber'
              value={contactNumber} 
              handleChange={handleBookingInput}
            />
              <FormRow
              type='email'
              labelText='email adress'
              name='email'
              value={email} 
              handleChange={handleBookingInput}
            />
          </div>
          <div className='btn-setAcceptBooking'>
            <div className='actions'>
              <button 
                className='btn accept-btn'
              >
                Confirm Booking          
              </button>
              <Link 
                to='/bookings' 
                className='btn delete-btn'
              >
                 Back        
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AcceptBooking