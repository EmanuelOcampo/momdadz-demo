import moment from 'moment'
import Wrapper from '../../assets/wrappers/Booking'
import { Link } from 'react-router-dom'
import BookingInfo from './BookingInfo'
import { FaCalendar,FaTransgender,FaBirthdayCake } from "react-icons/fa"
import {IoIosTime,IoMdAnalytics} from 'react-icons/io'
import {MdContactPhone, MdPlace} from 'react-icons/md'
import {CgOrganisation,CgGirl,CgBoy} from 'react-icons/cg'
import {TbFlower} from 'react-icons/tb'
import {BsPaletteFill} from 'react-icons/bs'
import { useAppContext } from '../../context/appContext'

const Booking = ({
  _id,
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
  status,
  //optional setting start here
  gender,
  celebName,
  age,
  groomName,
  brideName,
  companyName
}) => {

  let formattedDate = moment(date)
  formattedDate = formattedDate.format('MMMM DD, YYYY')
  // console.log(formattedDate);

  //get 2 status on appContext
  const {setAcceptBooking, cancelBooking} = useAppContext()

  return ( 
    <Wrapper>
      <header>
        <div className="main-icon">{fName.charAt(0)}</div>
        <div className='info'>
          <h5>{fName} {MI}. {lName} </h5>
          <p>{
            eventType === 'bDayParty'? 'Birthday Party' : 
            eventType === 'gReveal' ? 'Gender Reveal' : 
            eventType === 'kiddieParty'? 'Kiddie Party' : eventType 
          }</p>
          
          {eventType  === 'wedding'? 
            <>
              <BookingInfo icon={<CgBoy/>} text={groomName}/> 
              <BookingInfo icon={<CgGirl/>} text={brideName}/>
            </>
           : null
          }

          <p>  {email}</p>
        </div>
      </header>
      <div className="content">
      <div className={`status ${status}`}>{status}</div>
      <div className="content-center">
       
        {/* if corporate event display the company name */}
        {eventType ==='corporate' ? <BookingInfo icon={<CgOrganisation/>} text={companyName} />: null }

        {eventType ==='baptismal'? 
          <>
            <BookingInfo icon={<FaBirthdayCake/>} text={celebName} /> 
            <BookingInfo icon={<FaTransgender/>} text={gender} />
          </>
          : null     
        }

        {eventType === 'bDayParty' || eventType ==='kiddieParty' || eventType === 'debut'? 
          <>
            <BookingInfo icon={<FaBirthdayCake/>} text={celebName} /> 
            <BookingInfo icon={<IoMdAnalytics/>} text={'age ' + age} />
            <BookingInfo icon={<FaTransgender/>} text={gender} />
          </>
          : null     
        }
        
        <BookingInfo icon={<MdPlace/>} text={venue} />
        <BookingInfo icon={<IoIosTime/>} text={time} />
        <BookingInfo icon={<FaCalendar/>} text={formattedDate} />
        <BookingInfo icon={<TbFlower/>} text={theme} />        
        <BookingInfo icon={<BsPaletteFill/>} text={motif} />
        <BookingInfo icon={<MdContactPhone/>} text={contactNumber} />
        
  
        {/* {eventType === 'bDayParty'? <BookingInfo icon={<SiEventbrite/>} text={'Birthday Party'} /> : null} */}
      </div>
      
        <footer>
          <div className='actions'>
            {status === 'cancelled'? null : 
            <>
              <Link 
                to='/acceptBooking'
                className='btn accept-btn'
                onClick={()=> setAcceptBooking(_id)}
              >
                {status === 'accepted'? 'edit Booking' : "accept Booking"}          
              </Link>
              <Link 
                type='button' 
                className='btn delete-btn'
                onClick={() => {
                  cancelBooking(_id)
                  window.location.reload();
                }}
              > 
                cancel Booking
              </Link>
            </>}
            
          </div>
        </footer>
      </div>
    </Wrapper>
    )
}

export default Booking