import React from 'react'
import Wrapper from '../wrappers/Footer'
import { IoNavigate } from 'react-icons/io5'
import { BsFillTelephoneFill, BsFacebook, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
const Footer = () => {

    return (
        <Wrapper>
            <footer>
                <div className=' main-content row'>
                    <div className='div-footer col-md'>
                        <h4>Find us</h4>
                        <p>MomDad'Z provides great food and excellent services, creating memories to be treasured forever.</p>
                        <div className='contact'>
                            <div className='content'>
                                <IoNavigate className='icon' />
                                <p>Block 21 Lot 7 Phase 5 Kasoy Street Marycris Complex Executive Homes,Malagasang 2G, Imus</p>
                            </div>
                            <div className='content'>
                                <MdEmail className='icon' />
                                <p>momdadzevents.sales@gmail.com</p>
                            </div>
                            <div className='content'>
                                <BsFillTelephoneFill className='icon' />
                                <p>+63 917 815 5948</p>
                            </div>
                        </div>
                    </div>

                    <div className='div-footer col-md'>
                        <h4>Gallery</h4>
                        <p><a href='/wedding'>Wedding</a></p>
                        <p><a href='/corporate'>Corporate</a></p>
                        <p><a href='/genderreveal'>Gender Reveal</a></p>
                        <p><a href='/baptismal'>Baptismal</a></p>
                        <p><a href='/birthday'>Birthday</a></p>
                        <p><a href='/debut'>Debut</a></p>
                        <p><a href='/kiddie'>Kiddie Party</a></p>
                    </div>

                    <div className='div-footer col-md'>
                        <h4>Menu</h4>
                        <p><a href='/menu/#chicken'>Chicken</a></p>
                        <p><a href='/menu/#fish'>Fish</a></p>
                        <p><a href='/menu/#beef'>Beef</a></p>
                        <p><a href='/menu/#vagetable'>Vegetable</a></p>
                        <p><a href='/menu/#beef'>Pasta</a></p>
                        {/* <p><a href='/menu/#beef'>Beverages</a></p> */}
                        <p><a href='/menu/#beef'>Dessert</a></p>
    
                    </div>

                    <div className='div-footer col-md'>
                        <h4>Follow us</h4>
                        <div className='content '>
                            <BsFacebook className='icon' />
                            <p><a href='https://www.facebook.com/MomDadZ23'>MomDad'Z Events and Catering Services</a></p>
                        </div>
                        <div className='content '>
                            <BsTwitter className='icon' />
                            <p>MomDad'Z Events and Catering Services</p>
                        </div>
                        <div className='content '>
                            <AiFillInstagram className='icon' />
                            <p><a href='https://www.instagram.com/momdadz_events'>MomDad'Z Events and Catering Services</a></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='links'>
                    <h5><a href='/'>  Home</a></h5>
                    <h5><a href='/package'>Package</a></h5>
                    <h5><a href='/menu'>Event menu</a></h5>
                    <h5><a href='/booking'>Booking</a></h5>
                </div>
                <div className='copyright'>
                    <p>Copyright @ 2023 | Design with AISAT College</p>
                </div>
            </footer>
        </Wrapper>
    )
}

export default Footer