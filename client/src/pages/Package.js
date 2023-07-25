import React from 'react'
import { NavbarLanding, Footer, SwiperCube } from '../assets/components'
import packageBG from "../assets/images/packageBG.jpg"
import sample from "../assets/images/service.jpg"
import Wrapper from "../assets/wrappers/Package"

const Package = () => {
    
    return ( 
        <Wrapper>
            <NavbarLanding />
            <div className="package-content">
                <div>
      
                <SwiperCube/>





                </div>
                {/* <div className='package-menu'>
                    <div className='package-title'>
                        <h3>Menu pack</h3>
                    </div>
                    <div className='package-title'>
                        <h3>Menu pack</h3>
                    </div>
                    <div className='package-title'>
                        <h3>Menu pack</h3>
                    </div>
                </div> */}












































                {/* <div className='header-image'>
                    <img src={packageBG} alt="package" />
                    <div className='title-container'>
                        <h1 className='title'>Wedding</h1>
                    </div>
                </div>
                <div className='desktop'>
                    <div className="content">
                        <div className='package-container row'>
                            <div className='col-md-12 col-lg-6 pd-3 category-package'>
                                <h1>wedding</h1>
                                <img src={sample} alt="" />
                            </div>
                            <div className='col-md-12 col-lg-6  category-package'>
                                <h1>wedding</h1>
                                <img src={sample} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className='package-container row'>
                            <div className='col-md-12 col-lg-6 pd-3 category-package'>
                                <img src={sample} alt="" />
                                <h1>wedding</h1>
                            </div>
                            <div className='col-md-12 col-lg-6 category-package'>
                                <img src={sample} alt="" />
                                <h1>wedding</h1>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className='package-container row'>
                            <div className='col-md-12 col-lg-6 pd-3 category-package'>
                                <h1>wedding</h1>
                                <img src={sample} alt="" />
                            </div>
                            <div className='col-md-12 col-lg-6 category-package'>
                                <h1>wedding</h1>
                                <img src={sample} alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </Wrapper>
    )
}

export default Package