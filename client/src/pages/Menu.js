import React from 'react'
import { NavbarLanding, Footer, MultipleCarousel, SwiperCard } from '../assets/components'
import Wrapper from '../assets/wrappers/Menu'
import { chopysuy,karekare,marble,beans,buttered} from '../assets/images/menu/veggies'
import {tofu,souce,mascuvado,garlic} from '../assets/images/menu/fish'
import {beef_caldereta,beef_stroganoff,beef_broccoli,korean_beef,roast_beef} from '../assets/images/menu/beef'
import {chicken_cordon,chicken_alaking,chicken_teriyaki,roast_chicken,fried_chicken} from '../assets/images/menu/chicken'
import { lumpiang_shanghai,menudo,pork_supreme,pork_spare_ribs,roast_pork} from '../assets/images/menu/pork'
import {brownies,buko_cotta,cheesecake,FSALAD,choco_mouse,leche_flan,m_cotta} from '../assets/images/menu/dessert'
import {baked_macaroni,baked_panne,carbonara,charlie_chan,alfredo,spagetti} from '../assets/images/menu/PASTA'
const Menu = () => {
    return (
        <Wrapper>
            <NavbarLanding />
            <div className='Menu-content row'>
                <div className=' desert-content'>
                    <h2 >
                        Our catering service, we believe that food should not only taste
                        good but also look beautiful. Our dishes are prepared with the freshest
                        ingredients, and presented in a way that adds an extra touch of elegance
                        to your event.
                    </h2>
                </div>
                {/* <div className="menu-category col-sm-12 col-md-6 desert">
                    <MultipleCarousel
                        img1={buttered}
                        img2={buttered}
                        img3={buttered}
                        img4={buttered}
                        img5={buttered}
                    />
                </div> */}
                <div className='category-menu'>
                    <hr />
                    <h1 id='chicken'>Chicken</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={chicken_cordon}
                            img2={chicken_alaking}
                            img3={chicken_teriyaki}
                            img4={roast_chicken}
                            img5={fried_chicken}
                        />
                    </div>
                </div>
                <div className='category-menu'>
                    <h1 id='pork'>Pork</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={lumpiang_shanghai}
                            img2={menudo}
                            img3={pork_supreme}
                            img4={pork_spare_ribs}
                            img5={roast_pork}
                        />
                    </div>
                </div>
                <div className='category-menu'>
                    <h1 id='beef'>Beef</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={beef_caldereta}
                            img2={beef_stroganoff}
                            img3={beef_broccoli}
                            img4={korean_beef}
                            img5={roast_beef}
                        />
                    </div>
                </div>
                <div className='category-menu'>
                    <h1 id='fish'>Fish</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={tofu}
                            img2={souce}
                            img3={mascuvado}
                            img4={garlic}
                        />
                    </div>
                </div>
                <div className='category-menu'>
                    <h1>Pasta / Noodles</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={baked_macaroni}
                            img2={baked_panne}
                            img3={carbonara}
                            img4={charlie_chan}
                            img5={alfredo}
                            img6={spagetti}
                        />
                    </div>
                </div>
                <div className='category-menu'>
                    <h1 id='vagetable'>Veggies</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={chopysuy}
                            img2={karekare}
                            img3={beans}
                            img4={buttered}
                            img5={marble}
                        />
                    </div>
                </div>
                <div className='category-menu'>
                    <h1>Dessert</h1>
                    <div className='swiper-container'>
                        <SwiperCard
                            img1={brownies}
                            img2={buko_cotta}
                            img3={cheesecake}
                            img4={FSALAD}
                            img5={choco_mouse}
                            img6={leche_flan}
                            img7={m_cotta}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    )
}

export default Menu