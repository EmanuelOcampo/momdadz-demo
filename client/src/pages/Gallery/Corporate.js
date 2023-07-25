import React from 'react'
import Wrapper from '../../assets/wrappers/Corporate'
import { GridCorporation, NavbarLanding } from "../../assets/components"
import { useAppContext } from '../../context/appContext'
import corporate from "../../assets/images/gallery/corporateHeader.svg"
const Corporate = () => {
    const {corporatePhotos} = useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image'>
                    <h1 className='title'>CORPORATE</h1>
                    <img src={corporate} alt="corporate" />
                </div>
            </div>
            <div className='m-5'>
                <GridCorporation photos={corporatePhotos}/>
            </div>
        </Wrapper>
    )
}

export default Corporate