import React from 'react'
import { Pagination,Autoplay ,EffectCube} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Wrapper from '../wrappers/SwiperCube';

const SwiperCube = () => {
  return (
    <Wrapper>
      <Swiper
        effect="cube"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        autoHeight={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        pagination={{clickable:true}}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
            <SwiperSlide className='slide'>
                <h1>Basic Set Up</h1>
                <ul>
                    <li>
                        <h4>8x16ft full stage Set up</h4>
                    </li>
                
                    <li>
                        <h4>theme character 2d props </h4>
                    </li>
                
                    <li>
                        <h4>full backdrop Balloons</h4>
                    </li>
                
                    <li>
                        <h4>Happy Birthday / Little one (LED light Signage)</h4>
                    </li>
                
                    <li>
                        <h4>Celebrant's Name</h4>
                    </li>
                
                    <li>
                        <h4>10pcs themed centerpiece</h4>
                    </li>
                
                    <li>
                        {/* <h4>Entrance arch with theme character and Balloon</h4> */}
                        <h4>Theme character and Balloon</h4>
                    </li>   
                </ul>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <div>
                    <h1 >Menu Package</h1>
                    <ul>
                        <li>
                            <h4>1 pork or beef dish</h4>
                        </li>
                        <li>
                            <h4>1 chicken dish</h4>
                        </li>
                        <li>
                            <h4>1 fish dish</h4>
                        </li>
                        <li>
                            <h4>1 pasta or veggies</h4>
                        </li>
                        <li>
                            <h4>1 dessert</h4>
                        </li>
                        <li>
                            <h4>Rice</h4>
                        </li>
                        <li>
                            <h4>Iced tea</h4>
                        </li>
                    </ul>
                </div>
            </SwiperSlide>

            <SwiperSlide className='slide'>
                <h1>Buffet set-up</h1>
                <ul>
                    <li>
                        <h4>Uniformed waiters</h4>
                    </li>
                    <li>
                        <h4>Complete set up tables and chairs</h4>
                    </li>
                    <li>
                        <h4>Utensils, dinnerware and glassware</h4>
                    </li>
                    <li>
                        <h4>Theme stage Floor cover / Carpet</h4>
                    </li>
                    <li>
                        <h4>Cake pedestral</h4>
                    </li>
                </ul>
            </SwiperSlide>

            <SwiperSlide className='slide'>
                <h1>Cake package</h1>
                <ul>
                    <li>
                        <h4>1 layer cake and 24pcs cupcakes</h4>
                    </li>
                    <li>
                        <h4>or</h4>
                    </li>
                    <li>
                        <h4>2 layers cake</h4>
                    </li>
                    <li>
                        <h4>or</h4>
                    </li>
                    <li>
                        <h4>2 layer Fondant cake</h4>
                    </li>
                </ul>
            </SwiperSlide>
            


    
        </Swiper>
    </Wrapper>
  )
}

export default SwiperCube