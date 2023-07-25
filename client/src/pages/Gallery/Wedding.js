import React from 'react'
import Wrapper from '../../assets/wrappers/Wedding'
import { GridWedding, NavbarLanding } from "../../assets/components"
import wedding from "../../assets/images/gallery/weddingHeader.svg"
import { useAppContext } from '../../context/appContext'

const Wedding = () => {
    const {weddingPhotos} =useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image'>
                    <h1 className='title'>WEDDING</h1>
                    <img src={wedding} alt="gallery" />
                </div>
            </div>
            <div className='m-5'>
                <GridWedding photos={weddingPhotos}/>
            </div>
        </Wrapper>
    )
}

export default Wedding