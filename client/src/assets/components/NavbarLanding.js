import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Wrapper from '../wrappers/NavbarLanding'
import Logo from './Logo'
import ProfileButton from './profileButton'
import { useAppContext } from '../../context/appContext'

const NavbarLanding = () => {
    const { user } = useAppContext()

    return (
        <Wrapper>
            <nav className="navbar navbar-expand-lg navbar-light nav-landing last">
                <Logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-nav ">
                            <NavLink to='/Landing' activeClassName='active-nav-link' className='nav-link'>
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-nav ">
                            <NavLink to='/package' activeClassName='active-nav-link' className='nav-link'>
                                Package
                            </NavLink>
                        </li>
                        <li className="navbar-nav ">
                            <NavLink to='/menu' activeClassName='active-nav-link' className='nav-link'>
                                menu
                            </NavLink>
                        </li> 
                        <li className="navbar-nav ">
                            <NavLink to='/gallery' activeClassName='active-nav-link' className='nav-link'>
                                Gallery
                            </NavLink>
                        </li>
                        <li className="navbar-nav">
                            {user ? <ProfileButton /> :
                                <div className='nav-btn-right'>
                                    <Link to='/booking' className='btn-home btn btn-hero booking-btn btn--doar '>
                                        book now
                                    </Link>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light nav-landing">
                <Logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-nav ">
                            <NavLink to='/Landing' activeClassName='active-nav-link' className='nav-link underline'>
                                Home
                            </NavLink>
                        </li>
                        <li className="navbar-nav ">
                            <NavLink to='/package' activeClassName='active-nav-link' className='nav-link underline'>
                                Package
                            </NavLink>
                        </li>
                        <li className="navbar-nav ">
                            <NavLink to='/menu' activeClassName='active-nav-link' className='nav-link underline'>
                                Event menu
                            </NavLink>
                        </li>
                        <li className="navbar-nav ">
                            <NavLink to='/gallery' activeClassName='active-nav-link' className='nav-link underline'>
                                Gallery
                            </NavLink>
                        </li>
                        <li className="navbar-nav">
                            {user ? <ProfileButton /> :
                                <div className='nav-btn-right'>
                                    {/* <Link to='/register' className='btn-home btn btn-hero'>
                                        Login / Register
                                    </Link> */}
                                    <Link to='/booking' className='booking-btn btn-home btn btn-hero   '>
                                        book now
                                    </Link>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </Wrapper>
    )
}

export default NavbarLanding