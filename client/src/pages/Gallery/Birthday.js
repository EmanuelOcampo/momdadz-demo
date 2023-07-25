import React from 'react'
import Wrapper from '../../assets/wrappers/Birthday'
import { GridBirthday, NavbarLanding } from "../../assets/components"
import birthday from "../../assets/images/gallery/birthdayHeader.svg"
import { useAppContext } from '../../context/appContext'

const Birthday = () => {
    const {birthdayPhotos} = useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image'>
                    <h1 className='title'>BIRTHDAY</h1>
                    <img src={birthday} alt="birthday" />
                </div>
            </div>
            <div className='m-5'>
                <GridBirthday photos={birthdayPhotos}/>
            </div>
        </Wrapper>
    )
}

export default Birthday