import React from 'react'
import Wrapper from '../../assets/wrappers/Baptismal'
import { GridBaptismal, NavbarLanding } from "../../assets/components"
import baptismal from "../../assets/images/gallery/baptismalHeader.svg"
import { useAppContext } from '../../context/appContext'

const Baptismal = () => {
    const {baptismalPhotos} = useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image'>
                    <h1 className='title'>BAPTISMAL</h1>
                    <img src={baptismal} alt="gallery" />
                </div>
            </div>
            <div className='m-5'>
                <GridBaptismal photos={baptismalPhotos}/>
            </div>
        </Wrapper>
    )
}

export default Baptismal