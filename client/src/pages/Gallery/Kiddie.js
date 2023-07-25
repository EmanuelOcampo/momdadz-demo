import React from 'react'
import kiddie from "../../assets/images/gallery/kiddieHeader.svg"
import Wrapper from '../../assets/wrappers/Kiddie'
import { GridKiddie, NavbarLanding } from "../../assets/components"
import { useAppContext } from '../../context/appContext'
const Kiddie = () => {
    const {kiddiePhotos} =useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image'>
                    <h1 className='title'>KIDDIE</h1>
                    <img src={kiddie} alt="gallery" />
                </div>
            </div>
            <div className='m-5'>
                <GridKiddie photos={kiddiePhotos}/>
            </div>
        </Wrapper>
    )
}

export default Kiddie