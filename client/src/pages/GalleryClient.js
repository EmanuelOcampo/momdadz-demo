import React from 'react'
import { NavbarLanding, Footer, GalleryContainer } from '../assets/components'
import { useAppContext } from '../context/appContext'
import weddingBG from "../assets/images/gallery/wedding.svg"
import kiddieBG from "../assets/images/gallery/kiddie.jpg"
import corporateBG from "../assets/images/gallery/corporate.jpg"
import debutBG from "../assets/images/gallery/debut.jpg"
import genderBG from "../assets/images/gallery/gender.jpg"
import batismalBG from "../assets/images/gallery/baptismal.jpg"
import birthdayBG from "../assets/images/gallery/birthday.jpg"
import headerImg from "../assets/images/gallery/headerGalleryImg.svg"
import Wrapper from '../assets/wrappers/GalleryClient'
const GalleryClient = () => {
    const { photos, clientName } = useAppContext()

    return (
        <Wrapper>
            <NavbarLanding />
            {/* <div className='header-image'>
                <h1 className='title'>GALLERY</h1>
                <img src={headerImg} alt="gallery" />
            </div> */}
            <div className='gallery-content'>
                <div className='row'>
                    <div class="col-sm-4">
                        <GalleryContainer background={kiddieBG} labelText="KIDDIE PARTY" handleClick="/kiddie" />
                    </div>
                    <div class="col-sm-4">
                        <GalleryContainer background={corporateBG} labelText="CORPORATE" handleClick="/corporate" />
                    </div>
                    <div class="col-sm-4">
                        <GalleryContainer background={birthdayBG} labelText="BIRTHDAY" handleClick="/birthday" />
                    </div>
                </div>
                <div className='row '>
                    <GalleryContainer background={weddingBG} labelText="WEDDING" handleClick="/wedding" />
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <GalleryContainer background={debutBG} labelText="DEBUT" handleClick="/debut" />
                    </div>
                    <div className='col-sm'>
                        <GalleryContainer background={batismalBG} labelText="BAPTISMAL" handleClick="/baptismal" />
                    </div>
                    <div className='col-sm'>
                        <GalleryContainer background={genderBG} labelText="GENDER REVEAL" handleClick="/genderreveal" />
                    </div>
                </div>
            </div>
            <Footer />

        </Wrapper>
    )
}

export default GalleryClient