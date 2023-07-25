import React from 'react'
import Wrapper from '../../assets/wrappers/Genderreveal'
import { NavbarLanding,GridGender } from "../../assets/components"
import { useAppContext } from '../../context/appContext'
import genderReveal from "../../assets/images/gallery/genderHeader.svg"
const Genderreveal = () => {
    const {genderRevealPhotos} = useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image title-gender'>
                    <h1 className='title'>GENDER REVEAL</h1>
                    <img src={genderReveal} alt="genderReveal" />
                </div>
            </div>
            <div className='m-5'>
                <GridGender photos={genderRevealPhotos}/>
            </div>
        </Wrapper>
    )
}

export default Genderreveal