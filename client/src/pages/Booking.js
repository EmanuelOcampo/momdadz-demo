import React from 'react'
import Wrapper from '../assets/wrappers/BookingForm'
import logo from '../assets/images/logo.svg'
import { NavbarLanding, BookingForm, GenderOption, ModalAlert } from '../assets/components'
import { useAppContext } from '../context/appContext'
import { FcApproval } from 'react-icons/fc'
import {MdOutlineErrorOutline} from "react-icons/md"
const eventTypeOption = {
  isBirthday: false,
  isWedding: false,
  isDebut: false,
  isCorporate: false,
  isKiddie: false,
  isBaptismal: false,
  isGReveal: false
}


//function here to print the input and convert to object
const Booking = () => {
  //get user from appContext
  const {
    displayAlert,
    alertType,
    alertText,
    handleChange,
    fName,
    lName,
    MI,
    eventType,
    venue,
    date,
    email,
    time,
    motif,
    theme,
    contactNumber,
    gender, //for bday,debut and kiddie 
    celebName, //for bday,debut,kiddie and Baptismal 
    age, //for bday,debut and kiddie 
    groomName, //for wedding 
    brideName, //for wedding 
    companyName, //for Corporate
    createBooking,
    isLoading,
  } = useAppContext()

  //get the name of input and save using event listener
  const handleBookingInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    handleChange({ name, value })
  }

  //this function is update the event type
  function handleSelect(event) {
    const name = event.target.name
    const value = event.target.value
    handleChange({ name, value })
  };

  //funtion to handle the date change

  const handleDateChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    handleChange({ name, value })
  }

  //this function will passed to child to get the gender
  const getGender = (event) => {
    const name = 'gender'
    const value = event.target.value
    handleChange({ name, value })
  }

  const now = new Date().toISOString().split('T')[0];

  if (eventType === "wedding") {
    // initialState.eventType = "wedding"
    eventTypeOption.isWedding = true;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isKiddie = false;
    eventTypeOption.isDebut = false;

  } else if (eventType === "corporate") {
    // initialState.eventType = "corporate"
    eventTypeOption.isCorporate = true;
    eventTypeOption.isWedding = false;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isKiddie = false;
    eventTypeOption.isDebut = false;

  } else if (eventType === "gReveal") {
    // initialState.eventType = "gReveal"
    eventTypeOption.isGReveal = true;
    eventTypeOption.isWedding = false;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isKiddie = false;
    eventTypeOption.isDebut = false;

  } else if (eventType === "baptismal") {
    // initialState.eventType = "baptismal"
    eventTypeOption.isBaptismal = true;
    eventTypeOption.isWedding = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isKiddie = false;
    eventTypeOption.isDebut = false;

  } else if (eventType === "kiddieParty") {
    // initialState.eventType = "kiddieParty"
    eventTypeOption.isKiddie = true;
    eventTypeOption.isWedding = false;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isDebut = false;

  } else if (eventType === "debut") {
    // initialState.eventType = "debut"
    eventTypeOption.isDebut = true;
    eventTypeOption.isWedding = false;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isKiddie = false;

  } else if (eventType === "bDayParty") {
    // initialState.eventType = "bDayParty"
    eventTypeOption.isBirthday = true;
    eventTypeOption.isWedding = false;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isKiddie = false;
    eventTypeOption.isDebut = false;

  } else {  
    eventTypeOption.isWedding = false;
    eventTypeOption.isBaptismal = false;
    eventTypeOption.isCorporate = false;
    eventTypeOption.isBirthday = false;
    eventTypeOption.isGReveal = false;
    eventTypeOption.isKiddie = false;
    eventTypeOption.isDebut = false;
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    // check the empty values
    if (!fName || !lName || !eventType || !venue || !motif || !theme || !contactNumber || !date || !time ||
      (eventType === "bDayParty" && (!gender || !celebName || !age)) ||
      (eventType === "corporate" && !companyName) ||
      (eventType === "baptismal" && !celebName) ||
      (eventType === "wedding" && (!groomName || !brideName))
    ) {
      displayAlert();
      return
    }

    try {
      createBooking()
    } catch (error) {
      console.log(error);
    }

  }

  //this effect is redirect the user to register if not register
  // useEffect(() => {

  //   if (!user) {
  //     setTimeout(() =>
  //       navigate("/Register")
  //     )
  //   }
  // }, [user, navigate])

  return (
    <Wrapper className='full-page-bookingForm'>
      <NavbarLanding />
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="booking-cta">
                  <h1>Make your reservation</h1>
                  <p>So why settle for ordinary catering when you can have an extraordinary dining experience? Let us cater your next event and make it a day to remember! Contact us today to schedule your consultation
                  </p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="booking-form">
                  <img src={logo} alt="momdadz" className='logo-booking' />
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-sm-4">
                        <BookingForm
                          type="text"
                          label="First Name"
                          name="fName"
                          value={fName}
                          handleChange={handleBookingInput}
                          placeholder="Enter First Name"
                        />
                      </div>

                      <div className="col-sm-4">
                        <BookingForm
                          type="text"
                          label="Last Name"
                          name="lName"
                          value={lName}
                          handleChange={handleBookingInput}
                          placeholder="Enter Last Name"
                        />
                      </div>

                      <div className="col-sm-4">
                        <BookingForm
                          type="text"
                          label="M.I."
                          name="MI"
                          value={MI}
                          handleChange={handleBookingInput}
                          placeholder="Middle Initial"
                        />
                      </div>
                    </div>
                    {/* type of event need to input here so other are depend on the event type*/}
                    <div className="form-group">
                      <span className="form-label">Event Type</span>
                      <select className="form-select" name='eventType' value={eventType} onChange={handleSelect} >
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
                    {/* changeable setting based on the type of event */}
                    {/* gender reveal is no changes only prior details */}
                    {/* Baptismal input*/}
                    {eventType === 'baptismal' && (
                      <div>
                        <div className="row">
                          <BookingForm
                            type="text"
                            label="Celebrant's name"
                            name="celebName"
                            value={celebName}
                            handleChange={handleBookingInput}
                            placeholder="Enter Full Name of celebrant"
                          />
                        </div>
                        {/* for celebrant gender */}
                        <label className='form-label'>Select Celebrant gender:</label>
                        <GenderOption
                          onGetGender={getGender}
                        />
                      </div>
                    )}
                    {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {eventTypeOption.isWedding && (
                      <div>
                        <BookingForm
                          type="text"
                          label="Groom Full Name"
                          name="groomName"
                          value={groomName}
                          handleChange={handleBookingInput}
                          placeholder="Enter Full Name of Groom"
                        />

                        <BookingForm
                          type="text"
                          label="Bride Full Name"
                          name="brideName"
                          value={brideName}
                          handleChange={handleBookingInput}
                          placeholder="Enter Full Name of Bride"
                        />
                      </div>
                    )}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/* birthday input */}
                    {(eventTypeOption.isBirthday || eventTypeOption.isKiddie || eventTypeOption.isDebut) && (
                      <div>
                        <div className="row">
                          <div className="col-sm-9">
                            <BookingForm
                              type="text"
                              label="Celebrant's name"
                              name="celebName"
                              value={celebName}
                              handleChange={handleBookingInput}
                              placeholder="Enter Full Name of celebrant"
                            />
                          </div>

                          <div className="col-sm-3">
                            <BookingForm
                              type="text"
                              label="Age"
                              name="age"
                              value={age}
                              handleChange={handleBookingInput}
                              placeholder="Age"
                            />
                          </div>
                        </div>

                        <label className='form-label'>Select Celebrant gender:</label>
                        <GenderOption
                          onGetGender={getGender} //pass a function getGender to get the value
                        />
                      </div>
                    )}

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {eventTypeOption.isCorporate && (
                      <div>
                        <BookingForm
                          type="text"
                          label="Company Name"
                          name="companyName"
                          value={companyName}
                          handleChange={handleBookingInput}
                          placeholder="Enter Company name"
                        />
                      </div>
                    )}



                    {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                    {/*///////////////////// Location or adress /////////////////////  */}
                    <div className="form-group">
                      <BookingForm
                        type="text"
                        label="Venue"
                        name="venue"
                        value={venue}
                        handleChange={handleBookingInput}
                        placeholder="Enter venue of the event"
                      />
                    </div>


                    <div className="row">
                      <div className="col-sm-6">

                        {/* ///////////////////// date of event ///////////////////// */}

                        <BookingForm
                          type="date"
                          label="Date of Event"
                          name="date"
                          value={date}
                          handleChange={handleDateChange}

                        />
                      </div>


                      {/* ///////////////////// Time of event ///////////////////// */}
                      <div className="col-sm-6">
                        <div className="form-group">
                          <BookingForm
                            type="time"
                            label="Time of Event"
                            name="time"
                            value={time}
                            handleChange={handleBookingInput}
                            minDate={now}
                          />
                        </div>
                      </div>
                    </div>

                    {/* ///////////////////// Motif of event ///////////////////// */}

                    <div className="row">
                      <div className="col-sm-6">

                        <div className="form-group">
                          <BookingForm
                            type="text"
                            label="Color Motif"
                            name="motif"
                            value={motif}
                            handleChange={handleBookingInput}
                            placeholder="example: blue and white"
                          />
                        </div>
                      </div>


                      {/* ///////////////////// theme of event ///////////////////// */}
                      <div className="col-sm-6">
                        <div className="form-group">
                          <BookingForm
                            type="text"
                            label="Theme"
                            name="theme"
                            value={theme}
                            handleChange={handleBookingInput}
                            placeholder="example: Cars"
                          />
                        </div>
                      </div>
                    </div>

                    {/* ///////////////////// Contact Number of client ///////////////////// */}
                    <div className='row'>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <BookingForm
                            type="tel"
                            label="Contact Number"
                            name="contactNumber"
                            value={contactNumber}
                            handleChange={handleBookingInput}
                            placeholder="example: 09XXXXXXX77"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <BookingForm
                            type="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            handleChange={handleBookingInput}
                            placeholder="email@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="form-btn col-sm-6 pt-0">
                        <button className="btn btn-available" disabled={isLoading} >Check availability</button>
                      </div>
                    </div>
                  </form>
                  {
                    alertType === "success" ?
                  <ModalAlert
                    show={true}
                    icon={<FcApproval />}
                    title="Successful Booking"
                    content="We're excited to have you! Your booking has been successfully processed
                      and we'll be in touch soon with further details."
                    link={"/landing"}
                  /> : null
                  }
                  {
                  alertType === "danger"?
                  <ModalAlert
                    show={true}
                    icon={<MdOutlineErrorOutline />}
                    title="Error"
                    content={alertText}
                  />: null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Booking