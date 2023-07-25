import React from 'react'
import Wrapper from '../../assets/wrappers/Debut'
import { GridDebut, NavbarLanding } from "../../assets/components"
import debut from "../../assets/images/gallery/debutHeader.svg"
import { useAppContext } from '../../context/appContext'

const Debut = () => {
    const {debutPhotos} = useAppContext()
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='div-container'>
                <div className='header-image'>
                    <h1 className='title'>DEBUT</h1>
                    <img src={debut} alt="debut" />
                </div>
            </div>
            <div className='m-5'>
                <GridDebut photos={debutPhotos}/>
            </div>
        </Wrapper>
    )
}

export default Debut